import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helper/data";
const Home = () => {
  const [appointment, setAppointment] = useState(appointmentData);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors setApps={setAppointment} apps={appointment} />
      <AppointmentList apps={appointment} setApps={setAppointment}/>
    </main>
  );
};

export default Home;
