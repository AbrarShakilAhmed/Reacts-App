function Header(){
return(
    <div className="w-[100%]  bg-slate-600 text-white flex justify-between pr-4">
        <ul className="flex">
            <a className="p-4 text-[17px] hover:bg-purple-950 bg-purple-950" href="#"><li>Home</li></a>
            <a className="p-4 text-[17px] hover:bg-purple-950" href="#"><li>Blog</li></a>
            <a className="p-4 text-[17px] hover:bg-purple-950" href="#"><li>Message</li></a>
            <a className="p-4 text-[17px] hover:bg-purple-950" href="#"><li>Contact</li></a>
            <a className="p-4 text-[17px] hover:bg-purple-950 " href="#"><li>Support</li></a>
        </ul>
        <div className="flex">
            <button>Login</button>
        </div>
    </div>
)
}
export default Header