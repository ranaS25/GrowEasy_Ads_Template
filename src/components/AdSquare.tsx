import { setEditBanner, setEditorOpened } from '@/lib/features/BannerSlice';
import { useAppDispatch } from '@/lib/hooks';
import React from 'react'
import { connect } from 'react-redux';


interface propsType{
  details: {
    title: string;
    description: string;
    CTAtext: string;
    imageSrc: string;
  },
  displayOnly?: boolean; 
  toggleEditor: (b:boolean) => void;
  
}

const AdSquare:React.FC<propsType> = (props) => {
  

  const { title, description, CTAtext, imageSrc } = props.details;
  const displayOnly = props.displayOnly;

  const dispatch = useAppDispatch();
  
  const handleEditClick = () => { 
    props.toggleEditor(true);


    dispatch(setEditBanner(props.details));
    
  }

  


  return <div className='bg-white aspect-square relative'>
    <img src={imageSrc}
    className='w-3/5 aspect-square object-cover absolute top-1/2 right-0 transform: -translate-y-[55%]'/>
    <img src={"/templates/square1.png"}
      className='w-full aspect-square absolute top-0' />
    <div className='w-full aspect-square absolute z-10 top-0 text-white'>
      <p>{ title}</p>
      <p>{ description}</p>
      <button>{ CTAtext}</button>
    </div>
    {!displayOnly &&  <img src={"/icons/icon_edit.png"} className='w-12 h-12 absolute z-20 right-0 m-2 bg-black/20'
      onClick={handleEditClick} />}
    
  </div>
}


const mapDispatchToProps = (dispatch:any) => {
  return {
    toggleEditor: (b: boolean) => dispatch(setEditorOpened(b))
  }
}


export default connect(null, mapDispatchToProps)(AdSquare)