const Tabs = ({ list, style, tabProps }) => {
  return (
    <ul class="nav nav-tabs">
      {list.map((name) => (
        <li style={style} {...tabProps}>
          {name}
        </li>
      ))}
    </ul>
  );
};
export default Tabs;
