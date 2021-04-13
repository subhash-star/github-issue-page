import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./index.css";
const IssueList = () => {
  const [data, setData] = useState("");

  useEffect(async () => {
    try {
      const resdata = await axios.get(
        "https://api.github.com/repos/facebook/create-react-app/issues"
      );
      console.log(resdata.data);
      setData(resdata.data);
    } catch (err) {
      alert(err);
    }
  }, []);
  return (
    <>
      {data == false ? (
        ""
      ) : (
        <ListGroup className="whole">
          {data.map((el) => (
            <ListGroupItem className="listEle">
              <span className="mr-1">
                <svg
                  className="icon "
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                  fill="#28a745"
                >
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>
                </svg>
              </span>
              <Link
                style={{ textDecoration: "none", color: "primary" }}
                to={`/${el.number}`}
              >
                <b className="textEle">{el.title}</b>
              </Link>
              {el.labels.map((eachEl) => (
                <span className="label">{eachEl.name}</span>
              ))}
              <span className="comment">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                {el.comments}
              </span>
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default IssueList;
