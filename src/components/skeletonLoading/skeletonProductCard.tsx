import '../ui/productCard.css';
import './skeletonLoading.css';

export default function SkeletonProductCard() {
    return (
        <div className="product-info skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-text skeleton-name"></div>
            <div className="skeleton-text skeleton-price"></div>
        </div>
    )
}