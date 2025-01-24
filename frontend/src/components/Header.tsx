import { useNavigate } from "react-router-dom";
import logo from "../assets/logo3.webp";
import darkMode from "../assets/dark-mode.svg"

export const Header = () => {
    const navigate = useNavigate();

    function handleLogoClick() {
        navigate("/home");
    }

    return (
        <>
        <header className="py-3 flex items-center justify-around">
            <div className="flex items-center gap-x-2">
                <div className="">
                    <img onClick={handleLogoClick} src={logo} alt="Logo" className="cursor-pointer w-12 h-12 rounded-full" />
                </div>
                <div>
                    vidya paliwal
                </div>
            </div>

            <div className="flex space-x-4 gap-x-4">
                <a href="/about" className="text-zinc-600 hover:text-red-500 cursor-pointer"> About </a>
                <a href="/projects" className="text-zinc-600 hover:text-red-500 cursor-pointer">My Projects </a>
                <a href="/blogs" className="text-zinc-600 hover:text-red-500 cursor-pointer"> Blog </a>
                {/* <a href="/work" className="text-zinc-600 hover:text-red-500 cursor-pointer"> Work </a> */}
                {/* <a href="/books" className="text-zinc-600 hover:text-red-500 cursor-pointer"> Books </a> */}
                <a href="/contact" className="text-zinc-600 hover:text-red-500 cursor-pointer"> Contact </a>
            </div>

            <div className="flex items-center ml-4">
                <img src={darkMode} alt="dark-mode" className="w-6 h-6 text-gray-800 hover:text-blue-500" />
            </div>
        </header>
        </>
    )
}
