import OtherProductCard from "./OtherProductCard";

const productDetails = [
    {
        id:1,
        imgurl:"https://cdn.shopify.com/s/files/1/0974/7950/products/20221018_MonogramCC_Case_06_1080x720_crop_center.jpg?v=1666726898",
        title:"MONOGRAM CARRYING CASE",
        price:59
    },
    {
        id:2,
        imgurl:"https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_CoreBracket1_Monogram_May2020_4578_6683fd8e-be63-45bb-9fbd-dd82a4838db8_750x500_crop_center.jpg?v=1593651640",
        title:"MONOGRAM CORE",
        price:159
    },
    {
        id:3,
        imgurl:"https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_SliderBracket1_Monogram_May2020_4565_f941e8d9-d194-47ee-a54a-79132f105e34_750x500_crop_center.jpg?v=1593651879",
        title:"SLIDER MODULE",
        price:159
    },
    {
        id:4,
        imgurl:"https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_KeysBracket1_Monogram_May2020_4571_43b65ca9-4fde-4f55-9f0e-32374554ce76_1366x911_crop_center.jpg?v=1593651769",
        title:"PRE-ORDERESSENTIAL KEYS MODULE",
        price:129
    },
    {
        id:5,
        imgurl:"https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_OrbiterHero_Monogram_May2020_4568_3d64e8b3-71ce-441a-9fcd-2b054c423310_1366x911_crop_center.jpg?v=1593651849",
        title:"ORBITER MODULE",
        price:159
    },
    {
        id:6,
        imgurl:"https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_DialBracket1_Monogram_May2020_4575_981a6401-f834-4094-9a6e-6cd7d0b374ca_1366x911_crop_center.jpg?v=1593651701",
        title:"DIAL MODULE",
        price:129
    },
    {
        id:7,
        imgurl:"https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-midi-final-august_1080x778_crop_center.jpg?v=1661440892",
        title:"CONSOLE PACK: AUDIO",
        price:29
    },
    {
        id:8,
        imgurl:"https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-photo-final-august_1920x1382_crop_center.jpg?v=1661440997",
        title:"CONSOLE PACK: PHOTO",
        price:39
    },
    {
        id:9,
        imgurl:"https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-video-final-august_1366x984_crop_center.jpg?v=1661441054",
        title:"CONSOLE PACK: VIDEO",
        price:69
    }
]

function OtherProfuctDisplay() {
    return ( 
        <>
        <div className="container sm:grid grid-cols-3 place-items-center sm:p-4 sm:w-11/12 m-auto gap-8">
        {productDetails.map((object) => (
                <OtherProductCard key={object.id} data={object} />
            ))}
        
        
        {/* <OtherProductCard/>
        <OtherProductCard/>
        <OtherProductCard/>
        <OtherProductCard/>
        <OtherProductCard/>
        <OtherProductCard/>
        <OtherProductCard/>
        <OtherProductCard/> */}
        </div>
            
        </>
     );
}

export default OtherProfuctDisplay;