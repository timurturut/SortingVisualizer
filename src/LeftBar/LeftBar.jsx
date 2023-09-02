import React, { useRef, useState } from "react";
import "./LeftBar.css";

export default function LeftBar({setSelectedAlgorithm ,sortButton,setSortButton,newArray , setNewArray,  hideButton,sizeVal}){
    const [selectedClass, setSelectedClass] = useState('');
    const sortButtonDiv = useRef('');
    const newArrayRef = useRef('');


    // useEffect(() => {
    //     console.log(hideButton);
    // });
    


    const sortClick = () => {
        // console.log('hi');
        if(sortButton === 'true'){
            setSortButton('false');
        }else{
            setSortButton('true');
        }

    }

    const newArrayClick = () => {
        if(newArray){
            setNewArray(false);
        }else{
            setNewArray(true);
        }
    }

    const nothing = (event) => {
        console.log('nothing');
    }


    const handleClick = (name) => {
      setSelectedAlgorithm(name);
      setSelectedClass(name);
      sortButtonDiv.current.style.display = 'block'; 
    };


    return (
            <div id="leftBar">
                <div id="header">
                    <h1>Sorting Visualizer</h1>
                </div>
                <div className="divider"></div>
                <div ref={newArrayRef} 
                onClick={hideButton ? nothing : newArrayClick} 
                id = "resetButton" className={(hideButton ? 'disabled button' : 'button')}>
                    <h2>Generate New Array</h2>
                </div>
                <div className="divider"></div>
                <div id="content">
                    <h1>Choose a Sorting algorithm</h1>
                    <div className={(selectedClass === 'insertionSort' ? 'currentSelected ' : 'button ' ) + (hideButton ? 'disabled button' : 'button')}
                    onClick={hideButton ?  nothing :() => handleClick('insertionSort')}>Insertion Sort</div>
                    
                    <div  className={(selectedClass === 'bubbleSort' ? 'currentSelected ' : 'button ' ) + (hideButton ? 'disabled button' : 'button')}
                    onClick={hideButton ?  nothing :() => handleClick('bubbleSort')}>Bubble Sort</div>
                    
                    <div className={(selectedClass === 'selectionSort' ? 'currentSelected ' : 'button ' ) + (hideButton ? 'disabled button' : 'button')}
                    onClick={hideButton ? nothing : () => handleClick('selectionSort')}>Selection Sort</div>
                </div>
                <div className="divider"></div>
                
                
                <button  id="sortButton" ref={sortButtonDiv}
                className= {hideButton ? 'disabled' : ''}
                onClick={hideButton ? nothing : sortClick}
                >Sort!</button>
            </div>    
    );

}
