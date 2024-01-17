import Container from "react-bootstrap/Container";
import { doctorData } from "../helper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddModal from "./AddModal";
import { useState } from "react";
const Doctors = ({ apps, setApps }) => {
  const [show, setShow] = useState(false);
  const [drName, setDrName] = useState("");

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const handleImgClick = () => {
  //   setShow(true);
  // };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row className="justify-content-center">
        {doctorData.map(({ id, img, name, dep }) => (
          <Col key={id} xs={6} sm={4} md={3}>
            <img
              src={img}
              alt={name}
              onClick={() => {
                setDrName(name);
                setShow(true);
              }}
              className="img-thumbnail doctor-img"
            />
            <h4>{name}</h4>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal
        drName={drName}
        apps={apps}
        setApps={setApps}
        show={show}
        handleClose={() => setShow(false)}
      />
    </Container>
  );
};

export default Doctors;
