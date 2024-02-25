function CountryCard({ id, image, name }) {
  return (
    <div
      key={id}
      className="relative overflow-hidden md:transition-transform transform md:hover:scale-105 cursor-pointer"
    >
      <img className="w-full h-full object-cover" src={image} alt={name} />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white p-2 text-center opacity-50">
        {name}
      </div>
    </div>
  );
}

export default CountryCard;
