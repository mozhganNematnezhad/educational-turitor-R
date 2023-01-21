import { createContext ,useContext } from "react";


 export const allDataContext = createContext()



 
 const MainData = ({children}) => {
   return (
     <allDataContext.Provider>
        {children}
     </allDataContext.Provider>
   )
 }
 
 export default MainData


 export const ConsumeData = () => useContext(allDataContext);
