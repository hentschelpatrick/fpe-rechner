// utils/calculations.ts
export function calculateTotalInsulin(
    carbInsulin: number,
    fpeInsulin: number,
    plannedExercise: boolean,
    exerciseDuration: number
  ): number {
    let total = carbInsulin + fpeInsulin;
    if (plannedExercise && exerciseDuration > 0) {
      const reductionFactor = Math.min(exerciseDuration / 30 * 0.2, 0.5);
      total *= (1 - reductionFactor);
    }
    return Math.round(total * 10) / 10;
  }
  
  export function calculateFPEDuration(
    fpe: number,
    plannedExercise: boolean,
    exerciseDuration: number
  ): number {
    let duration = Math.min(Math.ceil(fpe) + 2, 7);
    if (plannedExercise && exerciseDuration > 0) {
      duration = Math.max(duration - Math.floor(exerciseDuration / 30), 2);
    }
    return duration;
  }
  