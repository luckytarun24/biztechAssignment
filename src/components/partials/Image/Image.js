const Image = ({ style, props, path, alt }) => {
  return <img src={path} alt={alt} {...props} style={style} />;
};
export default Image;
