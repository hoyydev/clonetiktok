import classNames from 'classnames/bind';
import styles from '../Home/home.scss';

const cx = classNames.bind(styles);
function Home() {
    return <h2 className={cx('phuc')}>home page</h2>;
}

export default Home;
