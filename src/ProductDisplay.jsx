import ProductCard from "./ProductCard";

const productDetails = [
    {
        id: 1,
        title: "MINI CONSOLE",
        subtitle: "Ideal for everyday shortcuts. Adaptable to any workflow.",
        price: 249,
        imgurl: "https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-final_1920x1281_crop_center.jpg?v=1660013247"
    },
    {
        id: 2,
        title: "AUDIO CONSOLE",
        subtitle: "Ideal for music & audio. Adaptable to any workflow.",
        price: 499,
        imgurl: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_TravelerClosedBracket1_Monogram_May20204517_d3899632-1a43-425f-a16a-1d5b968810c7_750x500_crop_center.jpg?v=1623682377"
    },
    {
        id: 3,
        title: "PHOTO CONSOLE",
        subtitle: "Ideal for photo & video. Adaptable to any workflow.",
        price: 599,
        imgurl: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_StudioClosedBracket1_Monogram_May20204507_548446cb-17c9-4fc2-8b12-ae1b1a308a7e_1080x720_crop_center.jpg?v=1623269261"
    },
    {
        id: 4,
        title: "VIDEO CONSOLE",
        subtitle: "Ideal for Video & Film. Adaptable to any workflow.",
        price: 899,
        imgurl: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_MasterClosedBracket1_Monogram_May20204494_1080x720_crop_center.jpg?v=1623682600"
    }
]

function ProductDisplay() {
    return (
        <>
            <div className="product-display w-10/12 mx-auto my-10 sm:grid sm:grid-cols-2 items-center place-items-center gap-20 my-12 p-4">


                {productDetails.map((object) => (
                    <ProductCard key={object.id} data={object} />
                ))}

            </div>
        </>
    );
}

export default ProductDisplay;