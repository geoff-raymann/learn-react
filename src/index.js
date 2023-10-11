// import React, { useFetch } from 'react';
import ReactDOM from 'react-dom/client';

import useFetch from './useFetch';
// import Todos from "./Todos";
// import Car from './Car';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
// import Car from './Car.js';




// const myFirstElement = <h1>Hellow React!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);


// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// const myElement = <h1>React is {5 + 5} times better with JSX.</h1>

// const myElement = (
//   <>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </>
// );

// const myElement = <input type="text" />;

// Using conditional statements

// const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }

// const myElement = <h1>{text}</h1>;

// const x = 12;

// const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

// class Car extends React.Component {
//     render(){
//         return <h1>Hi, I am a Car!</h1>;
//     }
// }


// using props in components
// function Car(props) {
//     return <h3>Hi, I am a {props.color} car in function component!</h3>;
// }

// Components in components

// function Car(){
//     return <h2>I am a Car!</h2>;
// }

// function Garage() {
//     return (
//         <>
//             <h1>Who lives in my Garage?</h1>
//             <Car />
//         </>
//     );
// }

// class Car extends React.Component {
//     constructor() {
//         super();
//         this.state = {color: "red"};
//     }
//     render() {
//         return <h2>I am a {this.state.color} Car!</h2>;
//     }
// }

// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         brand: "Ford",
//         model: "Mustang",
//         color: "red",
//         year: 1964
//       };
//     }
//     changeColor = () => {
//         this.setState({color: "blue"});
//     }
//     render() {
//       return (
//         <div>
//           <h1>My Car</h1>
//           <p>Brand: {this.state.brand}</p>
//           <p>Model: {this.state.model}</p>
//           <p>Color: {this.state.color}</p>
//           <p>Year: {this.state.year}</p>
//           <button type='button' onClick={this.changeColor}>Change Color</button>
//         </div>
//       );
//     }
//   }

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {favoritecolor: "red"};
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({favoritecolor: "yellow"})
//         }, 5000)
//     }

//     render() {
//         return (
//             <h1>My Favorite Color just changed. It is {this.state.favoritecolor}</h1>
//         );
//     }
// }

// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     shouldComponentUpdate() {
//       return true;
//     }
//     changeColor = () => {
//       this.setState({favoritecolor: "blue"});
//     }
//     render() {
//       return (
//         <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//         </div>
//       );
//     }
//   }

// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     componentDidMount() {
//       setTimeout(() => {
//         this.setState({favoritecolor: "yellow"})
//       }, 1000)
//     }
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//       document.getElementById("div1").innerHTML =
//       "Before the update, the favorite was " + prevState.favoritecolor;
//     }
//     componentDidUpdate() {
//       document.getElementById("div2").innerHTML =
//       "The updated favorite is " + this.state.favoritecolor;
//     }
//     render() {
//       return (
//         <div>
//           <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//           <div id="div1"></div>
//           <div id="div2"></div>
//         </div>
//       );
//     }
//   }

// Use of props

// function Car(props) {
//     return <h2>I am a { props.brand.model }!</h2>;
//   }
  
//   function Garage() {
//     const carInfo = { name: "Ford", model: "Mustang" };
//     return (
//       <>
//         <h1>Who lives in my garage?</h1>
//         <Car brand={ carInfo } />
//       </>
//     );
//   }
  
//   On React Events

// function Football() {
//     const shoot = () => {
//         alert("Great Shot!");
//     }
//     return (
//         <button onClick={shoot}>Take the short!</button>
//     );
// }

// function Football() {
//     const shoot = (a) => {
//         alert(a);
//     }
//     return (
//         <button onClick={() => shoot("Gooooal!")}>Take the short!</button>
//     );
// }

/* Passing of arguements */
// function Football() {
//     const shoot = (a, b) => {
//       alert(b.type);
//       /*
//       'b' represents the React event that triggered the function,
//       in this case the 'click' event
//       */
//     }
  
//     return (
//       <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//     );
//   }
  
/* On React Conditionals */ 

// function MissedGoal() {
//     return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//     return <h1>Goal!</h1>;
// }

// function Goal(props) {
//     const isGoal = props.isGoal;
//     if (isGoal) {
//         return <MadeGoal />;
//     }
//     return <MissedGoal />;
// }

/* Use of && Operator*/

// function Garage(props) {
//     const cars = props.cars;
//     return (
//         <>
//             <h1>Garage</h1>
//             {cars.length > 0 &&
//                 <h2>
//                     You have {cars.length} cars in your garage.
//                 </h2>
//             }
//         </>
//     );
// }


/* Use of ternery operator */
// function Goal(props) {
//     const isGoal = props.isGoal;
//     return (
//       <>
//         { isGoal ? <MadeGoal/> : <MissedGoal/> }
//       </>
//     );
//   }

// function Car(props) {
//     return <li>I am a { props.brand }</li>;
// }

// function Garage() {
//     const cars = ['Ford', 'BMW', 'Audi', 'Jeep', 'Chevrolet'];
//     return (
//         <>
//             <h1>Who lives in my garage?</h1>
//             <ul>
//                 {cars.map((car) => <Car brand={car}/>)}
//             </ul>
//         </>
//     );
// }

