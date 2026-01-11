import { useState, useEffect } from 'react';
import { getProducts } from '../data/mockShopApi';
import type { Product } from '../types/projectTypes';
import ProductCard from '../components/ui/productCard';
import '../components/ui/productCard.css';
import SkeletonProductCard from '../components/skeletonLoading/skeletonProductCard';


export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        getProducts()
            .then((data) => {
                setProducts(data);
                console.log(data);
            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="shop-container">
            <div className="all-products">
                {isLoading ? (
                    Array.from({ length: 12 }).map((_, index) => (
                        <SkeletonProductCard key={`skeleton-${index}`} />
                    ))
                ) : (
                    products.map(product => 
                        <ProductCard key={product.id} product={product} />
                    )
                )}
            </div>
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}