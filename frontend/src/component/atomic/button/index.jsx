import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    return <button className={props.test_class}>
        {props.children}
    </button>
}

Button.propTypes = {
    test_class: PropTypes.string,
    text: PropTypes.string,
}

export default Button;