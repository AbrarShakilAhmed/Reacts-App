function Footer(){
    let D =new  Date()
    return(
        <div>
            <footer className="bg-slate-600 text-center text-lg text-white">&copy; Claim by Abrar Shakil ( {D.getFullYear()})</footer>
        </div>
    )
}
export default Footer