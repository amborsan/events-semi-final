import { useCallback, useState, useRef } from "react";
import { initialEvents } from "../../data/events";
const storedEvents = JSON.parse(localStorage.events);
const eventsChoice = storedEvents ? storedEvents : initialEvents ;

function Events(props) {

  const [singleEvent, setSingleEvent] = useState([]);
  console.log('Sing: ', singleEvent)
  const dialogRef = useRef(null);
/*   function fetchEvent(id: string) {
    const fetchedEvent = eventsChoice.filter((event) => event.id === id);
    setSingleEvent(fetchedEvent);
    return fetchedEvent.length ? fetchedEvent[0] : "no post found with this id";
  } */
function fetchEvent(id: string) {
  const fetchedEvent = eventsChoice.filter((event) => event.id === id);
  // console.log("P+ID: ", fetchedPost);
  setSingleEvent(fetchedEvent[0] )
  // console.log(initialEvents);
  return fetchedEvent.length ? fetchedEvent[0] : "no event found with this id";
}
  function dialogHandler(e) {
    const dialog = dialogRef.current;
   const id =  e.target.id

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
    setfilteredByCategory(items);
  };
  return (
    <>
      <section className="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4 md:mb-16 lg:mb-24">
            <div className="text-primary text-sm font-medium uppercase">
              Events
            </div>
            <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
              All Events
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {eventsChoice.map((event) => {
              return (
                <div
                  className="card shadow-gray-400\/200 shadow-md border-white-200 border-2 rounded-xl p-5"
                  key={event.id}
                >
                  <div className="card-body text-center">
                    <a href="#">
                      <div
                        // src={}

                        className="mb-6 h-49 w-full object-contain"
                        onClick={() =>
                          console.log(
                            `Event with id : (-- ${event.id} --) was clicked`,
                          )
                        }
                      >
                        <p className="text-base-content text-amber-500 font-bold text-2xl">
                          {event.title}
                        </p>
                        <p className="text-base-content text-amber-100 font-medium text-xl">
                          {event.description}
                        </p>
                      </div>
                    </a>

                    <div className="flex justify-center gap-2 text-lg">
                      <span className="pr-1">Date: </span>{" "}
                      <span className="badge badge-soft badge-success">
                        {event.date}
                      </span>{" "}
                      ||
                      <span className="pr-1">Time:</span>
                      <span className="badge badge-soft badge-success">
                        {event.time}
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 text-lg">
                      <span className="pr-1">Location: </span>
                      <span className="badge badge-soft badge-success">
                        {event.location}
                      </span>
                      <span className="badge badge-soft badge-success">
                        Categoty :{event.category}
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 text-lg">
                      <span className="badge badge-soft badge-success">
                        Status: {event.status}
                      </span>
                      <span className="badge badge-soft badge-success">
                        Max attendees: {event.maxAttendees}
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 text-lg">
                      <span className="badge badge-soft badge-success"></span>
                      <span className="badge badge-soft badge-success">
                        Attendees:
                        {event.attendees.length
                          ? event.attendees.map((attendee) => (
                              <h3 key={attendee.id}>
                                Name: {attendee.name}, Email: {attendee.email}
                              </h3>
                            ))
                          : "No attendees yet!"}
                      </span>
                    </div>
                    <div className="divider my-2"></div>

                    <div className="flex items-center justify-between align-bottom mb-0 ">
                      {/* <span className="text-center text-l font-semibold ">Strength : 145</span> */}
                      <div>
                        <button
                          className="rounded-md bg-white/10 px-2.5 py-1.5 text-xl font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 align-bottom"
                          arealabel="Circle Soft Icon Button"
                          id={event.id}
                          onClick={dialogHandler}
                        >
                          Details...
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
