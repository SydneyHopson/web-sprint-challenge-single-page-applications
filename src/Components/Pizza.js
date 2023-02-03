import React from "react"

const Form = (props) => {
    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }



    return (
        //  <div id="pizza-form">
        <form onSubmit={handleSubmit} id="pizza-form">
            <h1>Build your own pizza</h1>
            <label>Name
                <input id="name-input"
                    type="text"
                    placeholder="Enter Name Here"
                    value={props.values.name}
                    // Error when active all tests fail
                    name="name"
                    onChange={handleChange}
                />
            </label>
            <label>Size
                <select id="size-dropdown">
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option selected value="large">large</option>
                    <option value="x-large">x-large</option>
                </select>
            </label>

            <label>topping1

                <input type="checkbox" /><span>tooping1</span>
            </label>

            <label>topping2
                <input type="checkbox" /><span>tooping2</span>
            </label>

            <label>topping3

                <input type="checkbox" /><span>tooping3</span>
            </label>

            <label>topping4

                <input type="checkbox" /><span>tooping4</span>
            </label>

            <label>Special instructions
                <input id="special-text"
                    type="text"
                    placeholder="Enter Name Here"
                    // value={props.values.name}
                    // Error when active all tests fail
                    name="name"
                    onChange={handleChange}
                />
            </label>

           
           
            
            






       

        </form >
    
        
    )
}
export default Form