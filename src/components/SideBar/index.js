import {  FaDirections, FaCubes, FaSun, FaBookmark } from 'react-icons/fa';
import SideBar from './SideBar'

SideBar.defaultProps = {
  topLinks: [
    {
      url: "/",
      text: "Explore",
      icon: FaDirections,
    },
    {
      url: "#topics",
      text: "Topics",
      icon: FaCubes
    },
    {
      url: "#digest",
      text: "Digest",
      icon: FaSun
    },
    {
      url: "#bookmarks",
      text: "Bookmarks",
      icon: FaBookmark
    },
  ],
  bottomLinks: [
    {
      url: "#blog",
      text: "Blog"
    },
    {
      url: "#about",
      text: "About"
    },
    {
      url: "#join",
      text: "Join the Beta group"
    },
  ]
}
export default SideBar