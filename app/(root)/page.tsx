"use client";
import PodcastCard from '@/components/PodcastCard'
import { podcastMockData } from '@/constants';
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Home = () => {
  const podcasts = useQuery(api.podcasts.getAllPodcasts)
  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
      {podcasts?.map(({ _id }) => <div key={_id}>{_id}</div>)}
    </div>
        <div className="podcast_grid">
          {podcastMockData?.map(({ id, title, description, imgURL }) => (
            <PodcastCard 
              key={id}
              imgUrl={imgURL}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home