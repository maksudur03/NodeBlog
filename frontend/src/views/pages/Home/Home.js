import React, { Component, lazy, Suspense } from "react";
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


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0,
      cardData : [] ,
      temp : null,
      isLoading : false
    };
  }

  async componentDidMount(){
    this.setState({isLoading:true});
    await fetch(`http://localhost:3000/post/`)
    .then(res => res.json())
    .then(json => { 
        let cardData = json; 
        this.setState({cardData});
         console.log(cardData);
  
    })
  }

  render() {
  
    const { activeIndex } = this.state;
    var {cardData} = this.state;


    return (
      
      <div className="animated fadeIn">
 
       {/* ==============Others people experience area===================== */}
        <Card>
        <CardHeader className="text-center text-md-center">  News Feed  </CardHeader>
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
              <div><p>Rating: {(forEach.rating).toFixed(2)}/5</p></div>
              <div> <h5> {forEach.title} </h5></div>
              <div>{forEach.content}</div>
            </CardBody>
            <CardFooter>
            <Link to={{ pathname: '/details_post',  state: { key: forEach.id, data: forEach} }}>Continue reading ...</Link>
            {/* <NavLink to="/details_post" className="nav-link" >Home</NavLink> */}
            </CardFooter>
            </Card>
            
          </Col>

          )
      }
      </Row>
      </CardBody>
      </Card>
      {/* ============== End area ===================== */}
      </div>
    );
  }
}
export default Home;
