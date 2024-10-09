import { extendTheme } from "@chakra-ui/react";
// import img from "./assets/eventpadi/eventPadiOnboarding.png"
// import logo from "./assets/eventpadi/logo.png"
// import logo2 from "./assets/eventpadi/eventPadi-logo.png"
const eventpaditheme = extendTheme({
  colors: {
    customYellow: "#FBD13B",
    customGray: "#656C75",
    borderColor: "#E5E7EB",
    customBlue: "#0687FC",
    subTextColor: "#656C75",
    bgColor: "#F3F4F6",
    customColor: "#FF8800",
    buttonColor: "#9B0EED",
    headerColor: "",
    topNavColor: '#480071',
    topNavIconsColor: "white",
    buttonWorkSpace: "#9B0EED",
    colorWorkSpace: "white"
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
    md: "10px",
    lg: "16px",
     button:"5px"
  },
//   images: {
//     onboardingImg: img,
//     logo: logo,
//     logo2: logo2 
//   },
});

export default eventpaditheme;