// function MyFrom () {
//     const [name, setName] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`The name you entered was: ${name}`)
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name:
//                 <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
//             </label>
//             <input type='submit' />
//         </form>
//     )
// }

// function MyForm() {
//     const [inputs, setInputs] = useState({});
  
//     const handleChange = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;
//       setInputs(values => ({...values, [name]: value}))
//     }
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert(inputs);
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name:
//         <input 
//           type="text" 
//           name="username" 
//           value={inputs.username || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <label>Enter your age:
//           <input 
//             type="number" 
//             name="age" 
//             value={inputs.age || ""} 
//             onChange={handleChange}
//           />
//           </label>
//           <input type="submit" />
//       </form>
//     )
// }


// /* Adding text area */
// function MyForm() {
//     const [textarea, setTextarea] = useState(
//         "The content of a textarea goes in the value attribute"
//     );

//     const handleChange = (event) => {
//         setTextarea(event.target.value)
//     }

//     return (
//         <form>
//             <textarea value={textarea} onChange={handleChange}></textarea>
//         </form>
//     )
// }

/* Adding Select Box */

// function MyForm() {
//     const [myCar, setMyCar] = useState("Volvo");

//     const handleChange = (event) => {
//         setMyCar(event.target.value)
//     } 

//     return (
//         <form>
//             <select value={myCar} onChange={handleChange}>
//                 <option value="Ford">Ford</option>
//                 <option value="Volvo">Volvo</option>
//                 <option value="Fiat">Fiat</option>
//             </select>
//         </form>
//     )
// }

/* Handle React Routers */

// export default function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path='blogs' element={<Blogs />} />
//                     <Route path='contact' element={<Contact />} />
//                     <Route path='*' element={<NoPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }

/* Memo - Skip re-rendering a component if its props have not changed. */

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState(["todo 1", "todo 2"]);

//     const increment = () => {
//         setCount((c) => c + 1);
//     };

//     return (
//         <>
//             <Todos todos={todos} />
//             <hr />
//             <div>
//                 Count: {count}
//                 <button onClick={increment}>+</button>
//             </div>
//         </>
//     );
// };

// import './my-sass.scss';

// const Header = () => {
//     return (
//         <>
//             <h1>Hello Style!</h1>
//             <p>Add a little style!.</p>
//         </>
//     );
// }


// function FavoriteColor() {
//     const [color, setColor] = useState("red");
  
//     return (
//       <>
//         <h1>My favorite color is {color}!</h1>
//         <button
//           type="button"
//           onClick={() => setColor("blue")}
//         >Blue</button>
//         <button
//           type="button"
//           onClick={() => setColor("red")}
//         >Red</button>
//         <button
//           type="button"
//           onClick={() => setColor("pink")}
//         >Pink</button>
//         <button
//           type="button"
//           onClick={() => setColor("green")}
//         >Green</button>
//       </>
//     );
//   }

/* useState Hook. */

// function FavoriteColor() {
//     const [color, setColor] = useState("red");

//     return (
//         <>
//             <h1>My favorite color is {color}!</h1>
//             <button type='button' onClick={() => setColor("blue")}>Blue</button>
//         </>
//     )
// }


/* useState can hold boolean, number, string, arrays, objects, or a comb. of both */
// function Car() {
//     const [brand, setBrand] = useState("Ford");
//     const [model, setModel] = useState("Mustang");
//     const [year, setYear] = useState("1964");
//     const [color, setColor] = useState("red");
  
//     return (
//       <>
//         <h1>My {brand}</h1>
//         <p>
//           It is a {color} {model} from {year}.
//         </p>
//       </>
//     )
//   }


/* Passing in an Object */
// function Car() {
//     const [car, setCar] = useState({
//       brand: "Ford",
//       model: "Mustang",
//       year: "1964",
//       color: "red"
//     });

//     const updateColor = () => {
//         setCar(previousState => {
//             return { ...previousState, color: "blue"}
//         }); 
//     }

//     const updateBrand = () => {
//         setCar(previousState => {
//             return { ...previousState, brand: "Audi"}
//         });
//     }
  
//     return (
//       <>
//         <h1>My {car.brand}</h1>
//         <p>
//           It is a {car.color} {car.model} from {car.year}.
//         </p>
//         <button type="button" onClick={updateColor}>Blue</button>
//         <button type='button' onClick={updateBrand}>New Brand</button>
//       </>
//     )
// }


/* useEffect Hook. */
// function Timer() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         let timer = setTimeout(() => {
//             setCount((count) => count + 1);
//         }, 1000);

//     return () => clearTimeout(timer)
//     }, []);
//     return <h1>I've rendered {count} times!</h1>;
// }
  
// Variable dependent useEffect hook

// function Counter() {
//     const [count, setCount] = useState(0);
//     const [calculation, setCalculation] = useState(0);

//     useEffect(() => {
//         setCalculation(() => count * 2);
//     }, [count]);

