import setAcess from "@/api/set-acess";
import SetAcessRequest from "@/api/set-acess/request";

export const VisitorAcess = async (data: SetAcessRequest) => {
  await setAcess(data);
};
