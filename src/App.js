import "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
import MakeingSurvey from "./Component/MakingSurvey";
// import Home from './Component/Home'
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const App = () => {
  let displayForm;
  const [postSurvey, setPostSurvey] = useState(false);
  const [totalSurvey, setTotalSurvey] = useState([]);
  const [createSurvey, setCreateSurvey] = useState(false);
  const handleSurvey = (obj) => {
    setPostSurvey((postSurvey) => true);
    setTotalSurvey((totalSurvey) => obj);
  };
  if (postSurvey === true) {
    displayForm = totalSurvey.map((el) => {
      if (el.queType == 1) {
        return (
          <>
            <div className="queType">{el.question}</div>
            <input type="checkbox" value={el.option1} />
            <label>{el.option1}</label>
            <br></br>
            <input type="checkbox" value={el.option2} />
            <label>{el.option2}</label>
            <br></br>
            <input type="checkbox" value={el.option3} />
            <label>{el.option3}</label>
            <br></br>
            <input type="checkbox" value={el.option4} />
            <label>{el.option4}</label>
            <br></br>
          </>
        );
      } else {
        return (
          <>
            <div className="queType">{el.question}</div>
            <input type="radio" value="Yes" name="s" />
            <label>Yes</label>
            <br></br>
            <input type="radio" value="No" name="s" />
            <label>No</label>
            <br></br>
          </>
        );
      }
    });
  }
  if (postSurvey === true) {
    return (
      <>
        <div className="box">{displayForm}
        <Button variant="primary" >Submit</Button></div>
        
      </>
    );
  } else {
    return createSurvey === true ? (
      <MakeingSurvey handleSurvey={handleSurvey} />
    ) : (
      <div className="survey">
        <div className="btn" onClick={() => setCreateSurvey(true)}>
          Create Survey{" "}
        </div>
        <div className="btn">Take Survey</div>
      </div>
    );
  }
};

export default App;
