import { Link } from "react-router-dom"

export const Intro = () => {
    return (
        <>
        {/* Welcome Section */}
            <section className="flex flex-col p-20">
                    <div className="px-10 pt-20">
                        <h1 className="text-6xl font-bold text-gray-800">
                            Hello, I’m a software developer.
                        </h1>
                        
                        <div className="flex">
                            {/* Download CV Section */}
                            <section className="flex justify-center mt-5">
                                <a
                                href="/Vidya_Paliwal_Resume.pdf"  // Path to your CV file
                                download="VIDYA_PALIWAL_RESUME" // Name of the downloaded file
                                className="px-4 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
                                >
                                Download My CV
                                </a>
                            </section>
                        </div>

                        <div className="mt-5 text-2xl text-gray-600">
                            To know more about my <b>work  </b> 
                            <u className="hover:text-red-400 cursor-pointer">
                                <Link to="/projects">click here</Link>
                            </u>.
                        </div>

                        <div className="mt-4 text-2xl text-gray-600">
                            To know more about <b>me  </b> 
                            <u className="hover:text-red-400 cursor-pointer">
                                <Link to="/about">click here</Link>
                            </u>.
                        </div>
                    </div>
            </section>
        </>
    )
}
