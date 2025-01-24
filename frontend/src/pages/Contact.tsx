export const Constact = () => {
    // color of input box boundry
    return (
        <>
            <div className="w-screen h-screen">
                <div className="px-60 p-10 text-6xl font-bold">
                    Let's connect
                </div>
                <form className="px-60 p-10">
                    {/* dark mode styling for label => dark:text-white */}
                    {/* dark mode styling for input => dark:text-white */}
                    <div className="mb-6">
                        <label className="font-bold block mb-2 text-lg">Name *</label>
                        <input type="text" className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-7/12 p-2.5" required />
                    </div>
                    <div className="mb-6">
                        <label className="font-bold block mb-2 text-lg">Email *</label>
                        <input type="email" className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-7/12 p-2.5" required />
                    </div> 
                    <div className="mb-6">
                        <label className="font-bold block mb-2 text-lg">Message *</label>
                        <textarea className="bg-transparent h-40 block w-7/12 p-4 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <button type="submit" className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">Submit</button>
                </form>
                {/* <Footer/> */}
            </div>
        </>
    )
}
