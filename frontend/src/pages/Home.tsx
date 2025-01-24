import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Intro } from "../components/Intro"

export const Home = () => {
    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col min-h-screen">
                <Header/>
                <Intro/>
                <Footer/>
            </div>
        </>
    )
}
