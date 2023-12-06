function OtherProductCard() {
    return ( 
        <>
            <div className="product-container w-96 h-full font-Inter text-navblue relative m-8">
                <div className="product-img">
                    <img className="" src="https://cdn.shopify.com/s/files/1/0974/7950/products/20221018_MonogramCC_Case_06_1080x720_crop_center.jpg?v=1666726898" alt="" />
                </div>
                <div className="prodtuct-details flex justify-between items-center">
                    <div className="product-name font-bold w-1/2 pr-4 text-xl">MONOGRAM CARRYING CASE</div>
                    <div className="product-price text-lg">$59</div>
                </div>
                <div className="preorder bg-pink1 text-blacktext w-32 py-1 text-center font-bold text-sm absolute top-4 right-0">
                    <p>PRE-ORDER</p>
                </div>
            </div>
        </>
     );
}

export default OtherProductCard;