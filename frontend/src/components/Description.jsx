import React, { useContext, useEffect } from 'react'
import { Context } from '../context-api/context-api';
import Tesseract from "tesseract.js";
import { Menubar } from '../utils/constants';

const Description = () => {
    const {imageuploaded}=useContext(Context)

    const imagetotxt=async ()=>{
    try{
    const {data:{text:result}}=await Tesseract.recognize(imageuploaded,"eng")
      console.log(result)
    }
    catch(error){
       console.log("error is ",error)
    }
    }
    
    useEffect(()=>{
     imagetotxt();
    },[imageuploaded])

  return (
    <>
    <div className="grid grid-cols-2" >
        <div className="flex flex-col">
          <div className="flex  gap-1 justify-center items-center">
            {Menubar.map((e,index)=>
              <span key={index} className="flex items-center p-2 cursor-pointer text-gray-600 bg-zinc-300">
                {e}
              </span>

            )}

          </div>
          <div className="flex-col">
            <div className='mr-[4px] mt-6'>
             Amazon
            </div >
            <div className='mr-[4px] mt-6'>
             Amazon
            </div >
            <div className='mr-[4px] mt-6'>
             Amazon
            </div >

          </div>
        </div>
        <div className="flex">
            <span className='text-black'>
                Description
            </span>

        </div>
    </div>
    </>
  )
}

export default Description