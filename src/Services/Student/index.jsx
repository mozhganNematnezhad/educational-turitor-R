import { API } from "../Api/Api";

// const BaseAuthUrl = "http://localhost:5000/api/student";
export const getStudentById = (id) => {
  const url = `/student/${id}`;
  return API.get(url);
};

// http://{{apiurl}}/api/student/635e15c9f4672040f8363a3e
export const updateStudent = (id, user) => {
  const url = `/student/${id}`;
  return API.put(url, user);
};

// upload image
// http://{{apiurl}}/api/upload/image
export const uploadImage = (img) => {
  const newsUrl = "/upload/image";

  return API.post(newsUrl, img);
};



// ****like
// question
// http://5000/api/course/like
export const likeCourse = (course) => {
  const url = "/course/like";
  return API.post(url ,course);
};


export const dislikeCourse = (course) => {
  const url = "/course/dislike";
  return API.post(url ,course);
};



//http://{{apiurl}}/api/course/likeCount/:6367817f2c806b523caa4e0a
export const likeCountCourse = (cId) => {
  const url = `/course/likeCount/${cId}`;
  return API.get(url);
};




