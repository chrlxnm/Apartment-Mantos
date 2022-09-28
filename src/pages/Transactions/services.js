import { AxiosHitServices } from "../../helpers/services";

export const getTransactions = async (params) => {
  return await AxiosHitServices.get("/transactions", {
    params: params,
  });
};
