import background from "../assets/background.jpg";
import { AiOutlineSearch } from "react-icons/ai";

function Background() {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-full object-cover"
        src={background}
        alt="background"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0  w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="mb-4">Find your dream destination !</h1>
        <p>In the heart of Africa's most beautiful landscape</p>

        <form className="flex justify-between items-center max-w-[400px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100 mt-6 ">
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[300px] font-[Poppins] focus:outline-none"
              type="text"
              placeholder="search a destination..."
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Background;
