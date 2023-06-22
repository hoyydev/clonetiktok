import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '../Image';
import styles from './acount.scss';

const cx = classNames.bind(styles);

function Account({ data }) {
    return (
        <div className="wrapper-tippy">
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </div>
    );
}

export default Account;
