import React from 'react';
import PropTypes from 'prop-types';
import './Bold.css';

/**
 * Primary UI component for user interaction
 */
export const Bold = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-Bold--primary' : 'storybook-Bold--secondary';
  return (
    <p
      type="Bold"
      className={['storybook-Bold', `storybook-Bold--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </p>
  );
};

Bold.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the Bold be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Bold contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Bold.defaultProps = {
    color: 'grey',
    fontWeight: '700',
};
