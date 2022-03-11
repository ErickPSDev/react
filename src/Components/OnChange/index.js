import React from "react";
import FormRange from "react-bootstrap/esm/FormRange";

function Form() {
    function grabarInfo(event) {
        console.log(event.target.value)
    }

    return (
        <form>
            <input 
                placeHolder='Ingresa aqui tu info'
                 OnChange={(event) => grabarInfo(event)}
                 />
                 <button> Submit Form!</button>
        </form>
    )

}

export default Form