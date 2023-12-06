/* eslint-disable react/prop-types */

function ProductCard(props) {
console.log(props.data)
const {title,subtitle,price,imgurl,id} = props.data
   
    return ( 


        <>
            <div  id ={id} className="card-container w-productwidth h-productheight m-2 font-Inter text-navblue relative" >
                <img src={imgurl} alt="" />
               <div className="product-content flex  items-center justify-between">
               <div className="product-details py-2 my-2">
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