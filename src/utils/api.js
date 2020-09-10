import axios from 'axios';

const defaultDomain = 'https://api.doctorxiong.club/v1/';

export default {
  get(path) {
    return axios({
      url: defaultDomain + path
    });
  },
  //code需要以string传入，避免strict mode下识别为已废弃的八进制转义序列

  //获取基金基础信息,支持用逗号分隔查询多个
  getFund(...code) {
    return this.get(`fund?code=${code.join()}`);
  },

  //获取基金详情
  getFundDetail(code) {
    return this.get(`fund/detail?code=${code}`);
  },
  //获取热门基金
  getHotFund() {
    return this.get(`fund/hot`);
  }
};
