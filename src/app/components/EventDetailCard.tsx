"use client";

import Image from "next/image";
import Link from "next/link";
import EmailForm from "./EmailForm";
import { useState } from "react";

type Props = {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    registration: string;
  };
};

export default function EventDetailCard({ event }: Props) {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-20 sm:mt-32">
      <div className="sm:w-[70%]">
        <Link href="/events" className="inline-block">
          <p className="my-2 ml-6 text-lg font-bold lg:ml-0">
            <span className="text-4xl">&larr;</span>Back to Events
          </p>
        </Link>
        <div className="max-w-[90%] mx-auto lg:max-w-3xl px-6 py-10 text-center bg-white rounded-xl">
          <h3 className="mb-6 text-3xl font-semibold">{event.title}</h3>
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="max-w-lg my-4 text-justify opacity-70">
              {event.description}
            </p>
            <div className="flex justify-between gap-2 w-xs">
              <div className="flex gap-2">
                <Image
                  src="/images/calendar.svg"
                  width={25}
                  height={25}
                  alt="calendar"
                />
                <strong>date: </strong>
              </div>
              <p>{event.date}</p>
            </div>
            <div className="flex justify-between gap-2 w-xs">
              <div className="flex gap-2">
                <Image
                  src="/images/time.svg"
                  width={25}
                  height={25}
                  alt="time"
                />
                <strong>time: </strong>
              </div>
              <p>{event.time}</p>
            </div>
            <div className="flex justify-between gap-2 w-xs">
              <div className="flex gap-2">
                <Image
                  src="/images/location.svg"
                  width={25}
                  height={25}
                  alt="location"
                />
                <strong>location: </strong>
              </div>
              <p>{event.location}</p>
            </div>{" "}
          </div>
          <button
            className="w-full bg-orange-400 cursor-pointer text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:translate-y-[-2px] active:translate-y-0 mt-12"
            onClick={() => setModal(true)}
          >
            <p>Daftar</p>
          </button>
          {modal && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 z-50 bg-black/70"
                onClick={() => setModal(false)}
              ></div>

              {/* Modal */}
              <div className="fixed p-6 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg top-1/2 left-1/2 z-100 w-90 rounded-xl">
                <EmailForm registration={event.registration} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
