import React, { useState }from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Components/Homepage";
import formSchema from "./Components/Validation/formSchema";
import * as yup from "yup";
import Pizza from "./Components/Pizza";


// const initialFormValues = {
//   name: "", 
//   size: "", 
//   toppings1: Boolean, 
//   toppings2: Boolean, 
//   toppings4: Boolean, 
//   special: "" 
  
// }
// const initialFormErrors = {
//   name: "", 
//   size: "", 
//   toppings1: Boolean, 
//   toppings2: Boolean, 
//   toppings4: Boolean, 
//   special: "" 
// }



const App = () => {

  const [members, setMembers] = useState([])
  const [values, setValues] = useState({name: "", size: "", toppings1: Boolean, toppings2: Boolean, toppings4: Boolean, special: "" })
  const [formErrors, setErrors, errors] = useState({name: ""})




  console.log("render")
const onSubmit = () => {
  setMembers([values, ...members]);
  setValues({name: "", size: "", toppings1: "", toppings2: "", topping3: "", toppings4: "", special: "", })
}
const onChange = (event) => {
  validate(event);
  setValues({...values,  [event.target.name]: event.target.value }); 
  
} 
const validate = (event) => {
  yup
    .reach(formSchema, event.target.name)
    .validate(event.target.type === "checkbox" ? event.target.checked : event.target.value
    )
    .then(() => {
      setErrors({ ...formErrors, [event.target.name]: "" });
    })
    .catch((error) => {
      setErrors({ ...formErrors, [event.target.name]: error.errors[0] });
    });
};
const handleSubmit = event => {
  event.preventdefault()
  axios.post("http://reqres.in/api/users", setValues)
  .then(res => {
    console.log(res);
    setMembers([res.data, ...members])

  })
  .catch(err => console.error(err))
}

console.log(formErrors)
  return (
    <div className="App">
      <header>
        <img src="/assets/Pizza.jpg" alt="Pizza" />

        <nav>
          

          <h1>Bloomtech Eats</h1>
         

          
         
              <p></p>
                  
                    <Link id="Homepage" to="/">Home</Link>
                    <Link id="order-pizza" to="/pizza">Order-Pizza</Link>
                    
                  

        </nav>
    </header>
        <Route exact path="/" >
         <Homepage/> 
        </Route>

        <Route path="/pizza" >
         <Pizza 
         value={values}
         change={onChange}
         submit={onSubmit}
         errors={formErrors}
          /> 
        {members.map((members, idx)=> {
          return ( 
            <div key={idx}>
              <p>{members.createAt}</p>
              
              {members.name} , 
              {members.size}, 
              {members.toppings1}, 
              {members.toppings2}, 
              {members.toppings3}, 
              {members.toppings4},
              {members.special}


            </div>
          )

        })}
         </Route>



  </div>
 
  );
};
export default App;
