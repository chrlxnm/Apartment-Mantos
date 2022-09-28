import { AxiosHitServices } from "../../helpers/services";

export const serviceLogin = async (data) => {
  return await AxiosHitServices.post("final/login", data);
};
