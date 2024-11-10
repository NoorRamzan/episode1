import React ,{Component} from 'react'

class Greet extends Component() {
  constructor(props){
    super(props)
    this.state= {
      greet : 'welcome visitor'
    }
  }
    render(){
  return (
    <div>
         <h1>{this.state.greet}</h1>
    </div>
  )
}
}
export default  Greet;
