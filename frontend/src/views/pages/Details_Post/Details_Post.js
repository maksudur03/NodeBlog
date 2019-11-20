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
import Rating from '@material-ui/lab/Rating';
import { parse } from 'url';

class Details_Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            ratings : 0,
            finalCount : 0
            
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.postRating = this.postRating.bind(this);

    }

    async postRating(event) {

        const currentRating = this.state.ratings;
        const currentCount = 1;
        const previousRating = this.state.data.rating;
        const previousCount = this.state.data.ratingCount;
        let  finalCount = parseFloat(currentCount) +parseFloat( previousCount);     
        let finalRating = parseFloat((( parseFloat( currentRating) + parseFloat(previousRating)) / parseFloat(finalCount)));
        
        
         

        let data = [{
            'propName' : "rating",
            'value' : finalRating
          },
          {
            'propName' : "ratingCount",
            'value' : finalCount 
          }
        ];
       
  
        await fetch(`http://localhost:3000/post/`+this.state.data._id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
              }
        }).then(res => res.json())
        .then(json => {
          alert("Thanks for rating...!!");
          window.location.replace("/");
         });
       }
  

    handleChange(event){
        const target = event.target;
        const ratings = target.value;
        this.setState({ratings});
        console.log(ratings);
        
      }
    async componentDidMount() {
        const { data } = this.props.location.state;
        console.log(data);
        this.setState({ data });
    }
    render() {
        return (
            <div className="animated fadeIn" key={Math.random()}>
                <Card>
                    <CardHeader className="text-center text-md-center">  News Feed  </CardHeader>
                    <CardBody>
                        <div>
                            <h4>Posted by:  {this.state.data.userName}</h4>
                        </div>
                        <div>
                            <div>{this.state.data.content}</div>
                        </div>
                    </CardBody>
                    <CardFooter>
                     <div>
                         <p>Overall rating: {(this.state.data.rating)}/5</p>
                     </div>   
                    <div>
                    <h6>Rate this Post</h6>
                    <div>
                            <Rating name="size-large" value={this.state.ratings} size="large" onChange={this.handleChange}/>
                            
                    </div>
                    <div>
                    <Button color="primary" className="px-4" onClick={this.postRating}>Submit</Button>
                    </div>
                    </div>
                    </CardFooter>
                </Card>
                
            </div>
        );
    }
} export default Details_Post;