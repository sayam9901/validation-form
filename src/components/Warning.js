import React from 'react'
import ReactDOM from 'react-dom';
const Model = () =>{
    return  <div>Please fill both the field</div>
}

const Warning = () => {
  return (
   <>
 { ReactDOM.createPortal(<Model/>,document.getElementById("portal-root"))}
   </>
  )
}

export default Warning