import classNames from 'classnames/bind';
import styles from './Button.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    defaults = false,
    small = false,
    big = false,
    children,
    leftIcons,
    onClick,
    ...passProp
}) {
    let Compo = 'button';
    const props = {
        onClick,
        ...passProp,
    };
    if (to) {
        props.to = to;
        Compo = 'Link';
    } else if (href) {
        props.href = href;
        Compo = 'a';
    }
    const classes = cx('button-login', { primary, outline, defaults, small, big, leftIcons });

    return (
        <Compo className={classes} {...props}>
            {leftIcons && <span className={cx('icon')}>{leftIcons}</span>}
            <span className={cx('title')}>{children}</span>
        </Compo>
    );
}

export default Button;
