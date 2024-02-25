import countries from "./countries";
import CountryCard from "./CountryCard";

function Destination() {
  return (
    <div className="max-w-[1240] mx-auto py-16 px-4">
      <h1 className="text-center mb-4">All inclusive Resorts</h1>
      <p className="text-center mb-2">Popular destinations</p>
      <div className="grid grid-cols-2 md:grid-cols-5 py-4 gap-2 md:gap-4">
        {countries.map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </div>
  );
}

export default Destination;
