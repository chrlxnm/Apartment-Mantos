import { AxiosHitServices } from "../../helpers/services"

export const getUnits = async (params) => {
    return await AxiosHitServices.get('/units', {
      params: params
    })
  }