import { useState } from "react";
import { initialEvents } from "../../data/events";
const storedEvents = JSON.parse(localStorage.getItem('events'));
const eventsChoice = storedEvents ? storedEvents : initialEvents ;
function EventSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundEvents, setFoundEvents] = useState([]);
  //   const [category, setCategory] = useState();
  const [filteredByCategory, setfilteredByCategory] = useState();
  console.log("filtered: ", filteredByCategory);

  const selectHandler = (e) => {

    const items = eventsChoice.filter(
      (item) => item.category === e.target.value,
    );
    setfilteredByCategory(items);
  };

  const searchInputHandler = (e) => {
    // const keyword = e.target.value;
    setSearchTerm(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    const filteredEvents = eventsChoice.filter((ev) =>
      ev.title.toLowerCase().includes(searchTerm),
    );
    console.log("Filtered events: ", filteredEvents);
    setFoundEvents(filteredEvents);
  };
  return (
    <>
      <h3>eventsearch</h3>
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="categorites"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Select an option
        </label>
        <select
          onChange={selectHandler}
          id="categorites"
          className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        >
                    <option
            value="all"
            className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
          >
            All events
          </option>
          <option
            value="workshop"
            className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
          >
            Workshop
          </option>
          <option
            value="review"
            className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
          >
            Review
          </option>
          <option
            value="social"
            className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
          >
            Social
          </option>
          <option
            value="hackathon"
            className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
          >
            Hackathon
          </option>
          <option
            value="webinar"
            className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
          >
            Webinar
          </option>
          <option
            value="career"
            className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
          >
            Career
          </option>
        </select>
      </form>

      <form className="max-w-2xl mx-auto">
        <div className="flex shadow-xs rounded-base -space-x-0.5">
          <input
            onChange={searchInputHandler}
            type="search"
            id="search-dropdown"
            className="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body"
            placeholder="Search for products"
            required
          />
          <button
            onClick={submitHandler}
            type="button"
            className="inline-flex items-center  text-green bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none"
          >
            <svg
              className="w-4 h-4 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
          {/* </div> */}
        </div>
      </form>
      <div>
        <h2>Results</h2>
        <div>
          <div className="max-w-md space-y-1 text-body list-disc list-inside">
            {filteredByCategory &&
              filteredByCategory.map((e, i) => (
                <h3 key={"F" + i} id={"F" + i}>
                  <span>Title:</span> {e.title}
                </h3>
              ))}
          </div>
          <div className="max-w-md space-y-1 text-body list-disc list-inside">
            {foundEvents &&
              foundEvents.map((e, i) => (
                <h3 key={"F" + i} id={"F" + i}>
                  <span>Title:</span> {e.title}
                </h3>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventSearch;
