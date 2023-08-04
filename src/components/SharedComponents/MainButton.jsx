import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const Button = ({
  buttonText,
  href,
  title,
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  return (
    <a
      href={href}
      title={title}
      rel={rel}
      target={target}
      className={`
      flex justify-center items-center gap-2 py-3 px-4 max-w-max mt-6
      border-2 border-royalBlue-700 bg-royalBlue-600 rounded-lg
      font-Kanit text-mistGray-50 text-sm font-semibold tracking-wider
      
      hover:border-royalBlue-600 hover:bg-mistGray-50 hover:text-royalBlue-600 hover:px-8 transition-all`}
    >
      <FaGithub /> {buttonText}
    </a>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default React.memo(Button);
