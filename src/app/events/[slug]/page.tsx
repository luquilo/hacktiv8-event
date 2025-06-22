import { eventsListData } from "@/app/data";
import { notFound } from "next/navigation";
import EventDetailCard from "@/app/components/EventDetailCard";

type Props = {
  params: { slug: string };
};

export default async function DetailEventPage({ params }: Props) {
  const { slug } = await params;
  const event = eventsListData.find((event) => event.id === slug);

  if (!event) return notFound();

  return <EventDetailCard event={event} />;
}
