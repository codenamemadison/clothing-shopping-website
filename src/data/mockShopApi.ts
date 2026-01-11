import type { Product } from "../types/projectTypes";
import { mockProductData } from "./mockProductData";

function sleep(ms: number): Promise<void> { 
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Simulate a network error with a given probability
function maybeFail(prob = 0.1){
    if (Math.random() < prob) {
        throw new Error('Mock network error');
    }
}

// Simulate fetching all products
export async function getProducts(): Promise<Product[]> {
    await sleep(1000); // Increased delay to see skeleton loading
    maybeFail(0.05);
    return mockProductData;
}

// Simulate fetching a single product
export async function getProduct(id: string): Promise<Product | null> {
    await sleep(300)
    maybeFail(0.05);
    return mockProductData.find(product => product.id === id) || null;
}