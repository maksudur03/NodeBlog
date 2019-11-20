import React, { Component } from 'react';
import DefaultLayout from '../../../containers/DefaultLayout/DefaultLayout';
import {
    Carousel,
    CarouselItem,
    Col, 
    Row,
    Card,
    CardBody,
    CarouselCaption,
    CardHeader,
    CarouselIndicators,
    CarouselControl,
    Button,
    CardFooter
  } from "reactstrap";

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            userData : []
        }
       
    } 

    async componentDidMount(){
        this.setState({isLoading:true});
        const user = JSON.parse(localStorage.getItem('user'));
        await fetch(`http://localhost:3000/user/`+user.userId)
        .then(res => res.json())
        .then(json => { 
            let userData = json; 
            this.setState({userData});
             console.log(userData);
      
        })
      }

    render() {
        return(
        <div className="animated fadeIn">
            <Card>
             <CardHeader>
                 <h5>Profile</h5>
             </CardHeader>
             <CardBody>
                 <h6>Name: {this.state.userData.name}</h6>
                 <h6>Age: {this.state.userData.age}</h6>
                 <h6>Email: {this.state.userData.email}</h6>
                 <h6>Contact No: {this.state.userData.phoneNo}</h6>
             </CardBody>
            </Card>
            </div>
        );
    }
} export default Profile;