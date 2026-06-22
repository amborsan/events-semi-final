import { createFileRoute } from "@tanstack/react-router";
import { initialEvents } from "../../data/events";
import EventSearch from "../../components/events/eventsearch";
import Events from "../../components/events/events";

export const Route = createFileRoute("/events/index copy")({
  component: EventsIndexRoot,
});

function EventsIndexRoot() {
  const events: string[] = initialEvents;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Upcoming Events</h1>

      <EventSearch />
      <Events />
      <div className="mt-6">{/* <CalendarView events={events} /> */}</div>
    </div>
  );
}
