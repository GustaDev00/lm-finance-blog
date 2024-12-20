import api from "..";
import SetAcessRequest from "./request";
import SetAcessResponse from "./response";

const setAcess = async (request: SetAcessRequest): Promise<void> => {
  if (!request.id || !request.userId || !request.url) {
    return Promise.reject(new Error());
  }

  try {
    const { data } = await api.post<SetAcessResponse>("/set-access", {
      "user-id": request.userId,
      url: request.url,
      "post-id": request.id,
    });

    if (data.id) {
      return Promise.resolve();
    }

    return Promise.reject(new Error());
  } catch (err) {
    console.error(err);
  }
};

export default setAcess;
