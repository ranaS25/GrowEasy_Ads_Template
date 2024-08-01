"use client"

import { useRef } from "react";
import FormInput from "./FormInput";


export default function EditBanner({ setEditFormOpen }: { setEditFormOpen: (isOpen: boolean) => void }) {



  const handleCloseButton = () => {
    setEditFormOpen(false);
  }
  return (

    <div
      className="fixed min-w-52 w-[95dvw] m-6 box-border top-12 flex items-stretch min-h-80  h-5/6 max-w-96 flex-col px-4 py-6  justify-start bg-white rounded-xl">
      <div className="flex justify-between w-full text-base">
        <span>Edit Banner</span>
        <span onClick={handleCloseButton}>X</span>
      </div>
      <div className="flex flex-col items-stretch overflow-y-auto no-scrollbar">
        <div className="pt-2">
          <div className="px-12"><img className="w-full aspect-square" /></div>
          <p className="mt-4 text-xs">Image Attribution: <i>Photo by <span className="underline">Ceyda Çiftci</span> on <span className="underline">Unsplash</span></i></p>
        </div>
        <FormInput title={"Title"} />
        <FormInput title={"Description"} />
        <FormInput title={"Button Text"} />

      </div>
      <button type="button" className="mt-4 bg-green-800 p-2 rounded text-white font-bold">Done</button>
      <button type="button" className="p-2 text-blue-700">Download</button>
    </div>
  );
}
