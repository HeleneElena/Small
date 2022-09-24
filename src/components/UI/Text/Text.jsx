import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './Text.module.css';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    center,
    href,
    medium,
    bold,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    {[style[`fs${size}`]]: size},
    {[style.center]: center},
    {[style.medium]: medium},
    {[style.bold]: bold},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fst${dsize}`]]: dsize}
  );

  return <As className={classes} href={href}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  center: PropTypes.bool,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.object,
    PropTypes.number, 
    PropTypes.array,
  ]),
  href: PropTypes.string,
  medium: PropTypes.number,
  bold: PropTypes.number,
};