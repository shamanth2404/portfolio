import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const ToggleButton = ({open , setOpen}) => {
  return (
    <button onClick={() => setOpen((prev)=>!prev)}>
      {open ? <IoCloseSharp /> : <FaBars />  }
    </button>
  )
}

export default ToggleButton
