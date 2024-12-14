import heroimg from "./assets/pexels-eberhardgross-1428277.jpg"
function Hero(){
    return(
        <img src={heroimg} alt="hero img" className="mb-9 h-[400px] bg-cover w-[100%]" />
    )
}

export default Hero;