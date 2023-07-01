import PropTypes from "prop-types";
import React from "react";

const SmallButton = ({
  href,
  icon,
  title,
  target = "_blank",
  rel = "noopener noreferrer",
  text,
}) => {
  const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef(null);

  return (
    <a
      className={`
      flex items-center mt-6 p-2 bg-royalBlue-600 
      text-mistGray-50 border-2 border-royalBlue-700 
      rounded-lg font-Kanit font-semibold tracking-wider 
      hover:bg-mistGray-50 hover:border-royalBlue-600 
      hover:text-royalBlue-600 transition-color`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={href}
      title={title}
      target={target}
      rel={rel}
    >
      {icon}
      <p
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </p>
    </a>
  );
};

SmallButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default SmallButton;
