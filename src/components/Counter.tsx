import {useState} from 'react'
import classes from './Counter.module.scss'

function Counter() {
  const [count, setcount] = useState(0)

  const increment = () => {
    setcount(count+1)
  }

  return (
    <>
    <h3>{count}</h3>
    <button className={classes.btn} onClick={increment}>+</button>
    </>
  )
}

export default Counter