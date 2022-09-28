import "./Input.css";

function InputFiled(props) {
  const handleOnChange = (event) => {
    props.onChange(event.target.value);
  };

  const element =
    props.element === "input" ? (
      <input
        className={`form-input ${props.inputClass}`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleOnChange}
      />
    ) : (
      <textarea
        className={`form-input ${props.inputClass}`}
        id={props.id}
        rows={props.rows || 3}
        onChange={handleOnChange}
      />
    );

  return (
    <div className={`form-wrapper ${props.formClass}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
}

export default InputFiled;
