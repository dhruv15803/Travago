import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Tours from './Components/Tours';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ToursInterested from './Pages/ToursInterested';

// https://course-api.com/react-tours-project
// Company name Travago

function App() {

  let toursInterest = JSON.parse(localStorage.getItem('toursInterest'));
  if(toursInterest===null || toursInterest===undefined){
    toursInterest = [];
  }

  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);
  const [interest,setInterest] = useState(toursInterest);


  useEffect(()=>{
    fetch('https://course-api.com/react-tours-project').then(res=>res.json()).then((data)=>setTours(data));
  },[])

  const addInterest = (index)=>{
    for(let i=0;i<interest.length;i++){
      if(tours[index].id===interest[i].id){
        toast.error('Already in your interests');
        return;
      }
    }

    setInterest(prevInterest=>[...prevInterest,tours[index]]);
    toast.success('added to your interests');
  }

  const removeInterest = (index)=>{
    const temp = [...interest];
    temp.splice(index,1);
    setInterest(temp);
  }


  useEffect(()=>{
    localStorage.setItem('toursInterest',JSON.stringify(interest));
  },[interest])

  return (
    <>
    <Router>
    <Navbar noOfInterest={interest.length}/>
      <Routes>
        <Route path='/' element={<Tours  loading={loading} addInterest={addInterest} tours={tours}/>}/>
        <Route path='/interested' element={<ToursInterested removeInterest={removeInterest} interest={interest}/>}/>
      </Routes>
    </Router>    
    </>
  );
}

export default App;
