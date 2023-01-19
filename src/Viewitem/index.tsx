
import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Viewitem = () => {

    const[data,setData]=useState<any>()
    const id=useParams();
    const getData=async(item:any)=>{
        try{
            const url = `http://localhost:5000/data/${item.id}`
            const result:any=await axios.get(url)
            setData(result.data)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData(id)
    },[id])
  return (
    <div>
      {data &&
        <h3>{JSON.stringify(data)}</h3>
      }

    </div>
  )
}

export default Viewitem