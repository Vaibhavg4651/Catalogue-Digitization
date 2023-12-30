import { createContext,useState,useEffect } from "react";

export const Context=createContext();

export const AppContext=(props)=>{
    const [imageuploaded,setimageuploaded]=useState("https://www.fotor.com/blog/how-to-make-your-words-standout-and-be-read/");

    useEffect(()=>{
    
    },[])
    
    return(
    <Context.Provider value={{
      imageuploaded,
      setimageuploaded
    }}>

     {props.children}
    </Context.Provider>
    )
}