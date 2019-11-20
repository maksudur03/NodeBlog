import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import useForm from 'react-hook-form';

function Login() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = async(data) => {
   
    var formdata = new FormData();

  //    formdata.append("user",new Blob([JSON.stringify(data)],
  //    {
  //     type: "application/json",
  //     processData: false, contentType: false, cache: false
  // }));
  
  await fetch(`http://localhost:3000/user/login`,{
    method : 'POST',
    body : JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      localStorage.setItem('user',JSON.stringify(response));
      var user = JSON.parse(localStorage.getItem('user'));
      alert("Logged In");
      window.location.replace("/");
    }
    ); 
  };
    

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="UserEmail" autoComplete="useremail" name="email" innerRef={register({ required: true })}/>
                        {errors.email && 'email required.'}

                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Password" autoComplete="current-password" name="password" innerRef={register({ required: true })} />
                        {errors.password && 'password is required.'}

                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Don't have an account? Create an account</p>
                      
                        <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                      
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }


export default Login;