import React from 'react'
import { FaRegCircle, FaRegTrashAlt, FaRegCheckCircle } from "react-icons/fa";



const TodoItem = (deneme) => {
  return (
    <div className=' w-full flex items-center p-2 gap-2 border-b border-[#00ADB5] px-2 py-4 cursor-pointer'>
        <FaRegCircle className='text-[#00ADB5] size-5' />
        <p className='flex-1'>deneme</p>
        <FaRegTrashAlt className='text-[#e01056] size-5 hover:scale-110 transition-all'/>

    </div>
  )
}

export default TodoItem