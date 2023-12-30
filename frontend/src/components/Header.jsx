import React, { useContext } from 'react'
import { Context } from '../context-api/context-api'

const Header = () => {
    const {setimageuploaded}=useContext(Context)

   const upload=(e)=>{
    console.log(e.target.files[0])
   setimageuploaded(e.target.files[0])     
    }
  return (
    <>
    <div className="flex justify-between p-4">
        <div className="flex gap-3 justify-center items-center ">
            <span className='text-black/[0.87] text-[16px] '>
                Products/
            </span>
            <span className='text-black/[0.87] text-[16px] '>
                Products/
            </span>
         </div>
        <div className="flex  justify-center items-center p-4">
               <input type="file"
                placeholder='Upload file'
                accept="image/*"
                className='text-black/[0.87]'
                onChange={upload}/>
        </div>
     </div></>
  )
}

export default Header