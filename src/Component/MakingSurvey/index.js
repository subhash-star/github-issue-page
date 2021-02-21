import { useState, useEffect } from "react";
import PublishForm from "../PublishForm";
import "./index.css";
const MakingSurvey = ({ handleSurvey }) => {
  let inputFields;
  const [formFlag, setformFlag] = useState(false);
  let [createdForm, setcreatedForm] = useState([]);
  const [que, setQue] = useState("");
  const [form, setForm] = useState([]);
  const [queType, setQueType] = useState(0);
  const [queTypeChoosen, setQueTypeChoosen] = useState(false);
  const [inputValue, setinputValue] = useState("");

  const handleSelect = (e) => {
    e.preventDefault();
    setQueType((queType) => e.target.selectedIndex);
    setQueTypeChoosen(true);
  };
  const handleInputChange = (event) => {
    setinputValue(event.target.value);
    // event.target.value=inputValue;
  };
  // useEffect(() => {
  //     inputFields= form.map((el,index)=> { return <><input type="text" value={el} /><span id={`${i++}`}> ➕ </span><span> ➖ </span><br></br></>})
  // }, [form])
  const addToForm = () => {
    // console.log(inputValue);
    setForm((form) => [...form, inputValue]);
    setinputValue((inputValue) => "");
  };
  const removeFromForm = (i) => {
    let copiedForm = form;
    copiedForm.splice(i, 1);
    console.log(copiedForm);
    setForm((form) => [...copiedForm]);
  };
  const addNewQuestion = () => {
    let tempObj = {};
    if (queType === 1) {
      tempObj.queType = queType;
      tempObj.question = que;
      tempObj.option1 = form[0];
      tempObj.option2 = form[1];
      tempObj.option3 = form[2];
      tempObj.option4 = form[3];
    } else {
      tempObj.queType = queType;
      tempObj.question = que;
    }
    setcreatedForm([...createdForm, tempObj]);
    setQue((que) => "");
    setForm((form) => []);
    setQueType((queType) => 0);
    setQueTypeChoosen((queTypeChoosen) => false);
    setinputValue((inputValue) => "");
  };
  const postForm = () => {
    let tempObj = {};
    if (queType === 1) {
      tempObj.queType = queType;
      tempObj.question = que;
      tempObj.option1 = form[0];
      tempObj.option2 = form[1];
      tempObj.option3 = form[2];
      tempObj.option4 = form[3];
    } else {
      tempObj.queType = queType;
      tempObj.question = que;
    }
    setcreatedForm([...createdForm, tempObj]);
    setformFlag(true);
  };
  if (formFlag === true) {
    handleSurvey(createdForm);
  }
  // console.log(createdForm)
  inputFields = form.map((el, index) => {
    return (
      <>
        <input className="options" type="text" value={el} />
        <span> ➕ </span>
        <span onClick={() => removeFromForm(index)}> ➖ </span>
        <br></br>
      </>
    );
  });

  return (
    <div className="box">
      <select
        className="selector"
        name="state"
        id="p"
        value={queType}
        defaultValue={queType}
        onChange={(event) => handleSelect(event)}
      >
        <option value="0" disabled hidden>
          Select que Type
        </option>
        <option value="1">Multi Select</option>
        <option value="2">Single Select</option>
      </select>
      <br></br>
      {queTypeChoosen === true ? (
        queType == 1 ? (
          <div>
            <span>?</span>
            <input
              className="queType"
              type="text"
              value={que}
              onChange={(event) => {
                setQue((que) => event.target.value);
              }}
            />
            <br></br>
            Options<br></br>
            {inputFields}
            {inputFields.length == 4 ? (
              <>
                {" "}
                <button onClick={addNewQuestion}>Add Question</button>{" "}
                <button
                  onClick={() => {
                    postForm();
                  }}
                >
                  Publish
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <span className="plus" onClick={addToForm}>
                  {" "}
                  ➕{" "}
                </span>
                <span> ➖ </span>
              </>
            )}
          </div>
        ) : (
          <>
            <span>?</span>
            <input
              className="queType"
              type="text"
              value={que}
              onChange={(event) => {
                setQue((que) => event.target.value);
              }}
            />
            <br></br>
            Options<br></br>
            <input className="options" type="text" value="Yes" />
            <span> ➕ </span>
            <span> ➖ </span>
            <br></br>
            <input className="options" type="text" value="No" />
            <span> ➕ </span>
            <span> ➖ </span>
            <br></br>
            <button onClick={addNewQuestion}>Add Question</button>{" "}
            <button
              onClick={() => {
                postForm();
              }}
            >
              Publish
            </button>
          </>
        )
      ) : (
        ""
      )}
    </div>
  );
};
export default MakingSurvey;
