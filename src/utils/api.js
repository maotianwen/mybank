import axios from 'axios';

const defaultDomain = 'https://lab.isaaclin.cn/nCoV/api/';

export default {
  get(path) {
    return axios({
      url: defaultDomain + path
    });
  },

  //查询省份
  getProvinces() {
    return this.get('provinceName');
  }
};
