import {GetServerSidePropsContext} from 'next';
import {useRouter} from 'next/router';
import {useState} from 'react';
import Layout from '../components/Layout';
import {Accent1} from '../components/links/Accent';

interface EventProps {
  id: number;
  title: string;
  date: string;
  category: string;
}

interface EventListProps {
  eventList: EventProps[];
}

export default function EventList({eventList}: EventListProps) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportEvent = async () => {
    const res = await fetch(`http://localhost:9999/events?category=sports`);
    const data = await res.json();
    setEvents(data);
    router.push('/events?category=sports', undefined, {shallow: true});
  };

  const fetchAllEvents = async () => {
    setEvents(eventList);
    router.push('/events', undefined, {shallow: true});
  };

  return (
    <Layout pageTitle="Event">
      <div className="layout pt-28 min-h-screen flex flex-col md:flex-row gap-3 relative">
        <div className="flex-grow-0 w-1/3 items-center md:justify-center flex md:h-56">
          <div className="w-28 flex flex-row md:flex-col relative gap-5 font-semibold">
            <button className='text-start' onClick={fetchAllEvents}>All</button>
            <button className='text-start' onClick={fetchSportEvent}>Sport</button>
          </div>
        </div>
        <div className="flex-1">
          <h1>
            <Accent1>List of Event</Accent1>
          </h1>
          {events.map((event: EventProps) => {
            return (
              <div key={event.id} className="mt-2 ml-3">
                <h2 className="text-base">
                  <span className="text-blue-500">{event.id}</span>. {event.title}
                </h2>
                <h3 className="text-base font-semibold">
                  date: {event.date} | category :&nbsp;
                  <span className="text-green-400">{event.category}</span>
                </h3>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {query} = context;
  const {category} = query;

  const queryString = category ? `category=${category}` : null;
  const res = await fetch(`http://localhost:9999/events?${queryString}`);
  const data = await res.json();

  console.log(data);

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      eventList: data,
    },
  };
}
