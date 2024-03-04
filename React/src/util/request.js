import axios from 'axios';
// 设置基本URL地址
const baseUrl = "https://background.jacksonlan.top"; //服务器基础地址
// 创建 Axios 实例
const instance = axios.create({
    baseURL: baseUrl,
});
export default {
    get(url, params) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params})
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    },
    post(url, data) {
        return new Promise((resolve, reject) => {
            instance.post(url, data)
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    }
};