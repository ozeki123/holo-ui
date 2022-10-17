import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Experiences.scss";
import ExperienceList from "./ExperienceList/ExperienceList";

export const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperiences();
  }, [])

  const getExperiences = () => {
    axios.get('/experiences')
      .then((res) => {
        console.log(res.data)
        setExperiences(res.data)
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <ExperienceList experiences={experiences}/>
    </div>
  )
}
