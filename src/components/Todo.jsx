import React from 'react';
import { FaClipboardList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import TodoItem from './TodoItem';


const Todo = () => {
  return  (
    <div className="place-self-center bg-white w-[450px] h-[600px] p-12 flex flex-col gap-8 rounded-lg">
        {/* başlık kısmı */}
        <h1 className='text-3xl font-semibold tracking-wider flex items-center gap-2' >
            <FaClipboardList/>Todo App
        </h1>
        {/* arama kısmı */}
        <div className='flex items-center bg-[#EEEEEE] rounded-full'>
            <input type="text" className='border-none bg-transparent outline-none p-3.5 flex-1 placeholder:text-slate-400 ' placeholder='Yeni bir görev gir.' />

            <div className='bg-[#00ADB5] h-full w-14 flex items-center justify-center rounded-r-full cursor-pointer'>
                <FaPlus className='size-6 text-[#EEEEEE]' />
            </div>
        </div>
        {/* listelenen görevler */}
        <div className='mt-5'>
            <TodoItem text={"react öğreniyorum."}/>
            <TodoItem />
        </div>
  </div>
  );
};

export default Todo;