import React, { useEffect, useState } from "react";
import { Row, Col, Input, Button } from "antd";

import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  nineth,
  tenth,
} from "./questions";

export default function Play() {
  const [correct, setCorrect] = useState([]);
  const [page, setPage] = useState(third);
  const [select, setSelect] = useState(1);
  const [answer, setAnswer] = useState();

  const history = useHistory();
  // console.log(page);
  // console.log(page.image);

  useEffect(() => {
    nextQuestion();
  }, []);

  async function nextQuestion() {
    let number = Math.ceil(Math.random() * 10);
    // console.log("number", number);
    // console.log("correct", correct);
    let check = true;
    do {
      check = false;
      for (var i = 0; i < correct.length; i++) {
        if (number == correct[i]) {
          number = Math.ceil(Math.random() * 10);
          check = true;
        }
      }
    } while (check == true);
    // console.log("number", number);
    switch (number) {
      case 1:
        await setPage(first);
        setSelect(1);
        break;
      case 2:
        await setPage(second);
        setSelect(2);
        break;
      case 3:
        await setPage(third);
        setSelect(3);
        break;
      case 4:
        await setPage(fourth);
        setSelect(4);
        break;
      case 5:
        await setPage(fifth);
        setSelect(5);
        break;
      case 6:
        await setPage(sixth);
        setSelect(6);
        break;
      case 7:
        await setPage(seventh);
        setSelect(7);
        break;
      case 8:
        await setPage(eighth);
        setSelect(8);
        break;
      case 9:
        await setPage(nineth);
        setSelect(9);
        break;
      case 10:
        await setPage(tenth);
        setSelect(10);
        break;
    }
  }

  function respond(index) {
    let array = [];
    
    if (index){
      setAnswer(999)
    }

    console.log(answer,page.correct,index)
    if (answer == page.correct || index == page.correct) {
      toast("Correct!!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      array = correct;
      array.push(select);
      setCorrect(array);
      setAnswer("");
      // console.log("question answered:", correct.length);
      if (correct.length == 10) {
        history.push("/finish");
      } else {
        nextQuestion();
      }
    } else {
      console.log("error");
      toast.error("Wrong Answer", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // console.log("correct:", page.correct);
    }
  }
  return (
    <div style={{ paddingTop: 150 }}>
      {page.image ? <img style={page.styles.image} src={page.image} /> : ""}
      <br />
      {page.question ? <p style={page.styles.question}>{page.question}</p> : ""}
      {page.type == "input" ? (
        <Input
          style={page.styles.input}
          placeholder="Answer"
          onChange={(event) => setAnswer(event.target.value)}
          value={answer}
        />
      ) : (
        ""
      )}
      <br />
      {page.type == "input" ? (
        <Button
          type="primary"
          onClick={() => respond()}
          block
          style={page.styles.answer}
        >
          Answer
        </Button>
      ) : (
        ""
      )}
      <Row>
        <Col xs={{ span: 5, offset: 3 }} lg={{ span: 6, offset: 3 }}></Col>
        <Col xs={{ span: 11 }} lg={{ span: 8 }}>
          {page.answer.map((text, index) => {
            return (
              <Button
                type="primary"
                onClick={() => respond(index+1)}
                block
                style={page.styles.answer}
              >
                {text}
              </Button>
            );
          })}
        </Col>
        <Col xs={{ span: 5 }} lg={{ span: 6, offset: 1 }}></Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

// const mapState = (state) => ({
//   count: state.count,
// });

// const mapDispatch = (dispatch) => ({
//   nextQuestion: dispatch.count.nextQuestion,
//   Correct: dispatch.count.Correct,
// });

// export default connect(mapState, mapDispatch)(Play);
