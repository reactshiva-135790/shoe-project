import Link from "next/link";

const ProductCard = () => {
    return (
        <>
            <Link href="/product/1">
                <img className="w-full" src="/product-1.webp" alt="product-images" />
                <div className="p-4 text-black/[0.9]">
                    <h2 className="text-lg font-medium">shoe</h2>
                    <div className="flex items-center text-black/[0.5]">
                        
                    </div>
                </div>
            </Link>
        </>
    )
}
export default ProductCard;