import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text blah blah Home'
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text Reports ...blah'
    },
    {
        title: "Products",
        path: "/products",
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text Products ...blah'
    },
    {
        title: "Team",
        path: "/team",
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text Teams ...blah'
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text Messages...'
    },
    {
        title: "Support",
        path: "/support",
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text Support'
    },

]