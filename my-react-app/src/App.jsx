import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95},
                  {id: 2, name: "orange", calories: 45},
                  {id: 3, name: "banana", calories: 105}];
  const vegetables = [{id: 1, name: "potatoes", calories: 110},
                      {id: 2, name: "celery", calories: 15},
                      {id: 3, name: "carots", calories: 25}];
  
  return(
    <>
       {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
       &nbsp;
       {vegetables.length > 0&& <List items={vegetables} category="Vegetables"/>}
    </>
  );

}

export default App
