function Hero() {
    return ( 
        <>  
            
            <div className="hero-container w-full h-heroMobile sm:h-heroHeight relative overflow-hidden flex items-center justify-center font-Inter" >
                <img src="https://monogramcc.com/static/9a0b554db1990565457610c5f83b3ad7/91943/shop_cta_xl_896f6b8270.webp" alt="" className="brightness-50 absolute left-0 top-0 w-full h-96 sm:h-auto"/>
            <div className="hero-content text-pink1 relative ">
                    <p className="text-4xl sm:text-7xl font-semibold tracking-tight text-center font-Supreme ">A CONSOLE FOR<br></br> EVERY WORKFLOW</p>
                    <p className="text-md  text-center py-8 tracking-wider">Discover the perfect console for yours</p>
                </div>
            </div>
            
        </>
     );
}

export default Hero;