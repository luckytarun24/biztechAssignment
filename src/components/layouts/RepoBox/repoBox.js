const RepoBox = ({ name, description }) => {
  return (
    <div>
      <h3 style={{ color: "#0969da" }}>{name}</h3>
      <p>{description}</p>
    </div>
  );
};
export default RepoBox;
