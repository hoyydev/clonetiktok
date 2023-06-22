import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAmericas,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import Tippy from '@tippyjs/react';
import routesConfig from '../../../../config/routes';
import Button from '../../../Button';
import styles from './Header.scss';
import images from '../../../../assets/images';
import Menu from '../../../Propper/Menu';
import { MessIcon, SentIcon } from '../../../Icons';
import Image from '../../../Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const CurrentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@phuc',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/feeback',
        },
        ...MENU_ITEMS,
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('wrapper-content')}>
                <Link to={routesConfig.home} className={cx('wrapper-logo')}>
                    <img src={images.logo} alt="" />
                </Link>
                {/* funtion Search  */}
                <Search />

                <div className={cx('actions')}>
                    {CurrentUser ? (
                        <>
                            <Button defaults>
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} />
                                Upload
                            </Button>
                            <button className={cx('action-btn')}>
                                <SentIcon />
                            </button>

                            <button className={cx('action-btn')}>
                                <MessIcon />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button defaults>
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} />
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={CurrentUser ? userMenu : MENU_ITEMS}>
                        {CurrentUser ? (
                            <Image
                                style={{ objectFit: 'cover' }}
                                src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/344382960_1757727504747234_666932397048747887_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7DgDsptBKb8AX-70Nkw&_nc_ht=scontent.fhan14-4.fna&oh=00_AfAGVvmjiVWHlbtpST3iYDrc4-LPx8IGe5GPFV0p6tcQ6A&oe=647D7ECC"
                                className={cx('user-avt')}
                                alt="nguyen van phuc"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
