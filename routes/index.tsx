// routes/index.tsx
import { Head } from "$fresh/runtime.ts";
import Calculator from "../islands/FPE-Calculator.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Insulin Calculator</title>
      </Head>
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h1 class="text-2xl font-bold text-center mb-8">Insulin Calculator</h1>
                  <Calculator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
