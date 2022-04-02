const Dropdown = ({ style, buttonProps, list, listProps, label }) => {
  return (
    <span class="dropdown">
      <button
        class="btn dropdown-toggle"
        style={style?.button}
        type="button"
        {...buttonProps}
        data-toggle="dropdown"
      >
        {label}
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        {list &&
          list.map((name) => (
            <li style={style?.list} {...listProps}>
              {name}
            </li>
          ))}
      </ul>
    </span>
  );
};
export default Dropdown;
