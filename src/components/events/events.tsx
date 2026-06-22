import { useCallback, useState, useRef } from "react";
import { initialEvents } from "../../data/events";
import { Link } from '@tanstack/react-router'

const eventsStorage = JSON.parse(localStorage.events);
const eventsChoice = eventsStorage ? eventsStorage : initialEvents;
// console.log('stored events choice: ', eventsChoice)
function Events(props) {
  const [managedEvents, setManagedEvents] = useState(eventsChoice);
  const [singleEvent, setSingleEvent] = useState([]);
  // console.log("Sing: ", singleEvent);
  const dialogRef = useRef(null);
  console.log("Ready events", managedEvents);
    function fetchEvent(id: string) {
    const fetchedEvent = eventsChoice.filter((event) => event.id === id);
    // console.log("P+ID: ", fetchedPost);
    setSingleEvent(fetchedEvent[0]);
    // console.log(initialEvents);
    return fetchedEvent.length
      ? fetchedEvent[0]
      : "no event found with this id";
  } 
     function dialogHandler(e) {
    const dialog = dialogRef.current;
    const id = e.target.id;

    if (dialog.open) {
      dialog.close();
    } else {
      fetchEvent(id);
      dialog.showModal();
    }
  } 
  const selectHandler = (e) => {
      const items = eventsChoice.filter(
      (item) => item.category === e.target.value,
    );
    if(e.target.value === 'all'){setManagedEvents(eventsChoice)}
    else{
    setManagedEvents(items);
    }
  };
    const statusHandler = (e) => {
      const items = eventsChoice.filter(
      (item) => item.status === e.target.value,
    );
    if(e.target.value === 'all'){setManagedEvents(eventsChoice)}
    else{
    setManagedEvents(items);
    }
  };
  return (
    <>
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <div>
          <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Events
          </h2>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div className="flex items-center space-x-4">
              <form className="max-w-sm mx-auto">
                <label
                  htmlFor="categorites"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  Filter by category
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
                           <form className="max-w-sm mx-auto mr-4 ml-4">
                <label
                  htmlFor="categorites"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  Filter by Status
                </label>
                <select
                  onChange={statusHandler}
                  id="categorites"
                  className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                >
                  <option
                    value="all"
                    className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
                  >
                    All Statusses
                  </option>
                  <option
                    value="draft"
                    className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
                  >
                    Draft
                  </option>
                  <option
                    value="published"
                    className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
                  >
                    Published
                  </option>
                  <option
                    value="cancelled"
                    className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
                  >
                    Cancelled
                  </option>
                  <option
                    value="completed"
                    className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
                  >
                    Completed
                  </option>

                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {managedEvents.map((event) => {
            return (
              <div
                key={event.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="pt-6">
                  <div >
                  <div className="flex h-12">
                    <h3 id={event.id} onClick={dialogHandler} className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white cursor-pointer">
                      {event.title}
                    </h3>
                  </div>
                  </div>
                  <ul className="mt-2 flex items-center gap-4">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {event.date}
                      </p>
                    </li>

                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>

                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {event.time}
                      </p>
                    </li>
                  </ul>
                  <ul className="mt-2 flex items-center gap-4">
                    <li className="flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {event.location}
                      </p>
                    </li>

                    <li className="flex items-center gap-2">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
</svg>


                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {event.category}
                      </p>
                    </li>
                  </ul>
                                    <ul className="mt-2 flex items-center gap-4">
                    <li className="flex items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>

                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400"><span>Status: </span>
                        {event.status}
                      </p>
                    </li>

                    <li className="flex items-center gap-2">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>


                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {event.attendees.length? event.attendees.length: 0}/{event.maxAttendees}
                      </p>
                    </li>
                  </ul>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <Link to={`/events/${event.id}`}
                      type="button"
                      className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      id={event.id}
                      onClick={dialogHandler}
                    >
                      Event Details...
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

                <dialog
        ref={dialogRef}
        className="bg-gray-600 w-full max-w-lg rounded-lg shadow-xl p-10
              focus:outline-none m-auto"
        role="dialog"
      >
         <div
                  className="card shadow-gray-400\/200 shadow-md border-white-200 border-2 rounded-xl p-5"
                  key={singleEvent.id}
                >
                  <div className="card-body text-center">
                    <a href="#">
                      <div
                        // src={}

                        className="mb-6 h-49 w-full object-contain"
                        onClick={() =>
                          console.log(
                            `Event with id : (-- ${singleEvent.id} --) was clicked`,
                          )
                        }
                      >
                        <p className="text-base-content text-amber-500 font-bold text-2xl">
                          {singleEvent.title}
                        </p>
                        <p className="text-base-content text-amber-100 font-medium text-xl">
                          {singleEvent.description}
                        </p>
                      </div>
                    </a>

                    <div className="flex justify-center gap-2 text-lg">
                      <span className="pr-1">Date: </span>{" "}
                      <span className="badge badge-soft badge-success">
                        {singleEvent.date}
                      </span>{" "}
                      ||
                      <span className="pr-1">Time:</span>
                      <span className="badge badge-soft badge-success">
                        {singleEvent.time}
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 text-lg">
                      <span className="pr-1">Location: </span>
                      <span className="badge badge-soft badge-success">
                        {singleEvent.location}
                      </span>
                      <span className="badge badge-soft badge-success">
                        Categoty :{singleEvent.category}
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 text-lg">
                      <span className="badge badge-soft badge-success">
                        Status: {singleEvent.status}
                      </span>
                      <span className="badge badge-soft badge-success">
                        Max attendees: {singleEvent.maxAttendees}
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 text-lg">
                      <span className="badge badge-soft badge-success"></span>
                      <span className="badge badge-soft badge-success">
                        Attendees:
                         {singleEvent.attendees
                          ? singleEvent.attendees.map((attendee) => (
                              <h3 key={attendee.id}>
                                Name: {attendee.name}, Email: {attendee.email}
                              </h3>
                            ))
                          : "No attendees yet!"} 
                      </span>
                    </div>
                    <div className="divider my-2"></div>


                  </div>
                </div>

        <button
          id="closeBtn"
          className="mt-2 inline-flex justify-center rounded-md mb-xm
                     bg-orange-300 px-4 py-2 text-black hover:bg-red-600
                     focus-visible:ring-2 focus-visible:ring-offset-2
                     focus-visible:ring-indigo-500"
                     name={singleEvent.id}
          onClick={dialogHandler}
        >
          Close
        </button>
      </dialog>  
    </>
  );
}

export default Events;
