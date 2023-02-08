import React from "react"

const Form = (props) => {
    const {change, submit, errors } = props;
    const handleChange = event => {
        
        props.change( event);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }



    return (
        
        <form onSubmit={handleSubmit} id="pizza-form">
            <h1>Build your own pizza</h1>
            <p>{errors.name}</p>

            <label>Name
                <input id="name-input"
                    type="text"
                    placeholder="Enter Name Here"
                    value={props.value.name}
                    name="name"
                    onChange={handleChange}
                />
            </label>
            <label>Size
                <select id="size-dropdown" 
                placeholder="Enter Size Here"
                value={props.value.size} 
                name="size"
                onChange={handleChange}
                >
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                    <option value="grande">large</option>
                    
                    </select>
            </label>

            <label>topping1

                <input id="tooping" 
                type="checkbox" /><span>tooping1</span>
                value={props.value.toppings1}
            </label>

            <label>topping2
                <input type="checkbox" /><span>tooping2</span>
                value={props.value.toppings2}
            </label>

            <label>topping3

                <input type="checkbox" /><span>tooping3</span>
                value={props.value.toppings3}
            </label>

            <label>topping4

                <input type="checkbox" /><span>tooping4</span>
                value={props.value.topping4}
            </label>

            <label>Special instructions
                <input id="special-text"
                    type="text"
                    placeholder="Enter Special Instructions Here"
                    value={props.value.special}
                    name="special"
                    onChange={handleChange}
                />
            </label>
            <button id="order-button"
            input type="handleSubmit" value="order-button"
            />
           
           
           
            
            






       

        </form >
    
        
    )
}
export default Form