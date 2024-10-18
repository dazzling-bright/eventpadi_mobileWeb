import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa";

import DangoteIndustryImage from "../assets/sponsor-images/dangotes-pastries.png";
import GoldenPennyImage from "../assets/sponsor-images/golden-penny.png";
import AutoFixerImage from "../assets/sponsor-images/autofixer.png";
import BusinessmanImage from "../assets/sponsor-images/businessman.png";

export interface Sponsor {
  name: string;
  image: string;
  website: string;
}

// sponsor data

export const sponsors: Sponsor[] = [
  {
    name: "Dangote Industries",
    image: DangoteIndustryImage,
    website: "https://www.dangote.com",
  },
  {
    name: "Golden Penny",
    image: GoldenPennyImage,
    website: "https://www.goldenpenny.com",
  },
  {
    name: "AutoFixer",
    image: AutoFixerImage,
    website: "https://www.autofixer.com",
  },
  {
    name: "Businessman",
    image: BusinessmanImage,
    website: "https://www.goldenpenny.com",
  },
  {
    name: "Golden Penny",
    image: GoldenPennyImage,
    website: "https://www.goldenpenny.com",
  },
  {
    name: "AutoFixer",
    image: AutoFixerImage,
    website: "https://www.autofixer.com",
  },
  {
    name: "Businessman",
    image: BusinessmanImage,
    website: "https://www.goldenpenny.com",
  },
  {
    name: "Golden Penny",
    image: GoldenPennyImage,
    website: "https://www.goldenpenny.com",
  },
];

// sponsors social media handle
const socialMediaLinks = [
  {
    label: "Facebook",
    icon: <FaFacebook />,
    url: "https://www.facebook.com",
  },
  {
    label: "Twitter",
    icon: <FaTwitter />,
    url: "https://www.twitter.com",
  },
  {
    label: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com",
  },
  {
    label: "Reddit",
    icon: <FaReddit />,
    url: "https://www.reddit.com",
  },
];

export default socialMediaLinks;

