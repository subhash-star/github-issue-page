import MakeingSurvey from "../MakingSurvey";
import React,{useState }from 'react';

const Home = () => {
    const [createSurvey, setCreateSurvey] = useState(false)
    return(
        createSurvey===true 
        ?
        <MakeingSurvey />
        :
        <div  className="survey">
          <div className="btn" onClick={()=>setCreateSurvey(true)}>Create Survey </div>
          <div className="btn">Take Survey</div>
        </div>
    )
}
export default Home;