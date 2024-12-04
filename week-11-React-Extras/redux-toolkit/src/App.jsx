
import { useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './setup/2-slice'

function App() {
  
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <>
      <h2>react redux</h2>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default App
