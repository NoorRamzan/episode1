


   
    import React from "react"
   const Message = props => { 
    console.log(props)
    return(
      <div>
   <h1>helo {props.name} a.k.a {props.heroName}</h1>
  {props.children}
  </div>
)
  
}
export default Message;






    