import "./index.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import axios from "axios";

const IssueDetails = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  useEffect(async () => {
    try {
      const resdata = await axios.get(
        `https://api.github.com/repos/facebook/create-react-app/issues/${id}`
      );
      setData(resdata.data);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }, []);
  return (
    <>
      {data == false ? (
        ""
      ) : (
        <>
          <Container className="content">
            <Container className="textEle">USER PROFILE</Container>
            <div>
              <b>Title : </b>
              {data.title}
            </div>
            <div>
              <b>Created At : </b>
              {data.created_at}
            </div>
            <div>
              <b>Updated At : </b>
              {data.updated_at}
            </div>
            <Image src={data.user.avatar_url} />
          </Container>
        </>
      )}
    </>
  );
};

export default IssueDetails;
