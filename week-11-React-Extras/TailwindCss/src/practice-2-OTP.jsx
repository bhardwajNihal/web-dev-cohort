import { useRef, useState } from "react"


export function OtpComponent(){

    const [disabled, setDisabled] = useState(true)

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()
    const submitref = useRef()

    const refs = [ref1,ref2,ref3,ref4,ref5,ref6]

    function handleforward(index){
        if(index < refs.length){
            refs[index+1].current.focus()
        }
    }

    function handlebackward(index){
        refs[index-1].current.value = ''        //it just somehow worked, know a little
        refs[index].current.value = ''
        
        if(index > 0) {
            refs[index-1].current.focus()
        }
    }
    function handleSubmit(){
        if(refs.every(refval => refval.current.value !== '')
        ) setDisabled(false)    
        
    }   
 
    return <div className="h-svh w-full bg-slate-900 flex flex-col justify-center items-center gap-2">
        <h3 className="text-white font-normal text-2xl mb-8">Enter otp</h3>
        <div> 
        {
            refs.map((refval,index)=>{
                return <input type="text" 
                key={index}
                ref={refval}
                onChange={()=> (index===refs.length-1) ? handleSubmit() : handleforward(index)}
                onKeyDown={(e)=>{if(e.key ==='Backspace') handlebackward(index)}}
                className="bg-slate-700 h-10 w-10 rounded-lg m-1 pl-2 text-white" />
            })  
        }

        </div>

        <input ref={submitref} onClick={()=>alert('otp submitted!\n logged in')} disabled={disabled} className=" px-6 py-1 mt-8 rounded cursor-pointer" type="submit" style={{backgroundColor :(disabled)? "gray" : "cyan"}}/>
        
    </div>
}