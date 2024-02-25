import background from "../assets/background.mp4";


function Background() {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={background}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0  w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="mb-4">Find your dream destination !</h1>
        <p>In the heart of Africa's most beautiful landscape</p>
      </div>
    </div>
  );
}

export default Background;
