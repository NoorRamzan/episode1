import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name :'noor'
      }
      console.log("LifeCycleA Constructor")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getDerivedStareFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }
  render() {
    console.log("LifeCycleRender")
    return (
        <div>
      <div> LifeCycleA </div>
      <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA
