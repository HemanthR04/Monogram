function Banner() {
    return ( 
        <>
            <div className="banner-container h-bannermobile  w-11/12 mx-auto sm:h-bannerHeight sm:w-full bg-banner flex items-center justify-center flex-col relative font-Inter text-navblue my-24">
                <div className="banner-content absolute top-0 sm:top-10 text-center">
                <p className=" text-4xl font-bold tracking-wide">CREATE YOUR OWN CONSOLE</p>
                <p className="">Add-on to make it perfect.</p>
                </div>
                <div className="banner-img">
                <img className="sm:h-imgHeihgt pt-20 sm:pt-0" src="https://monogramcc.com/static/fb6b98aa90bbce383e12a09c50936e96/40a01/shop-banner-module.jpg" alt="" />

                </div>
                

            </div>
        </>
     );
}

export default Banner;