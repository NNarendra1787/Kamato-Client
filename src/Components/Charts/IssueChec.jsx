import axios from 'axios';
import React, { useEffect, useState } from 'react'

function IssueChec() {
    // const [data, setData] = useState([]);
    const [num, setNum] = useState(0);

    const RandomNumberFunction = (min, max)=>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const GenrateRandom = ()=>{
        setNum(RandomNumberFunction(1, 1000))
    }
    // useEffect(()=>{
    //     // const url = "https://project-backend-ct05.onrender.com/products/fetchdata";
    //     const url = "http://localhost:2000/data/takedata";
    //     axios.get(url)
    //     .then((res)=>{
    //         setData(res.data)
    //         console.log(res.data);
    //         // setData(res.data.Result)
    //         // console.log(res.data.Result);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // },[])

    // useEffect(()=>{
    //     setNum(RandomNumberFunction(0, 100))
    // },[num])

    useEffect(()=>{
        GenrateRandom()
    },[num])
    // console.log(num);

  return (
    <div>
        {/* {data
        .map((item, ind)=>(
            <div key={ind}>
                <h3>{item.Date}</h3>
            </div>
        ))} */}
        <p>Number is {num}
        {num}</p>
    </div>
    
  )
}

export default IssueChec