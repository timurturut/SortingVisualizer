import './App.css';
import  SortingVisualizer  from './SortingVisualizer/SortingVisualizer';
import LeftBar from './LeftBar/LeftBar';
import {  useState ,  } from 'react';

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('');
  const [sortButton, setSortButton] = useState('');
  const [newArray, setNewArray] = useState(false);
  const [hideButton, setHideButton] = useState(false);




  // useEffect(() => {
  //   console.log(selectedAlgorithm);
  // },);

  return (
      <div className='App'>
        <LeftBar  newArray = {newArray} 
                  setNewArray={setNewArray} 
                  setSelectedAlgorithm={setSelectedAlgorithm} 
                  sortButton = {sortButton} 
                  setSortButton = {setSortButton}
                  hideButton= {hideButton}></LeftBar>
        <SortingVisualizer 
                  newArray = {newArray} 
                  setNewArray={setNewArray} 
                  selectedAlgorithm={selectedAlgorithm} 
                  sortButton = {sortButton} 
                  setSortButton = {setSortButton}
                  setHideButton = {setHideButton}></SortingVisualizer>
      </div>
  );
}

export default App;
