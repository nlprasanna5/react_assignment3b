// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Input from './components/input';
import Button from './components/button';

function App() {
  return (
   <div className='register'>
   <Heading head="Register here ..." />
   <Input />
   <Button  btnValue="Submit"/>

   </div>
  );
}

// function add(a,b){
//   return a+b;
// }

// add(3,4);

export default App;
