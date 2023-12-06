function ProductCard() {

   
    return ( 


        <>
            <div className="card-container w-productwidth h-productheight m-2 font-Inter text-navblue relative" >
                <img src="https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-final_1920x1281_crop_center.jpg?v=1660013247" alt="" />
               <div className="product-content flex  items-center justify-between">
               <div className="product-details py-2 my-2">
                <p className="font-semibold">MINI CONSOLE</p>
                <p className="text-sm">Ideal for everyday shortcuts. Adaptable to any workflow.</p>
                </div>
                <div className="product-price m-2">
                    <p>$249</p>
                </div>
               </div>
                <div className="preorder bg-pink1 text-blacktext w-32 py-1 text-center font-bold text-sm absolute top-4 right-0">
                    <p>PRE-ORDER</p>
                </div>
                
            </div>
        </>
     );
}

export default ProductCard;