import {
  MdGroup,
  MdBusiness,
  MdEventAvailable,
  MdPhoto,
  MdBookmarkBorder,
} from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { RiShoppingBag4Line } from "react-icons/ri";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaFileAlt } from "react-icons/fa";

// List of event details with title, description, associated icon, href, and count
const eventDetails = [
  {
    title: "Announcements",
    description: "All event announcements",
    icon: HiOutlineSpeakerWave,
    hrefLink: "/announcements",
    count: 32,
  },
  {
    title: "Agenda",
    description: "Scheduled sessions",
    icon: FaFileAlt,
    hrefLink: "/agenda",
    count: 12,
  },
  {
    title: "Speakers",
    description: "All event speakers",
    icon: GiPublicSpeaker,
    hrefLink: "/speakers",
    count: 3,
  },
  {
    title: "Attendees",
    description: "Other attendees at the event",
    icon: MdGroup,
    hrefLink: "/attendees",
    count: 44,
  },
  {
    title: "Sponsors",
    description: "All sponsors for the event",
    icon: MdBusiness,
    hrefLink: "/sponsors",
    count: 10,
  },
  {
    title: "Exhibitors",
    description: "All exhibitors at the event",
    icon: MdEventAvailable,
    hrefLink: "/exhibitors",
    count: 32,
  },
  {
    title: "Resources",
    description: "Resources available",
    icon: MdBookmarkBorder,
    hrefLink: "/resources",
    count: 0,
  },
  {
    title: "Gallery",
    description: "Memories about the event",
    icon: MdPhoto,
    hrefLink: "/gallery",
    count: 0,
  },
  {
    title: "Vendors",
    description: "Available vendors to engage",
    icon: RiShoppingBag4Line,
    hrefLink: "/vendors",
    count: 3,
  },
];

export default eventDetails;
