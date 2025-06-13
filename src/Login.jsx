import React from 'react'
import { setFalse, setTrue, setvalue_data } from "./features/counter/counterSlice"
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from "./Dashboard"

const Login = () => {
  const dispatch = useDispatch()
  const check_value = useSelector(state => state.login.check)
  const array_Data = useSelector(state => state.login.arr)

  const handleLogin = () => {
    dispatch(setTrue())
  }

  const handleSetArray = () => {
    dispatch(setvalue_data([1, 2, 3, 4, 5]))
  }

  return (
    <div>
      <button onClick={handleLogin}>Click Me</button>
      <button onClick={handleSetArray}>Show Array</button>
      <div>Array: {JSON.stringify(array_Data)}</div>
      {check_value && <Dashboard />}
    </div>
  )
}

export default Login