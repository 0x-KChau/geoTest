import React from 'react'

import GeoForm from '../ui/geoForm'

export default class FrontPage extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div className="boxed-view">
        <div className="boxed-view__box">
          <GeoForm />
        </div>
      </div>
    )
  }
}
