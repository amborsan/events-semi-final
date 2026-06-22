import { createFileRoute } from '@tanstack/react-router'
import { initialEvents as ivt } from "../../data/events";
import { addEvent, loadLocalStorage } from '../../lib/eventsfunctions';

export const Route = createFileRoute('/events/labor')({
  component: RouteComponent,
})

function RouteComponent() {


  loadLocalStorage('events', ivt)
  const node =   {
    id: "Node-Development",
    title: "NodeJS Workshop",
    description: "A practical Node about components, props and state.",
    date: "2026-06-30",
    time: "10:00",
    location: "Room A",
    category: "workshop",
    status: "published",
    maxAttendees: 80,
  attendees: [
      { id: "attendee-2", name: "John Doe", email: "john.doe@example.com" },
      { id: "attendee-3", name: "Alice Smith", email: "alice.smith@example.com" },
    ],
    createdAt: "2026-06-20",
  };
  const ParsedEventsStorage = JSON.parse(localStorage.events)
  console.log('Events Storage: ', ParsedEventsStorage)
  
  addEvent('events',ParsedEventsStorage, node);

  return <div>Hello "/events/labor"!</div>
}
