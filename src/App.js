import React, { useState }from "react";

import { Route, Link } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Form from "./Components/Pizza";
import Pizza from "./Components/Pizza";






const App = () => {

  const [members, setMembers] = useState([])
  const [values, setValues] = useState({name: "", size: "", toppings1: Boolean, toppings2: Boolean, toppings4: Boolean, special: "" })

  console.log("render")
const onSubmit = () => {
  setMembers([values, ...members]);
  setValues({name: "", size: "", toppings1: Boolean, toppings2: Boolean, toppings4: Boolean, special: "" })
}
const onChange = (name, value) => {
  setValues({...values, [name]: value }) 
} 


  return (
    <div className="App">
      <header>
        <img src="/assets/Pizza.jpg" alt="Pizza" />

        <nav>
          

          <h1>Bloomtech Eats</h1>
          {/* <Form
          value={values}
          change={onchange}
          submit={onSubmit} */}
          {/* Error shows on home page should only show on pizza page */}

          
          {/* /> */}
              <p></p>
                  
                    <Link id="Homepage" to="/">Home</Link>
                    <Link id="order-pizza" to="/pizza">Order-Pizza</Link>
                    
                  

        </nav>
    </header>
        <Route exact path="/" >
         <Homepage/> 
        </Route>

        <Route path="/pizza" >
         <Pizza   /> 
         <Form
          value={values}
          change={onchange}
          submit={onSubmit}
          />
          {members.map((member, idx )=> {
            return (
              <div key={idx} >
                {member.name}, {member.size}, {member.toppings1}, {member.toppings2}, {member.toppings3}, {member.toppings4}, {member.special} 


              </div>
            )
          })}
         </Route>



  </div>
 
  );
};
export default App;
