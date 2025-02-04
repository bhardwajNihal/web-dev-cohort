import { atomFamily } from "recoil";


const Todos = [
    { id: 1, title: 'Learn Recoil basics', isDone: false },
    { id: 2, title: 'Build a todo app', isDone: true },
    { id: 3, title: 'Review useRecoilState and useSetRecoilState', isDone: false },
    { id: 4, title: 'Practice Recoil selectors', isDone: true },
    { id: 5, title: 'Master Recoil immutability concepts', isDone: false },
  ];

// atomFamily : lets us dynamically create multiple atoms
// as here every todo needs to have its own atom
export const TodosAtomFamily = atomFamily({
    key : 'todosAtomFamily',
    default : (id) => {                             
        return Todos.find( todo => todo.id === id)
    }
})