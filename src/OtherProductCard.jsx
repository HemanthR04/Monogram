/* eslint-disable react/prop-types */
function OtherProductCard(props) {
    console.log(props)
    const {id,imgurl,title,price} =props.data
    return ( 
        <>
            <div id={id} className="product-container sm:w-96 h-heroMobile font-Inter text-navblue relative m-8 hover:scale-105 transition-all duration-500 overflow-hidden shadow-lg rounded-lg cursor-pointer">
                <div className="product-img">
                    <img className="" src={imgurl} alt="" />
                </div>
                <div className="prodtuct-details flex justify-between items-center p-4">
                    <div className="product-name font-bold w-1/2 pr-4 text-xl">{title}</div>
                    <div className="product-price text-lg">${price}</div>
                </div>
                <div className="preorder bg-pink1 text-blacktext w-32 py-1 text-center font-bold text-sm absolute top-4 right-0">
                    <p>PRE-ORDER</p>
                </div>
            </div>
        </>
     );
}

export default OtherProductCard;