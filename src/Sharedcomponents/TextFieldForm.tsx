
import {TextField} from "@fluentui/react"
import {Control,Controller,useFormContext} from 'react-hook-form'

  interface ITextFieldFormProps{
    name:string|number|any;
    typeOf?:string|number;
    label:string;
    isRequired?:boolean;
    control?:Control<any>;
    register?:any;
  }
   
  const TextFieldForm=({
    name,
    label,
    isRequired,
    typeOf
  }:
  ITextFieldFormProps) => {
    const { control, register } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name={name}
          render={({
            field,
            fieldState: { error, invalid, isTouched, isDirty },
          }) => {
            return (
              <>
                <div
                  className={
                    isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                  }
                > 
                  <TextField
                    type={typeOf === 'number'?"number":'text'}
                    label={label}
                    styles={{fieldGroup:{background:"rgb(237,237,237)", border:0}}}
                    {...field}
                    errorMessage={error ? error.message : ""}
                    className={
                      isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                    }
                />
            </div>
            </>
            )
          }}
        />
      </>
    )
  };
  
  export default TextFieldForm;
  