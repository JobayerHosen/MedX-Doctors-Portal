import { useEffect, useState } from "react";

const useDoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/doctorsList.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return [doctors, setDoctors];
};

export default useDoctorList;
