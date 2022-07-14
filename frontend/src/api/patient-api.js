import { get, post, destroy, put } from './generic-api'

const basicPatientUrl = '/patient'

export const getPatients = async () => {
    try {
      const { data } = await get(basicPatientUrl)
      return data
    } catch (e) {
      throw new Error(e)
    }
}

export const getPatient = async (idPatient) => {
  try {
    const { data } = await get(`${basicPatientUrl}/${idPatient}`)
    return data
  } catch (e) {
    throw new Error(e)
  }
}

export const storePatient = async (patientData) => {
  try {
    const { data } = await post(basicPatientUrl, patientData)
    return data
  } catch (e) {
    throw new Error(e)
  }
}

export const updatePatient = async (idPatient, patientData) => {
  try {
    const { data } = await put(`${basicPatientUrl}/${idPatient}`, patientData)
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
