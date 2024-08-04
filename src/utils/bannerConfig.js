export const bannerConfig = {
  template1: {
    titleStyle: {
      width: "38%",
      fontWeight: "bold",
      fontSize: "1.125rem", // text-lg
      whiteSpace: "pre-wrap", // text-wrap
    },
    descriptionStyle: {
      width: "38%",
      fontSize: "0.875rem", // text-sm
      position: "absolute",
      top: "50%",
    },
    ctaStyle: {
      position: "absolute",
      bottom: "20%",
      transform: "translateX(50%) translateY(100%)",
      whiteSpace: "pre-wrap", // text-wrap
      maxWidth: "40%",
      borderRadius: "0.25rem", // rounded
      right: "30%",
      fontSize: "0.875rem", // text-sm
      padding: "0.5rem", // p-2
      backgroundColor: "white",
      color: "#1e40af", // text-blue-800
      fontWeight: "bold",
    },
    imageStyle: {
      width: "60%",
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-55%)",
    },
    backgroundImage: "templates/square1.png",
  },
  template2: {
    titleStyle: {
      color: "black",
      fontWeight: "bold",
      fontSize: "1.875rem", // text-3xl
      width: "75%",
      whiteSpace: "pre-wrap", // text-wrap
    },
    descriptionStyle: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      color: "black",
      fontSize: "0.875rem", // text-sm
      width: "50%",
    },
    ctaStyle: {
      position: "absolute",
      bottom: "8%",
      backgroundColor: "rgba(0, 0, 0, 0.8)", // bg-black/80
      padding: "0.5rem", // p-2
      borderRadius: "0.25rem", // rounded
      color: "#fea907",
    },
    imageStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "66.666667%", // w-2/3
      transform: "translateX(15%)",
      objectFit: "cover",
    },
    backgroundImage: "templates/square2.png",
  },
  // Add more templates as needed
};
