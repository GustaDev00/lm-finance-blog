export default interface ListPostsResponse {
  id: string;
  title: string;
  json: {
    title: string;
    text: string;
    link: string;
    schema: { [key: string]: string | number | boolean | object }[];
    img: string;
    "img-prompt": string;
    content: string;
    questions: {
      question: string;
      answer: string;
      asked_by: string;
      answered_by: string;
    }[];
  };
  img: string;
  created_at: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
  created_at_formatted: string;
  author: string;
  deleted_at: string | null;
}
