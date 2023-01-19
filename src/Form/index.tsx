import react from 'react'
import { yupResolver } from "@hookform/resolvers/yup"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { PrimaryButton } from '@fluentui/react';
import DynamicFieldLoad from '../Sharedcomponents/DynamicFieldLoad';
import { STUDENT_FORM_ELEMENTS } from './helper';
import '../Form/form.scss'
import axios from 'axios'
import { useNavigate } from "react-router-dom";




const StudentForm = () => {
  interface IStudentData {
    name?: string;
    rollnumber?: number;
    English?: number;
    Hindi?: number;
    Science?: number;
    Social?: number;
    Activities?: number;
    Totalmarks?: number;
  }
  //schema decleration 
  const StudentSchema: yup.SchemaOf<IStudentData> = yup.object().shape({
    name: yup.string().required().min(5),
    rollnumber: yup.number().required(),
    English: yup.number().required().max(100),
    Hindi: yup.number().required().max(100),
    Science: yup.number().required().max(100),
    Social: yup.number().required().max(100),
    Activities: yup.number().required().max(100),
    Totalmarks: yup.number()

  });

  const StudentFormMethods = useForm<any>({
    mode: "all",
    resolver: async (data, context, options) => {
      return yupResolver(StudentSchema)(data, context, options)
    },

  });

  const [submitData, setSubmitData] = useState();
  const id = useParams();
  const navigation = useNavigate();
  const StudentFormSubmit: SubmitHandler<any> = async (
    data: any
  ) => {
    setSubmitData(data)
    if (id.id) {
      editForm(data);
    } else {
      createForm(data);
    }
    StudentFormMethods.reset({});
    navigation('/view')

  }

  const AdditionalProps = (item: any) => {
    item.control = StudentFormMethods.control;
    item.setValue = StudentFormMethods.setValue;
    item.register = StudentFormMethods.register;
    return item;
  };


  const [data, setData] = useState<any>();
  const getStudentData = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/data/${id.id}`);
      setData(result.data)
    }
    catch (error) {
      console.log(error)
    }
  };

  const editForm = async (updatedData: any) => {
    try {
      const result = await axios.put(`http://localhost:5000/data/${id.id}`, updatedData);
      setData(result.data);
    } catch (error) {
      console.log(error)
    }
  };

  const createForm = async (updatedData: any) => {
    const generateNumber: any = Math.random();
    const newData = { ...updatedData, 'id': generateNumber }
    try {
      const result = await axios.post(`http://localhost:5000/data`, newData)
      setData(result.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getStudentData()
  }, [id])

  useEffect(() => {
    data &&
      Object.entries(data).forEach(([key, value]: any) => {
        StudentFormMethods.setValue(key, value, { shouldValidate: true })
      })
  }, [data])
  console.log(StudentFormMethods.watch(), StudentFormMethods.formState.errors)


  return (
    <div className='form'>
    <div className='form__main'>
      <div className='form__header'>

        <h2>Student Marks</h2><hr></hr>
      </div>
      <FormProvider {...StudentFormMethods}>
        <form onSubmit={StudentFormMethods.handleSubmit(StudentFormSubmit)}>
          <div className='form__body'>
            {STUDENT_FORM_ELEMENTS?.map((rows: any) => {
              return (
                <div className={`rowthree ${rows.className}`}>
                  {rows.controls?.map((item: any) => {
                    const updatedItem = AdditionalProps(item);
                    return DynamicFieldLoad(item.type, updatedItem);
                  })}
                </div>
              )
            })}

          </div>
          <div className='form__footer'>
            <PrimaryButton type='submit'>submit</PrimaryButton>

          </div>
        </form>

      </FormProvider>
    </div>
    </div>
  )
}

export default StudentForm