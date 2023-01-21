import {API} from "../Api/Api"

// http://localhost:5000/api/auth/register
export const userRegister = (user) => {
  const url = "/auth/register";
  return API.post(url, user);
};

export const userLogin = (user) => {
  const url = "/auth/login";
  return API.post(url, user);
};

export const userFordetPass = (email) => {
  const newsUrl = "/forgetpassword";
  return API.post(newsUrl, email);
};











// ********************
// ********************
// user login
// چون دارم داده میفرستم پس از
// post
// میزیم
