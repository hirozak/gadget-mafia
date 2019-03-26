export interface Feed {
  id: number;
  name: string;
  url: string;
}

export interface Entry {
  id: number;
  url: string;
  title: string;
  summary: string;
  imageUrl: string;
  publishedAgo: string;
  feed: Feed;
  slug: string;
}
