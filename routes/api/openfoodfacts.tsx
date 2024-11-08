import { ProductInfo } from "../utils/interfaces/ProductInfo.tsx";

const API_BASE_URL = "https://world.openfoodfacts.net/api/v2";
const FIELDS = "product_name,nutriments,serving_size";

export async function fetchOpenFoodFactsInfoByServingSize(barcode: string): Promise<ProductInfo> {
    try {
        const response = await fetch(
            `${API_BASE_URL}/product/${barcode}?fields=${FIELDS}`,
            {
                headers: {
                    "User-Agent": "InsulinCalculator/1.0",
                },
            },
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.product) {
            return {
                name: "N/A",
                servingSize: "N/A",
                nutrients: {
                    carbs: 0,
                    protein: 0,
                    fat: 0,
                },
                success: false,
                error: "Product not found",
            };
        }

        return {
            name: data.product.product_name || "N/A",
            servingSize: data.product.serving_size || "N/A",
            nutrients: {
                carbs: data.product.nutriments?.carbohydrates_serving || 0,
                protein: data.product.nutriments?.proteins_serving || 0,
                fat: data.product.nutriments?.fat_serving || 0,
            },
            success: true,
        };
    } catch (error) {
        console.error("Error fetching product info:", error);
        return {
            name: "N/A",
            servingSize: "N/A",
            nutrients: {
                carbs: 0,
                protein: 0,
                fat: 0,
            },
            success: false,
            error: error instanceof Error
                ? error.message
                : "Unknown error occurred",
        };
    }
}

