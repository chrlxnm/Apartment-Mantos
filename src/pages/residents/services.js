import { AxiosHitServices } from "../../helpers/services";

export const getResidents = async (params) => {
  return await AxiosHitServices.get("/residents", {
    params: params,
  });
};
