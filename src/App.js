import React from 'react';
import './App.css';
import Course from './components/courses/Course';
import Header from './components/Header/Header';
import './fakeData/coursesData';
import courses from './fakeData/coursesData';
import { useState } from 'react';
import Cart from './components/cart/Cart';



function App() {
  console.log(courses);

  const [cart,setCart]=useState([]);

const handleEnrollButton=(course)=>{
    const newCart=[...cart,course];
    setCart(newCart);
}

  return (
    <div className="App">
      <Header></Header>
      <div className="body-container">
        <div className="course-container">
          {
            courses.map(course=><Course course={course} handleEnrollButton={handleEnrollButton}></Course>)
          }
        
        </div>

        <div className="cart">
        <Cart cart={cart}></Cart>
        
        </div>
        
      </div>


    </div>
  );
}

export default App;
