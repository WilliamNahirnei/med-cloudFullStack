import { destroy, get } from './generic-api'

const basicPatientUrl = '/patient'

export const getPatients = async () => {
    try {
      const { data } = await get(basicPatientUrl)
      return data
    } catch (e) {
      throw new Error(e)
    }
}

export const deletePatient = async (idPatient) => {
  try {
    const url = `${basicPatientUrl}/${idPatient}/delete`
    const { data } = await destroy(url)
    return data
  } catch (e) {
    throw new Error(e)
  }
}
