import React from "react";
import { Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
  const { id, name, image, bio, degrees, speciality, rating, office } = doctor;
  return (
    <Col xs={12} md={6}>
      <div className="card-box">
        <div className="pattern">
          <div className="pattern-1"></div>
          <div className="pattern-2"></div>
        </div>
        <figure className="image-box">
          <img src={image} alt="doctor" loading="lazy" />
        </figure>
        <div className="content-box">
          <ul className="name-box">
            <li className="name">
              <h3>
                <NavLink to={`/doctor/${id}`}>{name}</NavLink>
              </h3>
            </li>
            <li>
              <i className="bi bi-patch-check text-main"></i>
            </li>
            <li>
              <i className="bi bi-shield-check text-warning"></i>
            </li>
          </ul>
          <p className="designation">
            {degrees} - {speciality}
          </p>
          <div className="text">
            <p>{bio}</p>
          </div>
          <p>
            <i className="bi bi-geo-alt-fill text-danger" aria-hidden="true"></i>&nbsp;{office}
          </p>

          <div className="d-flex justify-content-between align-items-center">
            <p className="rating d-flex">
              <i className="bi bi-star-fill text-warning me-1"></i>

              <span> {rating}</span>
            </p>

            <NavLink to={`/doctor/${id}`} className="ms-auto">
              <Button variant="outline" className="rounded-pill btn-main mt-2">
                Make Appointment &nbsp;
                <i className="bi bi-calendar2-day"></i>
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default DoctorCard;
