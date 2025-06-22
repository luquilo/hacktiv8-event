import { eventsListData as events } from "@/app/data";
import EventCard from "./EventCard";

export default function EventList() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-4 max-w-7xl">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
