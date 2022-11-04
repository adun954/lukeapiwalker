import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  // selection of objects
const [formState, setFormState] = useState({
    option: "people",
    id: "",
});

const navigate = useNavigate();

function onChangeHandler(event) {
    setFormState({
    ...formState,
      // event,target.name has to be in brackets to make sure everytjing
      // is copied in the formstate
      // with no brackets it would be a key name
    [event.target.name]: event.target.value,
    });
}

function onsSubmitHandler(event) {
    event.preventDefault();
    console.log(formState.id);
    navigate("/" + formState.option + "/" + formState.id);
}

  return (
    <form onSubmit={onsSubmitHandler}>
      <label> Search for: </label>
      <select name="option" value={formState.option} onChange={onChangeHandler}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
    </select>
      {/* lables the id of which planet/people you are selecting */}
    <label> ID: </label>
    <input type="number" name="id" onChange={onChangeHandler} value={formState.id} />
    <button> Search </button>
    </form>
  );
};

export default SearchBar;
