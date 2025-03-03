// defining a custom input 

interface inputProps{
    type:string;
    placeholder:string;
}

export function TextInput({type,placeholder}:inputProps){

    return <input
    style={{padding:"8px", fontSize:"large", border:"solid 2px green"}}
    type={type} placeholder={placeholder} />
}