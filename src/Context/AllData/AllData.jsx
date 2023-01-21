import { createContext, useState, useContext ,useEffect} from "react";

import {getAllCourses ,getAllArticle} from "Services/Public"

const AllDataContext = createContext({
    course:[],
    article:[]
});

const AllDataState = ({ children }) => {
    const [ data ,setData]= useState({
        course:[],
        article:[]
    })

    const [loading,setLoading]= useState(true)

    useEffect(() => {
        Promise.all([getAllCourses(),getAllArticle()]).then(([course ,article]) => {
            setData({course:course.data.result,article:article.data.result});
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

  

  return (
    <AllDataContext.Provider value={{data ,loading ,setData}} >
      {children}
    </AllDataContext.Provider>
  );
};

export default AllDataState;

export const ConsumeAllDataState = () => useContext(AllDataContext);









