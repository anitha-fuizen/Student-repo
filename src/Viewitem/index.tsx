
import { PrimaryButton } from '@fluentui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { DetailsList, DetailsListLayoutMode, IColumn,IDetailsRow PrimaryButton } from '@fluentui/react';
import { Link } from 'react-router-dom';

const Viewitem = () => {

  const [data, setData] = useState<any>()
  const id = useParams();
  const getData = async (item: any) => {
    try {
      const url = `http://localhost:5000/data/${item.id}`
      const result: any = await axios.get(url)
      setData(result.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData(id)
  }, [id])

  // const coloums: IColumn[]=[
  //   {
  //       key: 'column1',
  //       name: 'Name',
  //       fieldName: 'name',
  //       minWidth:35,
  //       maxWidth:70,
  //       isResizable: true
  //   },
  //   {
  //       key: 'column2',
  //       name: 'rollnumber',
  //       fieldName: 'rollnumber',
  //       minWidth:55,
  //       maxWidth:80,
  //       isResizable: true
  //   },
  // ]
  return (
    <>
      <div>
        {data &&
          <table>
            <tr>
              <th>Name</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Roll number</th>
              <td>{data.rollnumber}</td>
            </tr>
            <tr>
              <th>English</th>
              <td>{data.English}</td>
            </tr>
            <tr>
              <th>Telugu</th>
              <td>{data.Telugu}</td>
            </tr>
            <tr>
              <th>Hindi</th>
              <td>{data.Hindi}</td>
            </tr>
            <tr>
              <th>Science</th>
              <td>{data.Science}</td>
            </tr>
            <tr>
              <th>Social</th>
              <td>{data.Social}</td>
            </tr>
            <tr>
              <th>Activities</th>
              <td>{data.Activities}</td>
            </tr>
            <tr>
              <th>Totalmarks</th>
              <td>{data.Totalmarks}</td>
            </tr>

            {/* <h3>{JSON.stringify(data)}</h3> */}
          </table>

        }
      </div>
      <Link className='btn' to="/View"><PrimaryButton className='btn__back'>Back</PrimaryButton></Link>
    </>
  )
}

export default Viewitem