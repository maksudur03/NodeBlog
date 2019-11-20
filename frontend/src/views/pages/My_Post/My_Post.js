import React, { Component } from 'react';
import DefaultLayout from '../../../containers/DefaultLayout/DefaultLayout';
import { Link,NavLink } from 'react-router-dom';
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
class My_Post extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data : [],
            cardData : []
        }
       
    }
    
    async componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({isLoading:true});
        await fetch(`http://localhost:3000/post/mypost/`+user.userId)
        .then(res => res.json())
        .then(json => { 
            let cardData = json; 
            this.setState({cardData});
             console.log(cardData);
      
        })
      }

    render() {
        return(
        <div className="animated fadeIn" key={Math.random()}>
              <Card>
        <CardHeader className="text-center text-md-center">  My Posts </CardHeader>
      <CardBody> 
      <Row>

      {
        this.state.cardData.map(forEach => 
          
          <Col xs="12" sm="6" md="3" key={forEach._id}>
            <Card key={Math.random()}>
            <CardHeader>
              {forEach.userName + " says: "}
            </CardHeader>
            <CardBody>
              <div> <h5> {forEach.title} </h5></div>
              <div dangerouslySetInnerHTML={ { __html: forEach.content.split(/(><)/)[0] } }></div>
            </CardBody>
            <CardFooter>
            <Link to={{ pathname: '/edit_post',  state: { key: forEach.id, data: forEach} }}>Edit</Link>
           
            </CardFooter>
            </Card>
            
          </Col>

          )
      }
      </Row>
      </CardBody>
      </Card>
            </div>
            );
    }
} export default My_Post;