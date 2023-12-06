function Banner() {
    return ( 
        <>
            <div className="banner-container w-full h-bannerHeight bg-banner flex items-center justify-center flex-col relative font-Inter text-navblue my-24">
                <div className="banner-content absolute top-10 text-center">
                <p className=" text-4xl font-bold tracking-wide">CREATE YOUR OWN CONSOLE</p>
                <p className="">Add-on to make it perfect.</p>
                </div>
                <div className="banner-img">
                <img className="h-imgHeihgt" src="https://monogramcc.com/static/fb6b98aa90bbce383e12a09c50936e96/40a01/shop-banner-module.jpg" alt="" />

                </div>
                

            </div>
        </>
     );
}

export default Banner;