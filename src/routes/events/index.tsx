import { createFileRoute } from "@tanstack/react-router";
import Events from "../../components/events/events";

export const Route = createFileRoute("/events/")({
  component: EventsIndexRoot,
});

function EventsIndexRoot() {
 
  return (
<section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">

   
      <Events />
    
       </div>
</section>
  );
}
