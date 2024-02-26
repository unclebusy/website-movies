function RadioInput({ id, type, handleFilterChange, checked }) {
  return (
      <label htmlFor={id}>
        <input
            className="with-gap"
            id={id}
            name="type"
            type="radio"
            data-type={type}
            onChange={handleFilterChange}
            checked={checked}
        />
        <span>{type}</span>
      </label>
  );
}

export default RadioInput;