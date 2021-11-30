import PollTwoToneIcon from '@material-ui/icons/PollTwoTone';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import ThumbDownAltTwoToneIcon from '@material-ui/icons/ThumbDownAltTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';
import BugReportTwoToneIcon from '@material-ui/icons/BugReportTwoTone';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import MoodTwoToneIcon from '@material-ui/icons/MoodTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';

import { deepPurple, green, pink, lightBlue, orange, red, yellow } from '@material-ui/core/colors';

export const boxOne = [
    {
        id: 1,
        title: 'All Earnings',
        data: '$30200',
        img: <PollTwoToneIcon fontSize="large" style={{ color: deepPurple[500] }} />
    },
    {
        id: 2,
        title: 'Task',
        data: '145',
        img: <CalendarTodayTwoToneIcon fontSize="large" style={{ color: pink[500] }} />
    },
    {
        id: 3,
        title: 'Page Views',
        data: '290+',
        img: <DescriptionTwoToneIcon fontSize="large" style={{ color: green[500] }} />
    },
    {
        id: 4,
        title: 'Downloads',
        data: '500',
        img: <ThumbDownAltTwoToneIcon fontSize="large" style={{ color: lightBlue[500] }} />
    }
];

export const boxThere = [
    {
        id: 1,
        title: 'Visitors',
        data: '6035',
        img: <AccountCircleTwoToneIcon fontSize="small" style={{ color: deepPurple[500] }} />
    },
    {
        id: 2,
        title: 'Invoices',
        data: '19',
        img: <DescriptionTwoToneIcon fontSize="small" style={{ color: pink[500] }} />
    },
    {
        id: 3,
        title: 'Issues',
        data: '63',
        img: <BugReportTwoToneIcon fontSize="small" style={{ color: orange[500] }} />
    },
    {
        id: 4,
        title: 'Projects',
        data: '95%',
        img: <FolderOpenTwoToneIcon fontSize="small" style={{ color: green[500] }} />
    }
];

export const boxUpDown = [
    {
        id: 1,
        title: 'Total Paid Users',
        data: '7652',
        statistics: '8% less Last 3 Months',
        img: <ArrowDownwardIcon fontSize="small" style={{ color: red[500] }} />
    },
    {
        id: 2,
        title: 'Order Status',
        data: '625',
        statistics: '6% From Last 3 Months',
        img: <ArrowUpwardIcon fontSize="small" style={{ color: green[500] }} />
    },
    {
        id: 3,
        title: 'Unique Visitors',
        data: '6522',
        statistics: '10% From Last 6 Months',
        img: <ArrowDownwardIcon fontSize="small" style={{ color: red[500] }} />
    },
    {
        id: 4,
        title: 'Monthly Earnings',
        data: '5963',
        statistics: '36% From Last 6 Months',
        img: <ArrowUpwardIcon fontSize="small" style={{ color: green[500] }} />
    }
];

export const dataRevenue = [
    {
        id: 1,
        title: 'Revenue',
        data: '$42,562',
        statistics: '$50,032 Last Month',
        img: <MonetizationOnOutlinedIcon style={{ fontSize: 95, opacity: 0.4 }} />,
        background: 'bgPuple'
    },
    {
        id: 2,
        title: 'Orders Received',
        data: '486',
        statistics: '20% Increase',
        img: <AccountCircleOutlinedIcon style={{ fontSize: 95, opacity: 0.4 }} />,
        background: 'bgBlue'
    },
    {
        id: 3,
        title: 'Total Sales',
        data: '1641',
        statistics: '$1,055 Revenue Generated',
        img: <LocalMallOutlinedIcon style={{ fontSize: 95, opacity: 0.4 }} />,
        background: 'bgRed'
    }
];

export const dataUser = [
    {
        id: 1,
        title: 'Last week',
        data: '2,672',
        statistics: 'users',
        img: <AccountCircleOutlinedIcon style={{ fontSize: '30px' }} />,
        color: 'puple',
        bgColor: 'bgPuple'
    },
    {
        id: 2,
        title: 'Total ',
        data: '$6391',
        statistics: 'earning',
        img: <AccountBalanceWalletTwoToneIcon style={{ fontSize: '30px' }} />,
        color: 'blue',
        bgColor: 'bgBlue'
    },
    {
        id: 3,
        title: 'Today',
        data: '9,276',
        statistics: 'visitors',
        img: <MoodTwoToneIcon style={{ fontSize: '30px' }} />,
        color: 'green',
        bgColor: 'bgGreen'
    },
    {
        id: 4,
        title: 'New',
        data: '3,619',
        statistics: 'order',
        img: <ShoppingCartTwoToneIcon style={{ fontSize: '30px' }} />,
        color: 'red',
        bgColor: 'bgRed'
    }
];
export const dataImpressions = [
    {
        id: 1,
        title: 'Impressions',
        data: '1,563',
        time: 'May 23 - June 01 (2018)',
        img: <VisibilityTwoToneIcon fontSize="small" style={{ color: lightBlue[500] }} />,
        bgColor: 'bgBlue'
    },
    {
        id: 2,
        title: 'Goal',
        data: '30,564',
        time: 'May 28 - June 01 (2018)',
        img: <RadioButtonCheckedIcon fontSize="small" style={{ color: green[500] }} />,
        bgColor: 'bgGreen'
    },
    {
        id: 3,
        title: 'Impact',
        data: '42.6%',
        time: 'May 30 - June 01 (2018)',
        img: <PanToolOutlinedIcon fontSize="small" style={{ color: yellow[500] }} />,
        bgColor: 'bgYellow'
    }
];

export const dataSocial = [
    {
        id: 1,
        title: 'Facebook Users',
        data: '1165 +',
        img: <FacebookIcon style={{ fontSize: 40 }} />,
        bgColor: 'bgPuple'
    },
    {
        id: 2,
        title: 'Twitter Users',
        data: '780 +',
        img: <TwitterIcon style={{ fontSize: 40 }} />,
        bgColor: 'bgBlue'
    },
    {
        id: 3,
        title: 'Linked In Users',
        data: '998 +',
        img: <LinkedInIcon style={{ fontSize: 40 }} />,
        bgColor: 'bgBlack'
    },
    {
        id: 4,
        title: 'Youtube Videos',
        data: '650 +',
        img: <YouTubeIcon style={{ fontSize: 40 }} />,
        bgColor: 'bgRed'
    }
];

export const dataDaily = [
    {
        id: 1,
        title: 'Daily user',
        data: '1,658',
        img: <AccountCircleTwoToneIcon style={{ fontSize: '90px', opacity: '0.3' }} />,
        bgColor: 'bgPuple'
    },
    {
        id: 1,
        title: 'Daily page view',
        data: '1K',
        img: <DescriptionOutlinedIcon style={{ fontSize: '90px', opacity: '0.3' }} />,
        bgColor: 'bgBlue'
    },
    {
        id: 1,
        title: 'Last month visitor',
        data: '5,678',
        img: <EmojiEventsOutlinedIcon style={{ fontSize: '90px', opacity: '0.3' }} />,
        bgColor: 'bgGreen'
    }
];
