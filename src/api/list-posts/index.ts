import api from "..";
import ListPostsResponse from "./response";

const listPosts = async () => {
  try {
    const { data } = await api.get("/user/posts");

    return data as ListPostsResponse[];
  } catch {
    return [];
  }
};

export default listPosts;
