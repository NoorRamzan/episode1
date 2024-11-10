import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
// short circuit method
   return this.state.isLoggedIn && <div>Welcome Noor</div>


     // ternery operator method
   // return this.state.isLoggedIn ? (<div>welcome noor</div>) : (<div>welcome Guest</div>)

    //  element method
    // let method
    // if(this.state.isLoggedIn){
    //     method = <div>welcome Noor</div>
    // }else{
    //     method = <div>Welcome guest</div>
    // }
    // return  method

    // if else
    //  if(this.state.isLoggedIn){
    //     return  <div>Welcome Noor</div>
    //  }else{
    //     return  <div>Welcome guest</div>
    //  }
  }
    // return (
    //   <div>
    //     <div>Welcome Noor</div>
    //     <div>Welcome guest</div>

    //   </div>
    // )
 
}

export default UserGreeting
