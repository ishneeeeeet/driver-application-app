const RadioInput = ({ name, value, checkedValue, onChange }) => (
  <>
    <input
      type="radio"
      name={name}
      value={value}
      checked={checkedValue === value}
      onChange={onChange}
    />
    <label htmlFor={name} className="text-gray-800">
      {value}
    </label>
  </>
);
export default RadioInput;
