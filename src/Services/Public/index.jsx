import { API } from "../Api/Api";

import axios from "axios";

// const AdminToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM0MzcxMTVmOThmNjAwMjA3ZTg0ODciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQzNjY0MTF9.lbROmWujuWB26UaD2me5cjj6Cd1nUOf8CmXUGYhRaVI";

const AdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc4OTRlMjIzMzJiYjFmMDQ3NmFiYWQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Njg4NDY4NDd9.bZqG1iJpJfXt2uOI1GtZy5mXc7tlWU_6W5s8lYJWlwg";



// course
// localhost:5000/api/course/getall
export const getAllCourses = () => {
  const url = "/course/getall";
  return API.get(url);
};


// localhost:5000/api/course/2
export const getOneCourse = (courseId) => {
  const url = `/course/${courseId}`;
//  console.log("url--getOneCourse",url)
  return API.get(url);
};



// article
// localhost:5000/api/news
export const getAllArticle = () => {
  const url = "/news";
  return API.get(url);
};



// http://5000/api/news/5e62ec724c0a6f1a787f76ed
export const getOneArticle = (articleId) => {
  const url = `/news/${articleId}`;
  return API.get(url);
};


// teacher
// http://{{apiurl}}/api/employee/getallteachers
export const getAllTeachers = () => {
  const url = "/employee/getallteachers";
  return API.get(url);
};



export const getTeacherById = (id) => {
  const url = `http://localhost:5000/api/employee/${id}`;
  return axios.get(url,{
    headers:{"x-auth-token":AdminToken}
  });
};





// ***comments
export const getAllComments = () => {
  const url ="/comments"
  return API.get(url);
};


// http://{{apiurl}}/api/comments/send
export const sendComments = (comment) => {
  const url="/comments/send"
  return API.post(url, comment);
};


// http://{{apiurl}}/api/comments/answer
export const answerComment = (comment) => {
  const url="/comments/answer"
  return API.post(url, comment);
};








