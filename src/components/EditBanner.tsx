"use client"


import FormInput from "./FormInput";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { setEditBanner, setEditorOpened } from "@/lib/features/BannerSlice";

const EditBanner = () => {

  const dispatch = useAppDispatch()
  const details: any = useAppSelector(store => store.banner.editBanner)


  const handleClose = () => {
    dispatch(setEditorOpened(false))
    dispatch(setEditBanner(null))
  }


  return (

    <div
      className="fixed z-30 min-w-52 w-[95dvw] m-6 box-border top-12 flex items-stretch min-h-80  h-5/6 max-w-96 flex-col px-4 py-6  justify-start bg-white rounded-xl">
      <div className="flex justify-between w-full text-base">
        <span>Edit Banner</span>
        <span onClick={handleClose}
          className="cursor-pointer p-2">X</span>
      </div>
      <div className="flex flex-col items-stretch overflow-y-auto no-scrollbar">
        <div className="pt-2">
          <div className="px-12"><img className="w-full aspect-square" /></div>
          <p className="mt-4 text-xs">Image Attribution: <i>Photo by <span className="underline">Ceyda Çiftci</span> on <span className="underline">Unsplash</span></i></p>
        </div>
        <FormInput title={"Title"} value={details.title} />
        <FormInput title={"Description"} value={details.description} />
        <FormInput title={"Button Text"} value={details.CTAtext} />

      </div>
      <button type="button" className="mt-4 bg-green-800 p-2 rounded text-white font-bold">Done</button>
      <button type="button" className="p-2 text-blue-700">Download</button>
    </div>
  );
}


export default EditBanner;