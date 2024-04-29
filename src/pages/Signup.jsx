import { Footer } from "../components/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TopNav } from "../components/TopNav.jsx";
import { CUstomInput } from "../components/CUstomInput.jsx";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: null,
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const [form, setForm] = useState({ initialState });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputs = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "****",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmpassword",
      type: "password",
      placeholder: "****",
      required: true,
    },
  ];
  return (
    <>
      <TopNav />

      <Container className="main" fluid>
        <Row>
          <Col
            md={6}
            className="bg-danger vh-md-100 p-5 d-flex justify-content-center align-items-center"
          >
            <div className="text-white shadow-lg rounded p-3 ">
              <h1>Join our community</h1>
              <p>Simply track your transactions</p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="shadow-lg rounded border w-75 p-5 mt-5 mb-5">
              <h2>Signup now</h2>
              <hr />
              <Form onSubmit={handleOnSubmit}>
                {inputs.map((item, i) => (
                  <CUstomInput key={i} {...item} onChange={handleOnChange} />
                ))}

                <div className="d-grid">
                  <Button type="submit" variant="primary">
                    SignUp Now
                  </Button>
                </div>
              </Form>

              <div className="text-end mt-3">
                Already have an account? <a href="/"> Login</a> Now
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
