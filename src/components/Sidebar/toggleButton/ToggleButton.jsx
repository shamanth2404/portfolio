import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const ToggleButton = ({open , setOpen}) => {
  return (
    <button onClick={() => setOpen((prev)=>!prev)}>
      {open ? <IoClose /> : <FaBars />  }
    </button>
  )
}

export default ToggleButton
