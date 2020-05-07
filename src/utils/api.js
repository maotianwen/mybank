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
  },
  //xhr
  xhrMethod() {
    return new Promise(resolve => {
      let xhr = new XMLHttpRequest();
      xhr.open('get', 'https://lab.isaaclin.cn/nCoV/api/provinceName', true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve(xhr.responseText);
        }
      };
      xhr.send(null);
    });
  }
};
