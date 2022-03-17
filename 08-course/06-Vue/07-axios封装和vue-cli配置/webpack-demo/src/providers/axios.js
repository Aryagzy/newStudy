//封装axios的文件
import axios from 'axios';
//qs为了把数据转化成Formdata形式
import Qs from 'qs';
//超过5秒钟，还没有调用接口，就抛出异常
axios.defaults.timeout = 5000;
export default {
  post() {
    
  },
  get() {

  }
}