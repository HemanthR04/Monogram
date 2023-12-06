function Footer() {
    return ( 
        <>
            <div className="footer-container font-Inter w-full h-productheight bg-navblue text-pink1">
                <div className="footer-links flex items-top justify-center gap-24 py-12">
                    <div className="address">
                        <p className="font-bold text-sm my-8">MONOGRAM</p>
                        <p className="w-40">305 King St. W.Suite 502 Kitchener, ON Canada</p>
                    </div>
                    <div className="quick-links">
                    <p className="font-bold text-sm my-8">QUICK LINKS</p>
                    <ul>
                        <li> <a href="">Home </a></li>
                        <li> <a href="">How it Works</a></li>
                        <li> <a href="">Shop</a></li>
                        <li> <a href="">Download</a></li>
                    </ul>
                    </div>
                    <div className="subscribe">
                    <p className="font-bold text-sm my-8">SUBSCRIBE TO MONOGRAM</p>
                    <p className="w-96">Master productivity with Creative Console and get all the latest Monogram news.</p>
                    <div className="email flex gap-4 items-center my-2">
                        <input type="text" className="bg-transparent  border-2 border-pink1 p-2"  placeholder="Email Address"/>
                        <button className="bg-pink1  text-navblue text-xs px-8 h-10 border-2 border-pink1 rounded-3xl font-bold opacity-70">SUBMIT</button>
                    </div>
                    <div className="copyright">© Monogram 2023</div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Footer;