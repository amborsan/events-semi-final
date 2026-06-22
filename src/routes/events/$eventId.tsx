import { createFileRoute, Link } from "@tanstack/react-router";

import { initialEvents } from "../../data/events";
const eventsStorage = JSON.parse(localStorage.events);
const eventsChoice = eventsStorage ? eventsStorage : initialEvents;
import { useState } from "react";

const events = eventsChoice;

function fetchEvent(id: string) {
  const fetchedEvent = events.filter((event) => event.id === id);
  // console.log("P+ID: ", fetchedPost);
  // console.log(initialEvents);
  return fetchedEvent.length ? fetchedEvent[0] : "no post found with this id";
}

export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }) => {
    let ev = fetchEvent(params.eventId);
    // return fetchPost(params.eventId);
    console.log("Event: ", ev);
    return ev;
  },
  component: EventDetailsPage
});
// console.log("Eventcache: ", ev);
// console.log("Pid-Out: ", fetchPost("react-workshop"));
function EventDetailsPage() {
const event = Route.useLoaderData()
 
  return (
    <section className="bg-white dark:bg-gray-900">
         <div
                 className="flex bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 justify-center items-center flex-col"
                  key={event.id}
                >
                  <div className=" max-w-1/2 px-4 2xl:px-0">
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
                        <p className="text-base-content text-amber-500 font-bold text-2xl text-center">
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
                      <span>||</span>
                      <span className="badge badge-soft badge-success">
                        Categoty :{event.category}
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 text-lg">
                      <span className="badge badge-soft badge-success">
                        Status: {event.status}
                      </span>
                      <span>||</span>
                      <span className="badge badge-soft badge-success">
                        Max attendees: {event.maxAttendees}
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 text-lg">
                      
                      <div className="flex justify-center gap-2 text-lg flex-col mt-3">
                      <h2 className="mb-3 text-3xl font-bold text-heading text-c">Attendeees:</h2>
                 
                      <ol className="max-w-3xl space-y-2 text-body list-decimal list-inside">
                        
                        {event.attendees.length
                          ? event.attendees.map((attendee) => (
                              <li key={attendee.id}>
                               <span className="font-medium text-heading"> <span>Name: </span><span>{attendee.name}</span>,<span> Email: </span><span>{attendee.email}</span></span>
                              </li>
                            ))
                          : "No attendees yet!"}
                      </ol>
                      </div>
                    </div>
   


                  </div>
                  <Link to="/events" 
                      
                      className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      
                      
                    >
                      Back to events
                    </Link>
                </div>
                </section>
  )
}