//     return (
//         <>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount((c) => c + 1)}>+</button>
//             <p>Calculation: {calculation}</p>
//         </>
//     );
// }

/* useContext Hook. */

// const UserContext = createContext();

// function Component1() {
//     const [user, setUser] = useState("Jesse Hall");

//     return (
//         <UserContext.Provider value={user}>
//             <h1>{`Hello ${user}!`}</h1>
//             <Component2 />
//         </UserContext.Provider>
//     );
// }

// function Component2() {
//     return (
//         <>
//             <h1>Component 2</h1>
//             <Component3 />
//         </>
//     );
// }

// function Component3() {
//     return (
//         <>
//             <h1>Component 3</h1>
//             <Component4 />
//         </>
//     );
// }

// function Component4() {
//     return (
//         <>
//             <h1>Component 4</h1>
//             <Component5 />
//         </>
//     );
// }

// function Component5() {
//     const user = useContext(UserContext);

//     return (
//         <>
//             <h1>Component 5</h1>
//             <h2>{`Hello ${user} again!`}</h2>
//         </>
//     );
// }


/* useRef Hook */
// function App() {
//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);

//     useEffect(() => {
//         count.current = count.current + 1;
//     });

//     return (
//         <>
//             <input type="text" value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)} />
//             <h1>Render Count: {count.current}</h1>
//         </>
//     );
// }

// function App() {
//     const inputElement = useRef();

//     const focusInput = () => {
//         inputElement.current.focus();
//     };

//     return (
//         <>
//             <input type='text' ref={inputElement} />
//             <button onClick={focusInput}>Focus Input</button>
//         </>
//     );
// }

// function App() {
//     const [inputValue, setInputValue] = useState("");
//     const previousInputValue = useRef("");

//     useEffect(() => {
//         previousInputValue.current = inputValue;
//     }, [inputValue]);

//     return (
//         <>
//             <input type='text' value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)} />
//             <h2>Curren Value: {inputValue}</h2>
//             <h2>Previous Value: {previousInputValue.current}</h2>
//         </>
//     );
// }



/* useReducer Hook */

// const initialTodos = [
//     {
//         id:1, 
//         title: "Todo 1",
//         complete: false,
//     },
//     {
//         id: 2,
//         title: "Todo 2",
//         complete: false,
//     },
// ];

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "COMPLETE":
//             return state.map((todo) => {
//                 if (todo.id === action.id) {
//                     return { ...todo, complete: !todo.complete};
//                 } else {
//                     return todo;
//                 }
//             });
//         default:
//             return state;
//     }
// };

// function Todos() {

//     const [todos, dispatch] = useReducer(reducer, initialTodos);

//     const handleComplete = (todo) => {
//         dispatch({type: "COMPLETE", id: todo.id});
//     };

//     return (
//         <>
//             {todos.map((todo) => (
//                 <div key={todo.id}>
//                     <label>
//                         <input type='checkbox'
//                         checked={todo.complete}
//                         onChange={() => handleComplete(todo)} />
//                         {todo.title}
//                     </label>
//                 </div>
//             ))}
//         </>
//     );
// }


/* useCallback */

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);
  
//     const increment = () => {
//       setCount((c) => c + 1);
//     };
//     const addTodo = useCallback(() => {
//       setTodos((t) => [...t, "New Todo"]);
//     }, [todos]);
  
//     return (
//       <>
//         <Todos todos={todos} addTodo={addTodo} />
//         <hr />
//         <div>
//           Count: {count}
//           <button onClick={increment}>+</button>
//         </div>
//       </>
//     );
//   };



/* useMemo */

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);
//     const calculation = useMemo(() => expensiveCalculation(count), [count]);
  
//     const increment = () => {
//       setCount((c) => c + 1);
//     };
//     const addTodo = () => {
//       setTodos((t) => [...t, "New Todo"]);
//     };
  
//     return (
//       <div>
//         <div>
//           <h2>My Todos</h2>
//           {todos.map((todo, index) => {
//             return <p key={index}>{todo}</p>;
//           })}
//           <button onClick={addTodo}>Add Todo</button>
//         </div>
//         <hr />
//         <div>
//           Count: {count}
//           <button onClick={increment}>+</button>
//           <h2>Expensive Calculation</h2>
//           {calculation}
//         </div>
//       </div>
//     );
//   };
  
//   const expensiveCalculation = (num) => {
//     console.log("Calculating...");
//     for (let i = 0; i < 1000000000; i++) {
//       num += 1;
//     }
//     return num;
//   };

/* Creating Custom hook */

// const Home = () => {
//     const [data, setData] = useState(null);
  
//     useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res) => res.json())
//         .then((data) => setData(data));
//    }, []);
  
//     return (
//       <>
//         {data &&
//           data.map((item) => {
//             return <p key={item.id}>{item.title}</p>;
//           })}
//       </>
//     );
//   };


// Customs files for custom hooks are treated as ordinary files.

const Home = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {data && data.map((item)  => {
                return <p key={item.id}>{item.title}</p>;
            })}
        </>
    );
};


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Home />);