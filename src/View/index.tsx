import axios from 'axios';
import { DetailsList, DetailsListLayoutMode, IColumn, PrimaryButton } from '@fluentui/react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { MdDelete,MdRemoveRedEye} from "react-icons/md";
import {CiEdit} from "react-icons/ci";

const View = () => {

    const [data, setData] = useState<any>();

    const getData = async () => {
        try{
        const url="http://localhost:5000/data";
        const result: any = await axios.get(url);
        setData(result.data)}
        catch(error){
            console.log(error)
        }
    }

    const deleteRequest=async (id: any) => {
        try {
            const url = `http://localhost:5000/data/${id}`;
            const result: any = await axios.delete(url);
            getData();}
            catch(error){
                console.log(error)
            }
}
  useEffect(()=>{
    getData();
  },[])

  const coloums: IColumn[]=[
    {
        key: 'column1',
        name: 'Name',
        fieldName: 'name',
        minWidth:35,
        maxWidth:80,
        isResizable: true
    },
    {
        key: 'column2',
        name: 'Rollnumber',
        fieldName: 'rollnumber',
        minWidth:55,
        maxWidth:80,
        isResizable: true
    },
    {
        key: 'column3',
        name: 'English',
        fieldName: 'English',
        minWidth: 25,
        maxWidth:80,
        isResizable: true
    },
    {
        key: 'column4',
        name: 'Hindi',
        fieldName: 'Hindi',
        minWidth:25,
        maxWidth:80,
        isResizable: true
    },
    {
        key: 'column5',
        name: 'Science',
        fieldName: 'Science',
        minWidth:25,
        maxWidth:100,
        isResizable: true
    },
    {
        key: 'column6',
        name: 'Social',
        fieldName: 'Social',
        minWidth:25,
        maxWidth:80,
        isResizable: true
    },
    {
        key: 'column7',
        name: 'Activities',
        fieldName: 'Activities',
        minWidth:25,
        maxWidth:80,
        isResizable: true
    },
    {
        key: 'column8',
        name: 'Totalmarks',
        fieldName: 'Totalmarks',
        minWidth:25,
        maxWidth:80,
        isResizable: true
    },
    {
        key: 'column9',
        name: 'Controls',
        fieldName: 'id',
        minWidth:30,
        maxWidth:80,
        isResizable: true,
        onRender:(item:any)=> (
            item.id &&
            <>
             <Link className='btn' to={`/view/${item.id}`}><MdRemoveRedEye size={20}/></Link>
             <Link className='btn' to={`/update/${item.id}`}><CiEdit size={20}/></Link>
             <Link className='btn' onClick={()=>deleteRequest(item.id)} to=''><MdDelete size={20}/></Link>
            </>
        )
            
        }
    
]
    return (
        <>
        <Link className='btn' to="/Create"><PrimaryButton className='btn__add'>Add</PrimaryButton></Link>
        
        <div className='detaillist'>
       
           {data &&
           <DetailsList
           items={data}
          columns={coloums}
           setKey="set"
         layoutMode={DetailsListLayoutMode.justified}
          /> }
        </div>
        </>
    )

  


}
export default View