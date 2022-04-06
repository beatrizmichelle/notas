import { useState } from "react";

const App = () => {

// hook -> use .....
//state -> useState

const[inputsState, setInputsState] = useState({
  title:"",
   date:"",
   note:""
});
  const handleInputChange = (event) => { 
   setInputsState({...inputsState,[event.target.name]:event.target.value});
   };

const handleClick = (event) =>{ 
  setInputsState({title:"",
  date:"",
  note:""});

}

  return (
     <div className="App">
     <h3>Notas</h3>
     <label>Titulo
     
     <input 
     id="title" 
     name="title" 
     type="text" 
     onChange={handleInputChange}
     value={inputsState.title}
      />
      </label>
      <br />
      <label>Fecha
     
     <input 
     id="date" 
     name="date" 
     type="text" 
     onChange={handleInputChange}
     value={inputsState.date}
      />
      </label>
      <br />
      <label>Nota
     
     <input 
     id="note" 
     name="note" 
     type="text" 
     onChange={handleInputChange}
     value={inputsState.note}
      />
      </label>
      <button className="btn btn-primary me-2" onClick={handleClick}>limpiar</button>
    </div>
  );
};

export default App;
