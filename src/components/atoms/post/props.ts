export interface PostProps {
  link: string;
  title: string;
  text: string;
  img: string;
  created_at: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
  horizontal?: boolean;
}
