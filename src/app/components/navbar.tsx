function Navbar()
{
    return (
        
        <div>
            <header>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-3xl text-white cursor-pointer">DA</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-white justify-center">
                        <a className="mr-5 hover:text-gradient cursor-pointer">HOME</a>
                        <a className="mr-5 hover:text-cyan-500 cursor-pointer">ARTWORKS</a>
                        <a className="mr-5 hover:text-cyan-500 cursor-pointer">ABOUT</a>
                        <a className="mr-5 hover:text-cyan-500 cursor-pointer">ARTISTS</a>
                    </nav>
                    <button className="inline-flex items-center text-black bg-gradient-to-r from-[#48fc8b] to-[#1de7ea] border-2 border-cyan-500 py-1 px-3 focus:outline-none hover:from-[transparent] hover:to-[transparent] hover:text-white rounded text-base mt-4 md:mt-0 cursor-pointer">LOG IN
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">    
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Navbar;