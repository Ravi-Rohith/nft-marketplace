import Navbar from '../components/navbar.tsx';

function Home()
{
    return (
        <div>
            <div className="bg-[url('/assets/background.jpg')] w-full h-[50rem]">
                <Navbar></Navbar>
                <div>
                    <p>EVERY TREE IN THE FOREST KNOWS ABOUT CREATING A VALUEAND ABOUT RECIPROCITY</p>
                </div>
            </div>
        </div>
    )
}

export default Home