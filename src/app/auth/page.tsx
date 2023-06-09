import { url } from 'inspector';
import Navbar from '../components/navbar'

function Page() {
    
    return (
        <div className="max-w h-[50rem]">
            <Navbar></Navbar>
            <div className='flex flex-col items-center justify-center my-[10rem]'>
                <div className='flex flex-row items-center justify-center'>
                    <p className='w-[17rem] text-end my-[15px]'>EVERY TREE IN THE FOREST KNOWS ABOUT CREATING VALUE AND ABOUT RECIPROCITY</p>
                    <div className='w-4 h-12 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-8 drop-shadow-lg'></div>
                    <h2 className='text-7xl font-extrabold'>BUY NFTS</h2>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <h2 className='text-7xl font-extrabold '>SELL NFTS</h2>
                    <div className='w-4 h-12 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-8 drop-shadow-lg'></div>
                    <p className='w-[17rem] text-end'>EVERY TREE IN THE FOREST KNOWS ABOUT CREATING VALUE AND ABOUT RECIPROCITY</p>
                </div>
                <div className='flex flex-row my-[7rem] items-center justify-center'>
                    <button className='inline-flex items-center mx-[2rem] my-[2rem] text-black font-semibold bg-gradient-to-r from-[#48fc8b] to-[#1de7ea] border-0 py-2.5 px-7 focus:outline-none hover:from-[transparent] hover:to-[transparent] border-solid border-2 border-cyan-500 hover:text-white rounded text-base mt-4 md:mt-0 cursor-pointer'>JOIN US</button>
                    <button className='inline-flex items-center mx-[2rem] my-[2rem] border-solid border-2 border-cyan-400 py-2 px-7 focus:outline-none  hover:bg-gradient-to-r from-[#48fc8b] to-[#1de7ea] hover:text-black font-semibold rounded text-base mt-4 md:mt-0 cursor-pointer'>LEARN MORE
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Page;