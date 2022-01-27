import {  FaDirections } from 'react-icons/fa';
import { BsBookmark, BsGrid } from 'react-icons/bs'
import { HiOutlineSun } from 'react-icons/hi'
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
      icon: BsGrid
    },
    {
      url: "#digest",
      text: "Digest",
      icon: HiOutlineSun
    },
    {
      url: "#bookmarks",
      text: "Bookmarks",
      icon: BsBookmark
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