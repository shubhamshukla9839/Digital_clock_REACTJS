import React, { useState } from "react";
import "./styles.css";

const App = () => {
  //const state = useState();       // return [stateobject, updated data]
  const [num, setCount] = useState(5); // initial value is 5
  let newtime = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(newtime);
  const IncNum = () => {
    setCount(num + 5);
  };
  const Chtime = () => {
    let newCtime = new Date().toLocaleTimeString();
    setTime(newCtime);
  };
  const [ctext, setText] = useState("c");
  //const [myFullname, setFullname] = useState(" ");
  const onSubmit = () => {
    setFullname(ctext);
    alert("submited");
  };

  setInterval(Chtime, 1000);


  const [myfullName, setFullname] = useState({
    fname: "",
    lname: ""
  });
  const inputevent = (event) => {
    //setText(event.target.value);
    // const value = event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;
    setFullname((preValue) => {
      //console.log(preValue);
      /* if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lName
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fName,
          lname: value
        };
      }*/

      /*
      const ar1=[1,2,3]
      const ar2=[3,4,5]
      const ar3=[...ar1,...ar2]

    use of spread operator
      */

      return {
        ...preValue,
        [name]: value // inside prevalue which match with name it will update
      };
    });
  };

  return (
    <div className="App">
      <h1>
        Hello {myfullName.fname}😄{" "}
        <span style={{ color: "cyan" }}> learn react HOOKS </span>
      </h1>
      <h1> {myfullName.lname} </h1> <br /> <br />
      <h1> {ctime} </h1>
      <button
        onClick={IncNum}
        style={{
          fontSize: "20px",
          borderRadius: "50px",
          height: "40px",
          width: "90px",
          backgroundColor: "red"
        }}
      >
        {" "}
        set time{" "}
      </button>
      <br /> <br />
      <form>
        <div>
          <input
            type="text"
            placeholder="enter here"
            style={{ backgroundColor: "yellow" }}
            onChange={inputevent}
            name="fname"
            value={myfullName.fname}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="enter here"
            style={{ backgroundColor: "yellow" }}
            onChange={inputevent}
            name="lname"
            value={myfullName.lname}
          />
          <br /> <br />
          <button onClick={onSubmit}> click me </button>
        </div>
      </form>
    </div>
  );
};
export default App;
