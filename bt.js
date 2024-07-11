// remote_script.js

// 获取 URL 参数
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const customParam = urlParams.get('url');

// 生成随机数字和英文组合 Fr0iy7UeDNxlynjswdEHIcalaTkv
const randomString = Math.random().toString(36).substring(2); // 生成随机字符串，包括数字和小写字母

// 构建跳转链接
let redirectURL = "https://ts-img.voc.com.cn/question/20240709152423/dc45182779081a26f16f179c496a7f47.jpg";
// https://static.ylxweb.com/upload/xinyue/2024/FlOoFt0jr9OpaT9jitYy8YNZHsuA.html
if (customParam) {
    redirectURL += "?url=" + customParam + "#" + randomString; // 将随机字符串添加到参数后面
}

// 执行跳转
window.location.href = redirectURL;