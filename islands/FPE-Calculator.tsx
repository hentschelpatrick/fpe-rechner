// islands/Calculator.tsx
import { useState } from "preact/hooks";
import { calculateTotalInsulin, calculateFPEDuration } from "../components/calculations.tsx";


interface CalculatorState {
  carbs: number;
  protein: number;
  fat: number;
  carbFactor: number;
  fpeFactor: number;
  plannedExercise: boolean;
  exerciseDuration: number;
}

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    carbs: 0,
    protein: 0,
    fat: 0,
    carbFactor: 1,
    fpeFactor: 0.5,
    plannedExercise: false,
    exerciseDuration: 0,
  });

  const carbInsulin = (state.carbs / 10) * state.carbFactor;
  const fpeCalories = state.fat * 9 + state.protein * 4;
  const fpe = Math.round(fpeCalories / 100 * 10) / 10;
  const fpeInsulin = fpe <= 5 ? fpe * state.fpeFactor : 5 * state.fpeFactor + (fpe - 5) * state.fpeFactor * 0.5;
  
  const totalInsulin = calculateTotalInsulin(carbInsulin, fpeInsulin, state.plannedExercise, state.exerciseDuration);
  const fpeDuration = calculateFPEDuration(fpe, state.plannedExercise, state.exerciseDuration);

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : Number(target.value);
    setState({ ...state, [target.name]: value });
  };

  return (
    <div class="space-y-6">
      <InputField
        label="Carbohydrates (g)"
        name="carbs"
        value={state.carbs}
        onChange={handleInputChange}
      />
      
      <InputField
        label="Protein (g)"
        name="protein"
        value={state.protein}
        onChange={handleInputChange}
      />
      
      <InputField
        label="Fat (g)"
        name="fat"
        value={state.fat}
        onChange={handleInputChange}
      />
      
      <InputField
        label="Carb Factor"
        name="carbFactor"
        value={state.carbFactor}
        step="0.1"
        onChange={handleInputChange}
      />
      
      <InputField
        label="FPE Factor"
        name="fpeFactor"
        value={state.fpeFactor}
        step="0.1"
        onChange={handleInputChange}
      />

      <div class="flex items-center">
        <input
          type="checkbox"
          name="plannedExercise"
          checked={state.plannedExercise}
          onChange={handleInputChange}
          class="h-4 w-4 text-blue-600"
        />
        <label class="ml-2">Planned Exercise</label>
      </div>

      {state.plannedExercise && (
        <InputField
          label="Exercise Duration (minutes)"
          name="exerciseDuration"
          value={state.exerciseDuration}
          onChange={handleInputChange}
        />
      )}

      <div class="mt-8 space-y-4 bg-gray-50 p-4 rounded-lg">
        <ResultRow label="Carb Insulin" value={`${carbInsulin.toFixed(1)} units`} />
        <ResultRow label="FPE" value={fpe.toFixed(1)} />
        <ResultRow label="FPE Insulin" value={`${fpeInsulin.toFixed(1)} units`} />
        <ResultRow label="Total Insulin" value={`${totalInsulin} units`} />
        <ResultRow label="FPE Duration" value={`${fpeDuration} hours`} />
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange, step = "1" }) {
  return (
    <div class="flex flex-col">
      <label class="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="number"
        name={name}
        value={value}
        step={step}
        min="0"
        onChange={onChange}
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      />
    </div>
  );
}

function ResultRow({ label, value }) {
  return (
    <div class="flex justify-between items-center">
      <span class="font-medium">{label}:</span>
      <span class="text-blue-600">{value}</span>
    </div>
  );
}
