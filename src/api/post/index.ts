import api from '..';
import ListPostsResponse from './response';

const Post = async (id: number) => {
  try {
    const { data } = await api.get(`/post/${id}`);

    return data as ListPostsResponse;
  } catch (error) {
    console.error(error);
  }
};

export default Post;
