import classNames from 'classnames/bind';
import styles from './Propper.scss';

const cx = classNames.bind(styles);

function Wrapper({ children }) {
    return <div className={cx('wrapper-propper')}>{children}</div>;
}

export default Wrapper;
