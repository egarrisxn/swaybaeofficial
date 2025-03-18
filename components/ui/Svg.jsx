const defaultProps = {
  width: "1rem",
  height: "1rem",
  strokeWidth: "1",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
};

const Svg = ({ href, className, path, aria, ...props }) => {
  return (
    <>
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <svg {...defaultProps} {...props}>
          {path}
        </svg>
      </a>
    </>
  );
};

export { Svg };
