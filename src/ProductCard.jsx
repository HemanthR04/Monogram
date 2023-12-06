/* eslint-disable react/prop-types */

function ProductCard(props) {

const {title,subtitle,price,imgurl,id} = props.data
   
    return ( 


        <>
            <div  id ={id} className="card-container sm:w-productwidth sm:h-productheight m-2 my-10 font-Inter text-navblue relative cursor-pointer shadow-xl  rounded-lg hover:scale-105 transition-all duration-500 overflow-hidden" >
                <img src={imgurl} alt="" className="rounded-tr-lg rounded-tl-lg hover:scale-105 transition-all duration-500 " />
               <div className="product-content flex  items-center justify-between p-4 bg-whitebg">
               <div className="product-details py-2 my-2 z-10 ">
                <p className="font-semibold">{title}</p>
                <p className="text-sm">{subtitle}</p>
                </div>
                <div className="product-price m-2">
                    <p>${price}</p>
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