import React from 'react';
import PropTypes from 'prop-types';
import API from '@api/index';

const Button = (props) => {
  const handleClick = () => {
    API.call(API.TYPE.V1_GET_TEST).then((resolve) => {
      console.log(resolve);
    });
  };

  return (
    <button className={props.test_class} onClick={handleClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  test_class: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
