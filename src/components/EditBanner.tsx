"use client"


import FormInput from "./FormInput";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setEditBanner, setEditorOpened, updateBanner } from "@/lib/features/BannerSlice";
import { useEffect, useState } from "react";

import { images } from "../utils/Images"

import Banner from "./Banner";

const EditBanner = () => {
  
  const [titleText, setTitleText] = useState<string>("");
  const [descriptionText, setDescriptionText]  = useState<string>("");
  const [CTAtext, setCTAtext] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>("");
  const [template, setTemplate] = useState<"template1" | "template2" | null>(null);

  const dispatch = useAppDispatch()
  const details: any = useAppSelector(store => store.banner.editBanner);


  useEffect(() => { 

    setTitleText(details.title);
    setDescriptionText(details.description);
    setCTAtext(details.CTAtext); 
    setImageSrc(details.imageSrc);
    setTemplate(details.bannerTemplate);

    

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
    newObject.imageSrc = imageSrc;

    dispatch(updateBanner(newObject));
    dispatch(setEditorOpened(false))
    dispatch(setEditBanner(null))

    
  }
  const handleImageClick = (e:any) => {
    setImageSrc(e.target.src.replace(/^https?:\/\/[^\/]+/, ''));   
  }

  if (!template) { return null }


  return (
    <>
      <div className="fixed w-full h-full  pointer-events-auto z-[30]"></div>

      <div
        className=" fixed z-40 min-w-52 w-[95dvw] m-6 box-border top-12 flex items-stretch min-h-80  h-5/6 max-w-96 flex-col px-4 py-4  justify-start bg-white rounded-xl">
      <div className="flex pb-2 justify-between w-full text-base items-center">
        <span>Edit Banner</span>
        <span onClick={handleClose}
          className="cursor-pointer p-2 hover:bg-black/20 rounded-md font-bold">X</span>
      </div>
      <div className="flex flex-col items-stretch overflow-y-auto no-scrollbar">
        <div className="pt-2">
            <div className="flex justify-center">

              <Banner key={details.id} details={{ title: titleText, description: descriptionText, CTAtext: CTAtext, imageSrc: imageSrc, bannerTemplate: template }} displayOnly={true} />
          </div>
            <p className="mt-4 text-xs">Licensable Images: <i>Source <span className="underline cursor-pointer" >Google Images</span></i></p>
        </div>

        <div className="py-4 text-md">
          <p>Choose Image</p>
            <div className="px-1 flex gap-2 py-4 max-w-full overflow-x-scroll border-b-2">
            
              {images.map((image, index) => {
                return <img
                  key={index}
                  onClick={handleImageClick}
                  className={"w-20 aspect-square cursor-pointer rounded-full " + (imageSrc !== image ? "border border-black/30" : " outline outline-green-600  shadow-sm") + " bg-slate-200 object-cover object-center"}
                  src={image} />
              }
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

    </>
  );
}


export default EditBanner;