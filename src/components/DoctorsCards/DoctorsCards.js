import { Button, Container, Row } from "react-bootstrap";
import useDoctorList from "../../hooks/useDoctorList";
import DoctorCard from "../DoctorCard/DoctorCard";

const DoctorsCards = (props) => {
  const [doctors] = useDoctorList();

  const limit = props.home ? 6 : doctors.length;
  return (
    <Container>
      <Row>
        {doctors.slice(0, limit).map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorsCards;
