import { setEditBanner, setEditorOpened } from "@/lib/features/BannerSlice";
import { useAppDispatch } from "@/lib/hooks";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bannerConfig } from "../utils/bannerConfig";

const Banner = (props) => {
  const { title, description, CTAtext, imageSrc, bannerTemplate } = props.details;


  const config = bannerConfig[bannerTemplate];
  const displayOnly = props.displayOnly;

  const dispatch = useAppDispatch();

  const handleEditClick = () => {
    props.toggleEditor(true);
    dispatch(setEditBanner(props.details));
  };


  return (
    <div className="bg-white aspect-square relative overflow-clip w-[300px]">
      <img
        src={imageSrc}
        className={" aspect-square object-cover absolute"}
        style={config.imageStyle}
      />
      <img
        src={config.backgroundImage}
        className="w-full aspect-square absolute top-0 "
      />
      <div className="w-full  aspect-square absolute z-10 top-0 text-white bg-black/20 pl-[5%] pt-[5%]">
        <p style={config.titleStyle}>{title}</p>
        <p style={config.descriptionStyle}>{description}</p>
        <button style={config.ctaStyle}>{CTAtext}</button>
      </div>
      {!displayOnly && (
        <img
          src={"/icons/icon_edit.png"}
          className="w-8 aspect-square absolute z-20 right-0 bg-black/20"
          onClick={handleEditClick}
        />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditor: (b) => dispatch(setEditorOpened(b)),
  };
};

export default connect(null, mapDispatchToProps)(Banner);
