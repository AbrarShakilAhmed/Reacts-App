import pimg from "./assets/pexels-moh-adbelghaffar-771742.jpg"
function Product(){
    return(
        <div>
            <div className="p-2 bg-slate-400 h-[400px] w-[270px] mx-3 my-7">
                <img src={pimg} alt="" />
            </div>
        </div>
    )
}
export default Product