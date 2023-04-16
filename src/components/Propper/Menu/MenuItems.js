import classNames from 'classnames/bind';
import Button from '../../Button';
import styles from './Menu.scss';

const cx = classNames.bind(styles);

function MenuItems({ data }) {
    return (
        <Button classNames={cx('menu-list')} to={data.to} leftIcons={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
