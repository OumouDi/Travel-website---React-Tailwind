import destinationsOptions from "./destinationsOptions";

const Form = () => {
  return (
    <form className="w-full mt-2 border border-gray-300 p-4 rounded-md">
      <div className="flex flex-col my-2">
        <label className="font-semibold mb-2">Destination</label>
        <select className="border rounded-md p-2">
          {destinationsOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col my-4">
        <label className="font-semibold mb-2">Departure date</label>
        <input className="border rounded-md p-2" type="date" />
      </div>
      <div className="flex flex-col my-2">
        <label className="font-semibold mb-2">Return date</label>
        <input className="border rounded-md p-2" type="date" />
      </div>
      <button className="w-full my-4">Check availabilities</button>
    </form>
  );
};

export default Form;
