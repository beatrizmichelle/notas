import { useState } from "react";


const App = () => {
// hook -> use .....
//state -> useState

const[state, setState] = useState("");

 
  const handleInputChange = (event) => { 
   setState(event.target.value);
   };

  return (
    
     <div className="App">
     <h3>Notas</h3>
     <label>Input de prueba
     
     <input 
     id="pruebaID" 
     name="prueba" 
     type="text" 
     onChange={handleInputChange}
     value={state}
      />
      </label>
    </div>
  );
};

export default App;
