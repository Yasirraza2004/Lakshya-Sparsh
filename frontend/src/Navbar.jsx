function Navbar() {
    return ( 
    <>
    <div className="container-fluid sticky-top p-0 ">
        <div className="row" style={{backgroundColor:"#458FF0"}}>
            <div className="col-5">
            <img src="/media/images/main-logo.png" style={{ width:"37%", marginLeft:"190px"}}/>
            </div>

            <div className="col-7 p-4 mt-2" style={{display:"flex", gap:"30px"}}>

                <a href="#" style={{color:"white", textDecoration:"none"}}>About us</a>
                <a href="#" style={{color:"white", textDecoration:"none"}}>Start Investing</a>
                <a href="#" style={{color:"white", textDecoration:"none"}}>NRI Corner</a>
                <a href="#" style={{color:"white", textDecoration:"none"}}>Downloads</a>
                <a href="#" style={{color:"white", textDecoration:"none"}}>Gallery</a>
                <a href="#" style={{color:"white", textDecoration:"none"}}>Contact Us</a>
                
                <button>Login</button>
            </div>
        </div>
    </div>
    </> 
    );
}

export default Navbar;