"use client"


import FormInput from "./FormInput";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { setEditBanner, setEditorOpened, updateBanner } from "@/lib/features/BannerSlice";
import { useEffect, useRef, useState } from "react";

import { images } from "../utils/Images"
import AdSquare from "./AdSquare";

const EditBanner = () => {


  
  const [titleText, setTitleText] = useState<string>("");
  const [descriptionText, setDescriptionText]  = useState<string>("");
  const [CTAtext, setCTAtext] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>("");

  const dispatch = useAppDispatch()
  const details: any = useAppSelector(store => store.banner.editBanner)

  useEffect(() => { 

    setTitleText(details.title);
    setDescriptionText(details.description);
    setCTAtext(details.CTAtext); 
    setImageSrc(details.imageSrc);

    

  }, [])

  const handleClose = () => {
    dispatch(setEditorOpened(false))
    dispatch(setEditBanner(null))
  }
  const handleSave = () => {
    
    const newObject = {...details};

    newObject.title = titleText;
    newObject.description = descriptionText;
    newObject.CTAtext = CTAtext;
    newObject.imageSrc = imageSrc

    dispatch(updateBanner(newObject));

    dispatch(setEditorOpened(false))
    dispatch(setEditBanner(null))

    
  }
  const handleImageClick = (e:any) => {
    setImageSrc(e.target.src.replace(/^https?:\/\/[^\/]+/, ''));   
  }

  return (

    <div
      className="fixed z-30 min-w-52 w-[95dvw] m-6 box-border top-12 flex items-stretch min-h-80  h-5/6 max-w-96 flex-col px-4 py-4  justify-start bg-white rounded-xl">
      <div className="flex pb-2 justify-between w-full text-base items-center">
        <span>Edit Banner</span>
        <span onClick={handleClose}
          className="cursor-pointer p-2 hover:bg-black/20 rounded-md font-bold">X</span>
      </div>
      <div className="flex flex-col items-stretch overflow-y-auto no-scrollbar">
        <div className="pt-2">
          <div className="px-12">
            <AdSquare details={{ title: titleText, description: descriptionText, CTAtext: CTAtext, imageSrc: imageSrc }} displayOnly = {true}/>
          </div>
          <p className="mt-4 text-xs">Image Attribution: <i>Photo by <span className="underline">Ceyda Çiftci</span> on <span className="underline">Unsplash</span></i></p>
        </div>

        <div className="py-4 text-md">
          <p>Choose Image</p>
          <div className="flex gap-1 py-4 max-w-full overflow-x-scroll border-b-2">
            
            {images.map((image, index) => <img
              key={ index}
              onClick={handleImageClick}
              className="w-20 aspect-square cursor-pointer rounded-full border-2 border-black/50 bg-slate-200 object-cover object-center"
              src={ image} />
            )}
            
          </div>
        </div>
        <FormInput
          title={"Title"} text={titleText} changeText={setTitleText}/>
        <FormInput
          title={"Description"} text={descriptionText}  changeText={setDescriptionText}/>
        <FormInput 
          title={"Button Text"} text={CTAtext} changeText={setCTAtext}/>

      </div>
      <button type="button" onClick={handleSave} className="mt-4 bg-green-800 p-2 rounded text-white font-bold">Done</button>
      <button type="button" className="p-2 text-blue-700">Download</button>
    </div>
  );
}


export default EditBanner;