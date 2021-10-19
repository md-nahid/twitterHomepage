import React from "react"
import { BiHomeCircle } from "react-icons/bi";
import { FiHash } from "react-icons/fi";
import { AiOutlineBell, AiOutlineMail, AiOutlineUser, AiOutlineTwitter } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";


export const SidenavData = [
    {
        id: "01",
        name: '',
        icon: <AiOutlineTwitter />,
        pathname: "/thome"
    },
    {
        id: "02",
        name: 'Home',
        icon: <BiHomeCircle />,
        pathname: "/thome"
    },
    {
        id: "03",
        name: 'Explore',
        icon: <FiHash />,
        pathname: "/explore"
    },
    {
        id: "04",
        name: 'Notifications',
        icon: <AiOutlineBell />,
        pathname: "/notifications"
    },
    {
        id: "05",
        name: 'Messages',
        icon: <AiOutlineMail />,
        pathname: "/messages"
    },
    {
        id: "06",
        name: 'Bookmarks',
        icon: <BsBookmark />,
        pathname: "/bookmarks"
    },
    {
        id: "07",
        name: 'Lists',
        icon: <RiFileList2Line />,
        pathname: "/lists"
    },
    {
        id: "08",
        name: 'Profile',
        icon: <AiOutlineUser />,
        pathname: "/profile"
    },
    {
        id: "09",
        name: 'More',
        icon: <CgMoreO />,
        pathname: ""
    }
] 