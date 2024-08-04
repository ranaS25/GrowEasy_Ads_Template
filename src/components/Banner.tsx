import { setEditBanner, setEditorOpened } from "@/lib/features/BannerSlice";
import { useAppDispatch } from "@/lib/hooks";
import React from "react";
import { connect } from "react-redux";
import { bannerConfig } from "../utils/bannerConfig";

type BannerTemplate = 'template1' | 'template2';

interface BannerProps {
  details: {
    title: string;
    description: string;
    CTAtext: string;
    imageSrc: string;
    bannerTemplate: BannerTemplate;
  },
  displayOnly: boolean,
  toggleEditor: (b: boolean) => void
}

const Banner: React.FC<BannerProps> = (props) => {
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
        style={config.imageStyle as React.CSSProperties}
      />
      <img
        src={config.backgroundImage}
        className="w-full aspect-square absolute top-0 "
      />
      <div className="w-full  aspect-square absolute z-10 top-0 text-white bg-black/15 pl-[5%] pt-[5%]">
        <p style={config.titleStyle as React.CSSProperties}>{title}</p>
        <p style={config.descriptionStyle as React.CSSProperties}>{description}</p>
        <button style={config.ctaStyle as React.CSSProperties}>{CTAtext}</button>
      </div>
      {!displayOnly && (
        <img
          src={"/icons/icon_edit.png"}
          className="w-8 p-1 aspect-square absolute z-20 right-1 top-1 bg-black/15 rounded cursor-pointer"
          onClick={handleEditClick}
        />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleEditor: (b: boolean) => dispatch(setEditorOpened(b)),
  };
};

export default connect(null, mapDispatchToProps)(Banner);
