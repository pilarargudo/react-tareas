// contenedor del estado global, lee y cambia el estado
import { createStore } from 'redux'

// objeto de estado inicial que se lo pasamos al reducer como estado inicial
const initialState = {
  // array de taras vacío
  tasks: [],
}

//init base
//const reducer = (state, action) => state
//const reducer = (state = initialState, action) => state

// función reducer responsable de cambiar el estado
const reducer = (state = initialState, action) => {

  // creamos switch de tipos de acciones
  switch (action.type){
    case 'ADD_TODO':
      return {
        // mantenemos todo lo que había, aunque ahora sea solo la propiedad tasks
        ...state,
        tasks: [
          // nueva array con todas las que había más una más
        ...state.tasks,
        {
        text: action.payload.text,
        id: action.payload.id,
        completed: false
        }
      ]
      }
    // si alguien lanza una acción que no entra en ninguna acción de las que existen..  
    default:     
      return state;
       // NOTE Juan hace cambios 
      //return action;
      //throw new Error('do not match any type in the reducer')

  }
}

//init base
const store = createStore(reducer)

export default store;