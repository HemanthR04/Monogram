import ProductCard from "./ProductCard";

function ProductDisplay() {
    return ( 
        <>
            <div className="product-display w-10/12 mx-auto  grid grid-cols-2 items-center place-items-center gap-4 my-12 p-4">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </>
     );
}

export default ProductDisplay;