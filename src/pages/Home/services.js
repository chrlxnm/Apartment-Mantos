import { AxiosHitServices } from "../../helpers/services"

export const getUnits = async (params) => {
    return await AxiosHitServices.get('/units', {
      params: params
    })
  }
  
export const updateUnits = async (data) => {
  return await AxiosHitServices.put(`/units/${data?.id}`, data)
}
