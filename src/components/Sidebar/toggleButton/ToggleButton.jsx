import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={() => setOpen((prev)=>!prev)}>
      {open ? <FaBars /> : <IoClose />  }
    </button>
  )
}

export default ToggleButton
