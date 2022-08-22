import { components } from "react-select";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          className="multielectChk"
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
          id="checkMe"
          hidden
        />
        <label htmlFor="checkMe"></label>

        <label className="ml-5">{props.label}</label>
      </components.Option>
    </div>
  );
};

export default Option;
