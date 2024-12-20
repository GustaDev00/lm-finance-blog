export default interface SetAcessResponse {
  id: number;
  schedule: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
  url: string;
  visitorId: string;
  createdAt: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
  postId: number;
}
