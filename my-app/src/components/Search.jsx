import Form from "./Form";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 p-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly mr-6">
        <div>
          <h2 className="mb-4 text-orange-600">
            DISCOVER AFRICA LIKE NEVER BEFORE
          </h2>
          <h3>Trav'frica propose afordable all-inclusive package</h3>
          <p className="py-4  text-justify">
            Embark on an amazing journey to explore the breathtaking landscapes
            and diverse cultures of Africa with our budget-friendly,
            all-inclusive vacation packages. Our luxurious resorts, nestled in
            the heart of captivating African destinations, offer a perfect blend
            of affordability and exploration. Immerse yourself in the
            awe-inspiring beauty of countries such as Kenya, South Africa,
            Tanzania, Morocco, Egypt, Namibia, and more.
          </p>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="bg-gray-800 text-gray-200 py-2 rounded-md">
            Find your dream destination !
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Search;
