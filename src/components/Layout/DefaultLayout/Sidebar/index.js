import classNames from 'classnames/bind';
import styles from './Sidebar.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('sidebar')}>
            <h1>sidebar</h1>
        </aside>
    );
}

export default Sidebar;
