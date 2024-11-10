import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name :'noor'
      }
      console.log("LifeCycleB Constructor")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB getDerivedStareFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }
  render() {
    console.log("LifeCycleRender")
    return (
       
      <div> LifeCycleB</div>
      
      
    )
  }
}

export default LifeCycleB
