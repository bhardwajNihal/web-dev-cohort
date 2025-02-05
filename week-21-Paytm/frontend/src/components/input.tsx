interface inputProp{
    type: "text" | "password"
}

export function InputComponent(prop:inputProp){
    

    return <input type="text" />
}