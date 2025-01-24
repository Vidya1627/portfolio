import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import x from "../assets/x.svg"
import youtube from "../assets/youtube.svg"

export const Footer = () => {
    const github_url = "https://github.com/Vidya1627/"
    const linkedin_url = "https://www.linkedin.com/in/vidya7/"
    const youtube_url = "https://www.youtube.com/"
    const x_url = "https://x.com/vidyapaliw27"

    const openMail = () => {
        const recipient = "contact.vidyapaliwal@gmail.com";
        const subject = encodeURIComponent("Hiring for developer role");
        const body = "";
    
        // Attempt to open the default email client (mailto)
        try {
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        } catch (e) {
            // Fallback to Gmail compose
            window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`,
                '_blank'
            );
        }
    }

    return (
        <>
        <footer className="flex items-center p-20 text-sm">
        {/* <footer className="bg-gray-800 text-white text-center py-4">
        </footer> */}
            <div className="px-10">
                <div className="flex m-2 gap-x-4">
                    <a href={github_url} target="_blank" rel="noopener noreferrer"
                    className="cursor-pointer" >
                        <img src={github} alt="@vidya1627" className="w-6 h-6 text-gray-800 hover:text-blue-500" />
                    </a>

                    <a href={linkedin_url} target="_blank" rel="noopener noreferrer"
                    className="cursor-pointer" >
                        <img src={linkedin} alt="@vidya7" className="w-6 h-6 text-gray-800 hover:text-blue-500" />
                    </a>

                    <a href={x_url} target="_blank" rel="noopener noreferrer"
                    className="cursor-pointer" >
                        <img src={x} alt="@vidyapaliw27" className="w-6 h-6 text-gray-800 hover:text-blue-500" />
                    </a>

                    <a href={youtube_url} target="_blank" rel="noopener noreferrer"
                    className="cursor-pointer" >
                        <img src={youtube} alt=" " className="w-6 h-6 text-gray-800 hover:text-blue-500" />
                    </a>
                </div>

                <div className="mt-5 m-2">
                    <p>© 2025 Vidya Paliwal. All rights reserved.</p>
                    <p onClick={openMail} className="cursor-pointer font-semibold hover:text-red-500">contact.vidyapaliwal@gmail.com</p>
                </div>
            </div>
        </footer>
        </>
    )
}
