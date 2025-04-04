import React from 'react'

function Forminput({name,type,label}) {
  return (
    <fieldset className="fieldset">
    <legend className="fieldset-legend">{label}</legend>
    <input
     type={type}
     className="input w-full" 
     name={name}
     placeholder="type here" required />
     
    </fieldset>
  )
}

export default Forminput
