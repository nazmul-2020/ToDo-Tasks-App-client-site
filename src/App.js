import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import CompletedTasks from './Component/CompletedTasks/CompletedTasks';
import Calendar from './Component/Calendar/Calendar';
import ToDo from './Component/ToDo/ToDo';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/completedTasks' element={<CompletedTasks />}></Route>
        <Route path='/calendar' element={<Calendar/>}></Route>
        <Route path='/toDo' element={<ToDo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
