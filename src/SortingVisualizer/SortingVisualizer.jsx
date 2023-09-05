import React, { useState, useEffect,   } from "react";
import './SortingVisualizer.css';
import * as SortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms';

export default function SortingVisualizer({selectedAlgorithm , sortButton , setSortButton , newArray , setNewArray , setHideButton , sizeVal ,setSizeVal}) {
    const [array, setArray] = useState([]);

    const PRIMARY_COLOR = '#EC53B0';
    const SECONDARY_COLOR = '#FDE5EC' 
    const THIRD_COLOR = '#FDE5EC';
    const FINAL_GREEN = '#6FE7DB';
    const ARRAY_SIZE = 85;

    const calculateArraySize = () => {
        const width = window.innerWidth;
        let newSize;
        
        if (width <= 600) {
            newSize = 40; // Set your size for small screens
        } else if (width <= 1024) {
            newSize = 60; // Set your size for medium screens
        } else {
            newSize = 85; // Set your size for large screens
        }

        setArraySize(newSize);
    };

   
    useEffect(() => {
        // console.log('now');
            const arrayBars = document.getElementsByClassName('arrayBar');
            for (let i = 0; i < arrayBars.length; i++) {
                arrayBars[i].style.backgroundColor = PRIMARY_COLOR; // Reset to your default color
            }
       
        const performSorting = async () => {
            if (sortButton === 'false' || sortButton === 'true') {
                setHideButton(true);

                // Wait for the state update to finish before continuing
                await new Promise(resolve => setTimeout(resolve, 100));

                if (selectedAlgorithm === 'insertionSort') {
                    insertionSort();
                }

                else if( selectedAlgorithm === 'bubbleSort'){
                    bubbleSort();
                }

                else if(selectedAlgorithm === 'selectionSort'){
                    selectionSort();
                }
            }
        };

        performSorting();
       
    }, [sortButton]);

    // useEffect(() => {
    //     // console.log('works');
    // }, [setHideButton]);

    useEffect(() => {
        resetArray();

        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('arrayBar');
            for (let i = 0; i < arrayBars.length; i++) {
                arrayBars[i].style.backgroundColor = PRIMARY_COLOR; // Reset to your default color
            }
        }, 0); // You can adjust the delay if needed
      
    }, [newArray]);

    function resetArray() {
        const newArray = [];
        for (let i = 0; i < ARRAY_SIZE; i++) {
            newArray.push(randomIntFromInterval(5, 600));
        }
        setArray(newArray);
    }

    const insertionSort = async () => {
        const animations = SortingAlgorithms.insertionSort(array);
        const arrayBars = document.getElementsByClassName('arrayBar');

        // console.log(animations);
        
        for(let i = 0 ; i < animations.length ; i++){
                const firstIdx = animations[i][0];
                const secondIdx = animations[i][1];
                const firstIdxStyle = arrayBars[firstIdx].style;
                const secondIdxStyle = arrayBars[secondIdx].style;

                // console.log(secondIdx);

                firstIdxStyle.backgroundColor = SECONDARY_COLOR;

                await new Promise(resolve => setTimeout(resolve, 15)); // Wait for 10ms

            
                const tempHeight = firstIdxStyle.height;
                firstIdxStyle.height = secondIdxStyle.height;
                secondIdxStyle.height = tempHeight;
                firstIdxStyle.backgroundColor = PRIMARY_COLOR;


        }

        for(let i = array.length -1 ; i >= 0 ; i--){
            await new Promise(resolve => setTimeout(resolve, 15)); // Wait for 10ms
            arrayBars[i].style.backgroundColor = FINAL_GREEN;
        }

        
        setHideButton(false);
        
    }

    const bubbleSort = async () => {
        //////////////////////////////////////

        const animations = SortingAlgorithms.bubbleSort(array);
        const check = animations[animations.length - 1];
        animations.pop();
        const arrayBars = document.getElementsByClassName('arrayBar');

        let counter = 0;



        if(!check){
            for(let i = 0 ; i < animations.length ; i++){
                const firstIdx = animations[i][0];
                const secondIdx = animations[i][1];
                const swapped = animations[i][2];
                const firstIdxStyle = arrayBars[firstIdx].style;
                const secondIdxStyle = arrayBars[secondIdx].style;
                

                if(swapped) {
                    firstIdxStyle.backgroundColor = SECONDARY_COLOR;

                    await new Promise(resolve => setTimeout(resolve, 15)); // Wait for 10ms
    
                
                    const tempHeight = firstIdxStyle.height;
                    firstIdxStyle.height = secondIdxStyle.height;
                    secondIdxStyle.height = tempHeight;
    
                    // console.log(secondIdx);
    
                    if (secondIdx === array.length - 1 - counter) {
                        // Wait for a brief moment to ensure the green color is seen
                        await new Promise(resolve => setTimeout(resolve, 5));
                        secondIdxStyle.backgroundColor = FINAL_GREEN;
                        firstIdxStyle.backgroundColor = PRIMARY_COLOR;  // Reset the color
                        counter++;  // Increment counter
                    } else {
                        firstIdxStyle.backgroundColor = PRIMARY_COLOR;
                    }

                }else{
                    // console.log(array.length - 1 -counter);
                    // console.log(secondIdx);
                    if (secondIdx === array.length - 1 - counter) {
                        secondIdxStyle.backgroundColor = FINAL_GREEN;
                        counter++;
                    }

                }       
        }


        for(let i = 0 ; i < array.length; i++){
            await new Promise(resolve => setTimeout(resolve, 15)); // Wait for 10ms
            arrayBars[i].style.backgroundColor = FINAL_GREEN;
        }
        setHideButton(false);

        }else{
            for(let i = 0 ; i < array.length; i++){
                await new Promise(resolve => setTimeout(resolve, 15)); // Wait for 10ms
                arrayBars[i].style.backgroundColor = FINAL_GREEN;
            }
            setHideButton(false);

        }

        
       
     }

     const selectionSort= async () => {
        const animations = SortingAlgorithms.selectionSort(array);
        const arrayBars = document.getElementsByClassName('arrayBar');

        // console.log(animations);

    for (let i = 0; i < animations.length; i++) {
        const [firstIdx, secondIdx,check] = animations[i];
        const firstBarStyle = arrayBars[firstIdx].style;
        const secondBarStyle = arrayBars[secondIdx].style;

        firstBarStyle.backgroundColor = SECONDARY_COLOR;
        secondBarStyle.backgroundColor = THIRD_COLOR;

        await new Promise((resolve) => setTimeout(resolve, 70));

    
        [firstBarStyle.height, secondBarStyle.height] = [secondBarStyle.height, firstBarStyle.height];
        

        firstBarStyle.backgroundColor = PRIMARY_COLOR;
        secondBarStyle.backgroundColor = PRIMARY_COLOR;

        
    
        arrayBars[firstIdx].style.backgroundColor = FINAL_GREEN;
 
    }

    for (let i = 0; i < arrayBars.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 5));
        arrayBars[i].style.backgroundColor = FINAL_GREEN;
    }

    setHideButton(false);

     }

    //  const mergeSort=  () => {
    //     const animations =  SortingAlgorithms.getMergeSortAnimations(array);
    //     const arrayBars = document.getElementsByClassName('arrayBar');
    //     for (let i = 0; i < animations.length; i++) {
    //       const isColorChange = i % 3 !== 2;
    //       if (isColorChange) {
    //         const [barOneIdx, barTwoIdx] = animations[i];
    //         const barOneStyle = arrayBars[barOneIdx].style;
    //         const barTwoStyle = arrayBars[barTwoIdx].style;
    //         const color = i % 3 === 0 ? 'red' : 'black';
    //         setTimeout(() => {
    //           barOneStyle.backgroundColor = color;
    //           barTwoStyle.backgroundColor = color;
    //         }, i * 5);
    //       } else {
    //         setTimeout(() => {
    //           const [barOneIdx, newHeight] = animations[i];
    //           const barOneStyle = arrayBars[barOneIdx].style;
    //           barOneStyle.height = `${newHeight}px`;
    //         }, i * 5);
    //       }
    //     }

    //     // for(let i = 0 ; i < array.length; i++){
    //     //     arrayBars[i].style.backgroundColor = 'green';
    //     // }

    //     // setHideButton(false);

    //  }

    return (
        <div className='leftContainer'>
            <div className="arrayContainer"  style={{gridTemplateColumns: `repeat(${ARRAY_SIZE}, 1fr)`}}>
                {array.map((value, idx) => (
                    <div  className="arrayBar" key={idx} style={{ height: value + 'px' }}>
                    </div>
                ))}
            </div>
        </div>
    );
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function arraysAreEqual(one,two){
//     if(one.length !== two.length){
//         return false;
//     }
//     for (let i = 0 ; i < one.length; i++){
//         if(one[i] !== two[i]){
//             return false;
//         }
//     }
//     return true;
// }

// const jsSort = array.slice().sort((a,b) => a -b);
// const bubbleSort = SortingAlgorithms.bubbleSort(array);

// console.log(arraysAreEqual(jsSort,bubbleSort));