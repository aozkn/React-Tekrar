import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { MdDelete } from "react-icons/md";
const AppointmentList = ({ apps, setApps }) => {
  const handleDelete = (id) => {
    setApps(apps.filter((item) => item.id !== id));
  };

  const handleDoubleClick = (id) => {
    setApps(apps.map((item) =>
        item.id == id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };
  console.log(apps);
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {apps.length < 1 && (
        <img width="70%" src="./img/appointment.jpg" alt="img" />
      )}
      {apps.map(({ id, patient, consulted, day, doctor }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
          onDoubleClick={()=>handleDoubleClick(id)}
        >
          <Row className="justify-content-center align-items-center">
            <Col xs={12} sm={12} md={6}>
              <h4>{patient}</h4>
              <h4>{doctor}</h4>
            </Col>
            <Col>
              <h5>{day}</h5>
            </Col>
            <Col className="text-end">
              <MdDelete
                type="button"
                className="text-danger fs-1"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
