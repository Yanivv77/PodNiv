import { Id } from "@/convex/_generated/dataModel";
export interface PodcastCardProps {
  imgUrl: string;
  title: string;
  description: string;
  podcastId: number;
}

export interface PodcastProps {
  _id: Id<"podcasts">;
  _creationTime: number;
  audioStorageId: Id<"_storage"> | null;
  user: Id<"users">;
  podcastTitle: string;
  podcastDescription: string;
  audioUrl: string | null;
  imageUrl: string | null;
  imageStorageId: Id<"_storage"> | null;
  author: string;
  authorId: string;
  authorImageUrl: string;
  voicePrompt: string;
  imagePrompt: string | null;
  voiceType: string;
  audioDuration: number;
  views: number;
}
