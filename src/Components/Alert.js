import React from 'react'

export default function Alert(props) {
    function Capitalize(text)
    {  
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
  return (
         <div className="my-3" style={{'height':'100px'}}>
         { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx-4`} role="alert">
               <strong>{Capitalize(props.alert.type)}</strong> &nbsp; &nbsp;  &nbsp; {props.alert.message}
               {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
          </div>}
         </div>
  )
}
