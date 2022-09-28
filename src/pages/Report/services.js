import { AxiosHitServices, AxiosHitUnits } from "../../helpers/services";

export const getUnits = async (params) => {
  return await AxiosHitServices.get("/units", {
    params: params,
  });
};
export const getResidents = async (params) => {
  return await AxiosHitServices.get("/residents", {
    params: params,
  });
};

export const sellService = async (data) => {
  return await AxiosHitServices.post('/transactions', data)
}

export const updateUnits = async (data) => {
  return await AxiosHitServices.put(`/units/${data?.id}`, data)
}
