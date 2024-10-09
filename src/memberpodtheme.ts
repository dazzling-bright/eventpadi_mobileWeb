import { extendTheme } from "@chakra-ui/react";
// import img from "./assets/onboardingimage.png"
// import logo from "./assets/memberpod.png"
// import logo2 from "./assets/logo.svg"
const theme = extendTheme({
  colors: {
    customYellow: "#FBD13B",
    customGray: "#656C75",
    borderColor: "#E5E7EB",
    customBlue: "#0687FC",
    subTextColor: "#656C75",
    bgColor: "#F3F4F6",
    customColor: "#FF8800",
    buttonColor: "#0D2755",
      topNavColor: 'white',
      topNavIconsColor: "black",
      buttonWorkSpace: "#FBD13B",
    colorWorkSpace: "#0D2755"

  },
  fontSizes: {
    heading: "30px",
    subHeading: "20px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  }, 
  borderRadius: {
    base: "",
    sm: "30px",
    md: "10px",
    lg: "300px",
    button:"120px"


  },
//   images: {
//     onboardingImg: img,
//     logo: logo,
//     logo2: logo2
//   },
  texts: {
    favicon: "EventPadi"
  }
});

export default theme;
