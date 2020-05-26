import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Form,
  FormControl,
  FormCheck,
  FormGroup
} from "react-bootstrap";

export default function App() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container fluid>
      <Row style={{ minHeight: "100vh" }}>
        <Col
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            backgroundColor: "white",
            backgroundImage:
              "linear-gradient(#2d3742c9, #007affc9), url(./images/bg.jpg)",
            backgroundSize: "cover"
          }}
        >
          <div className="d-flex justify-content-center text-center" />
          <h4 className="text-white">Create Account</h4>
          <p className="text-white">Enter your information to sign up</p>
          <Card
            bg="dark"
            text="white"
            className="text-center card-form shadow rounded"
          >
            <Form
              className="p-4 shadow rounded"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <FormGroup>
                <Form.Row>
                  <Col>
                    <Form.Label htmlFor="firstNameInput">First Name</Form.Label>
                    <FormControl
                      id="firstNameInput"
                      type="text"
                      size="sm"
                      name="firstName"
                      required
                    />
                    <FormControl.Feedback type="invalid">
                      Please enter your first name
                    </FormControl.Feedback>
                  </Col>
                  <Col>
                    <Form.Label htmlFor="lastNameInput">Last Name</Form.Label>
                    <FormControl
                      id="lastNameInput"
                      type="text"
                      size="sm"
                      name="lastName"
                      required
                    />
                    <FormControl.Feedback type="invalid">
                      Please enter your last name
                    </FormControl.Feedback>
                  </Col>
                </Form.Row>
              </FormGroup>
              <FormGroup>
                <Form.Label htmlFor="emailInput">Email Address</Form.Label>
                <FormControl
                  id="emailInput"
                  type="email"
                  name="email"
                  required
                />
                <FormControl.Feedback type="invalid">
                  Please enter in a valid email address
                </FormControl.Feedback>
              </FormGroup>
              <FormGroup>
                <Form.Row>
                  <Col>
                    <Form.Label htmlFor="passwordInput">Password</Form.Label>
                    <FormControl
                      id="passwordInput"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      type="password"
                      size="sm"
                      name="password"
                      required
                    />
                    <FormControl.Feedback type="invalid">
                      Invalid
                      <Button
                        variant="link"
                        className="p-1 align-items-center"
                        style={{
                          textDecoration: "none",
                          color: "#dc3545",
                          fontSize: "98%"
                        }}
                      >
                        password
                      </Button>
                      type
                    </FormControl.Feedback>
                  </Col>
                  <Col>
                    <Form.Label htmlFor="confirmPasswordInput">
                      Confirm Password
                    </Form.Label>
                    <FormControl
                      id="confirmPasswordInput"
                      type="password"
                      size="sm"
                      name="confirmPassword"
                      required
                    />
                    <FormControl.Feedback type="invalid">
                      Your passwords do not match
                    </FormControl.Feedback>
                  </Col>
                </Form.Row>
              </FormGroup>
              <FormGroup>
                <div className="d-flex align-items-center">
                  <FormCheck className="p-1 mt-0 ml-3" id="agree2Terms" />
                  <FormCheck.Label htmlFor="agree2Terms">
                    I agree to the
                    <Button variant="link" className="p-1 m-0">
                      terms & conditions
                    </Button>
                  </FormCheck.Label>
                </div>
                <Button type="submit" variant="primary" block>
                  Submit
                </Button>
              </FormGroup>
              <FormGroup className="d-flex justify-content-between mb-0">
                <Button variant="link">← Log In</Button>
                <Button variant="link">Forgot Password</Button>
              </FormGroup>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
