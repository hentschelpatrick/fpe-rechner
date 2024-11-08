// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_openfoodfacts from "./routes/api/openfoodfacts.tsx";
import * as $index from "./routes/index.tsx";
import * as $utils_interfaces_ProductInfo from "./routes/utils/interfaces/ProductInfo.tsx";
import * as $utils_interfaces_ProductNutrients from "./routes/utils/interfaces/ProductNutrients.tsx";
import * as $FPE_Calculator from "./islands/FPE-Calculator.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/openfoodfacts.tsx": $api_openfoodfacts,
    "./routes/index.tsx": $index,
    "./routes/utils/interfaces/ProductInfo.tsx": $utils_interfaces_ProductInfo,
    "./routes/utils/interfaces/ProductNutrients.tsx":
      $utils_interfaces_ProductNutrients,
  },
  islands: {
    "./islands/FPE-Calculator.tsx": $FPE_Calculator,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
