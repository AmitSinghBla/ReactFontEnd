import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'IoT Dashboard',
    // path: '/iotdashboard',
    icon: <AiIcons.AiOutlineMail  />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    //edit
    subNav: [
      {
        title: 'Device Insights',
        // path: '/iotdashboard/deviceinsights',
      },
      {
        title: 'Configure Devices',
        // path: '/iotdashboard/configuredevices',
      },
      {
        title: 'Alerts',
        // path: '/iotdashboard/alerts',
      },
      {
        title: 'Predictive Maintenance',
        // path: '/iotdashboard/predictivemaintenance',
      }
    ]
  },

  {
    title: 'Navigation Two',
    // path: '/navigationtwo',
    icon: <RiIcons.RiNavigationLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    //edit
    subNav: [
      {
        title: 'Option 5',
        // path: '/navigationtwo/option5'
      },
      {
        title: 'Option 6',
        // path: '/navigationtwo/option6'
      },
      {
        title: 'SubMenu',
        // path: '/navigationtwo/submenu',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
      }
    ]
  },

  {
    title: 'Navigation Three',
    // path: '/navigationthree',
    icon: <AiIcons.AiOutlineSetting />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    //edit
    subNav: [
        {
          title: 'Option 9',
          // path: '/navigationthree/option9'
        },
        {
          title: 'Option 10',
          // path: '/navigationthree/option10'
        },
        {
          title: 'Option 11',
          // path: '/navigationthree/option11',
        }
      ]
  },
 
];