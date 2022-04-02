const Textfield = ({ label, style, props }) => {
  return (
    <div class="form-group">
      {label && (
        <label for="usr" style={style?.label}>
          {label}
        </label>
      )}
      <input style={style?.input} class="form-control" {...props} />
    </div>
  );
};
export default Textfield;
