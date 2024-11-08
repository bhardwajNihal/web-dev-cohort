import { useForm } from 'react-hook-form'

function App() {

  return (
    <>
    <FormComponent/>
   </>
  )
}

function FormComponent(){

//initializing the useForm hook
const{
  register,
  handleSubmit,
  watch,
  formState : {errors, isSubmitting}
} = useForm()

async function submitForm(data){
  // Simulating an api call, defining a promise that resolves after some time
  await new Promise((resolve,reject) => setTimeout(resolve,3000))
  console.log(data);
}

  return <div style={{textAlign:"center", border:"solid 1px gray", padding:30, borderRadius:10}}>
    
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <input type="text" placeholder='Firstname...' style={{padding:6, margin:4}}
        {...register('firstname',             //linking the field with the form
          {required : 'This field is required',  //adding validation
           minLength:{value:3, message:'Minimum 3 characters are required'},
           pattern : {
            value : /^[A-Za-z]+$/i,
            message : "invalid input"
          }
          })                 
        }              
        />
        {/* conditionally rendering the error message, for navigation */}
        {errors.firstname && <p style={{fontSize:10, margin: -3, textAlign:"start", marginLeft:5, color:"red" }}>{errors.firstname.message}</p>}
      </div>

      <div>
      <input type="text" placeholder='Lastname...' style={{padding:6, margin:4}}
      {...register('lastname',
        {required : 'this field is required', 
          minLength:{value :3, message : 'Minimum 3 characters are required'},
          pattern : {
            value : /^[A-Za-z]+$/i,
            message : "invalid input"
          }
        }
      )}
        />
        {errors.lastname && <p style={{fontSize:10, margin: -3, textAlign:"start", marginLeft:5, color:"red" }}>{errors.lastname.message}</p>}
      </div>

      <div>
      <input type="password" placeholder='Password...' style={{padding:6, margin:4}}
      {...register('password',
        { required : 'this field is required',
          minLength : {value : 6, message : "password must be 6 characters"},
          pattern : {value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/, message: 'password must contain 1 uppercase, 1 lowercase and 1 special character'}
        },  
      )}
      />
      {errors.password && <p style={{fontSize:10, margin: -3, textAlign:"start", marginLeft:5, color:"red" }}>{errors.password.message}</p>}
      </div>

      <div><input disabled={isSubmitting} value={(isSubmitting) ? "submitting" : "submit"} type="submit" style={{padding:6,marginTop:10,backgroundColor:"darkcyan", borderRadius:5, border:"none"}}/></div>
    </form>
  </div>
}



export default App
  