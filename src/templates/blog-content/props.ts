import ListPostsResponse from "@/api/list-posts/response";

export default interface BlogContentProps {
  post: ListPostsResponse;
  posts: ListPostsResponse[];
}
