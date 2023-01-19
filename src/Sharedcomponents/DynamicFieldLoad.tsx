import TextFieldForm from "./TextFieldForm";
import React from 'react'

const DynamicFieldLoad = (fieldName:String,item:any) => {
 switch(fieldName){
  case "TextFieldForm":
    return<TextFieldForm {...item}/>
  default:
    return 'component missing'
 }
}

export default DynamicFieldLoad