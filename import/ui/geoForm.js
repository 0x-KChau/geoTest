import React from 'react'
import Meteor from 'meteor/meteor'

export default class FrontPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      address: "",
      latitude: "Latitude",
      longitude: "Longitude",
      errMsg: false
    }
  }

  handleAddressChange(e){
    const address = e.target.value
    const encodedAddress = encodeURI(address)
    let latitude
    let longitude
    this.setState({address, errMsg:false})
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCBFeTapwu6gxLcxCiXuqKQ83-ER7pitP8`, {
    	method: 'get'
    }).then(function(response) {
    	return response.json();
    }).then(function(res) {
    	console.log(res, res.results[0].geometry.location.lat);
      latitude = res.results[0].geometry.location.lat
      longitude = res.results[0].geometry.location.lng
    }).catch(function(err) {
    	if(err)throw err
    });

    window.setTimeout(()=>{
      this.setState({latitude, longitude})
      if(latitude === undefined || longitude === undefined){
        this.setState({errMsg:true})
      }
    },500)
  }

  render(){
    return(
      <div>
        {this.state.errMsg?<p>No Latitude and Longitude Found</p>:undefined}
        <input type="text" className="" placeholder="Address" onChange={this.handleAddressChange.bind(this)} value={this.state.address} />
        <p style={{backgroundColor:"#dddddd"}}>{this.state.latitude?this.state.latitude:"Latitude"}</p>
        <p style={{backgroundColor:"#dddddd"}}>{this.state.longitude?this.state.longitude:"Longitude"}</p>
      </div>
    )
  }
}
