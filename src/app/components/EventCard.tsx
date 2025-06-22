import Link from "next/link";
import type { TEvent } from "../entities/type";
import Image from "next/image";

type Props = {
  event: TEvent;
};

export default function EventCard({ event }: Props) {
  return (
    <div className="flex flex-col max-w-xs gap-3 p-6 transition-transform duration-300 transform bg-white shadow-md rounded-xl hover:-translate-y-1">
      <h2 className="text-xl font-semibold truncate">{event.title}</h2>
      <div className="flex flex-col gap-2 my-4">
        <div className="flex gap-2 opacity-60">
          <Image
            src="/images/calendar.svg"
            alt="calendar"
            width={25}
            height={25}
          />
          <p className="truncate">{event.date}</p>
        </div>
        <div className="flex gap-2 opacity-60">
          <Image
            src="/images/location.svg"
            alt="location"
            width={25}
            height={25}
          />
          <p className="truncate">{event.location}</p>
        </div>
      </div>
      <Link
        href={`/events/${event.id}`}
        className="text-[#f49332] font-semibold border border-[#f49332] rounded-lg hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50  transition ease-in-out duration-150 cursor-pointer py-2 text-center"
      >
        Detail
      </Link>
    </div>
  );
}
