import axios from "axios";
import { useContext } from "react";
import {useNavigate} from "react-router-dom";
import {useAuth, useUser} from "@clerk/clerk-react"
import { useState,useEffect } from "react";
import { createContext } from "react";
import {toast} from "react-hot-toast";
axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL;
const AppContext=createContext();
export const AppProvider=({children})=>{
    const navigate=useNavigate();
   

    // fetchnew start
    
  const [articles, setArticles] = useState([]);     // will hold the articles array
  const [articalCount, setArticalCount] = useState(0);    // will hold total count

  const fetchNews = async () => {
    try {
   const { data } = await axios.get("http://localhost:4000/api/news");

    
      if (data.success === true) {  // match backend "status"
        setArticles(data.articles);         // match backend "articles"
        setArticalCount(data.total);           // get total from backend
        console.log("News from API:", data.articles);
      } else {
        toast.error(data.message || "Failed to fetch news");
      }
    } catch (err) {
      console.error("Error fetching News:", err.message);
      toast.error("Error fetching News");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

//   fectnewss end
  
  const fetchUser=async()=>{
   try{ const {data}=await axios.get("/api/user",{headers:{Authorization:`Bearer ${await getToken()}`}})
   console.log("data->from api/usr",data);
if(data.success){setIsOwner(data.role=="companyOwner");setSearchedIndustries(data.recentSearchedIndustries)}
else{
    setTimeout(()=>{
        fetchUser()
    },5000)
}}
catch(err){
    console.log("err in fetchuser->",err);
toast.error(err.message);
      } 
 }
 
const value={articles,setArticles,articalCount, setArticalCount
 
    }
return (
     <AppContext.Provider value={value}>
        {children}
     </AppContext.Provider>
)
}
export const useAppContext=()=>useContext(AppContext);