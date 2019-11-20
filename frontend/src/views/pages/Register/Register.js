import React, { Component, useState,useEffect } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Label} from 'reactstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useForm from 'react-hook-form';
import { Redirect } from 'react-router-dom'
import { tsPropertySignature } from '@babel/types';

function Register() {
  const { register, handleSubmit, errors ,setValue} = useForm(); // initialise the hook
  const onSubmit = async(data) => {
  
    
     await fetch(`http://localhost:3000/user/signup`,{
       method : 'POST',
       body: JSON.stringify(data),
       headers: {
         "Content-Type": "application/json"
       }
     }).then(res => res.json())
       .then(json => {
         alert(JSON.stringify(json.message, null));
         window.location.replace("/");
        });
  };
 
  const [startDate, setStartDate] = useState(new Date());

  const hanleChange = date => {
    //const tt = date.format();
    setStartDate(date);
    //alert(startDate)
    setValue("dueDate", date);
  };

  useEffect(() => {
    register({ name: "dueDate" });
  }, []);
  

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="name" placeholder="Username" autoComplete="username" innerRef={register({ required: true })} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="email" placeholder="Email" autoComplete="email" innerRef={register({ required: true })} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="phoneNo" placeholder="Phone_No" autoComplete="phoneNo" innerRef={register({ required: true })}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="age" placeholder="Age" autoComplete="age" innerRef={register({ required: true })}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="password" placeholder="Password" autoComplete="new-password" innerRef={register({ required: true })}/>
                    </InputGroup>
                    <Button color="success" >Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default Register;