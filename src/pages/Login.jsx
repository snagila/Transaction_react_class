// import Container from "react-bootstrap/esm/Container.js"; (This is the production way of importing from react-bootstrap)
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TopNav } from "../components/TopNav.jsx";
import { CUstomInput } from "../components/CUstomInput.jsx";
import { Footer } from "../components/Footer.jsx";

const Login = () => {
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "****",
      required: true,
    },
  ];
  return (
    <div>
      <TopNav />
      <Container fluid>
        <Row className="main">
          <Col
            md={6}
            className="bg-primary p-5 d-flex justify-content-center align-items-center main h-110"
          >
            <div className="text-white shadow-lg rounded p-3 ">
              <h1>Welcome back</h1>
              <p>Login and take control of your finance</p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="shadow-lg p-3 rounded border w-75 p-5 mt-5 mb-5">
              <h2>Login now</h2>
              <hr />
              <Form>
                {inputs.map((item, i) => (
                  <CUstomInput key={i} {...item} />
                ))}
                <div className="d-grid">
                  <Button variant="primary">Login Now</Button>
                </div>
              </Form>
              <div className="text-end mt-3">
                Are you new? <a href="/signup">Signup</a> Now
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Login;
