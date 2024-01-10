import axiosCustom from './axiosCustom'

class FetchData {
  static async getDataInfo() {
    return axiosCustom.get('/getData')
  }
}

export default FetchData
