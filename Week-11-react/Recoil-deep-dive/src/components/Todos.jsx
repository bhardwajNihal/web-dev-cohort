import { useRecoilValue } from "recoil";
import { TodosAtomFamily } from "../Store/atoms/atomFamily";

export function Todos({id}){            //gets id as prop

    const currentTodo = useRecoilValue(TodosAtomFamily(id))  //returns the todo with the specified id

    // finally rendered
    return <div>
        <h2 style={{fontWeight: "lighter"}}>{currentTodo.id}<span>.)</span> {currentTodo.title} - {(currentTodo.isDone) ? "done" : "Not done"}</h2>
    </div>

}