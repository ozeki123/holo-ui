import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router';
import InputBorder from "../../InputBorder/InputBorder";
import TextArea from "../../TextAreaBorder/TextArea";
import "./GroupForm.scss";


export const GroupForm = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [data, setData] = useState({
    title: '',
    sport: '',
    image: '',
    skill: '',
    desc: '',
  });
  const categoryArr = [
    "American Football","Basketball", "Baseball", "Darts", 
    "Soccer", "Swimming", "Skating", "Volleyball"
  ]
  const navigate = useNavigate();

  const currentUser = sessionStorage.getItem('user');
  const handleSubmit = async (e) => {
    e.preventDefault();

    handleUpload();
  }

  const handleUpload = async () => {
    const cloudinaryData = new FormData();
    cloudinaryData.append("file", image);
    cloudinaryData.append("upload_preset", "holo_images");
    let link = "";
    
    try{
      const res = await axios.post("https://api.cloudinary.com/v1_1/dphadpunl/image/upload", cloudinaryData);
      link = res.data.secure_url
    } catch(err) {
      console.log(err)
    }

    try{
      axios.post("http://localhost:5000/groups", {
        title: data.title,
        sport: data.sport,
        skill: data.skill,
        description: data.desc,
        image: link
      })
      .then((res) => console.log(res))
    } catch(err){
      console.log(err);
    }
    console.log(data);
  }

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form className="group-form" onSubmit={handleSubmit}>
      <div className="group-input format">
        <p>1. Name</p>
        <InputBorder 
          id="title"
          label="Choose a group name" 
          placeholder="Enter group name"
          name="title"
          value={data.title}
          handleChange={handleChange}
        />
      </div>
      <div className="group-input format">
        <p>2. Sport</p>
        <InputBorder 
          id="sport"
          name="sport"
          label="Choose a primary sport" 
          placeholder="Choose a sport"
          value={data.sport}
          handleChange={handleChange}
        />
      </div>
      <div className="group-input format">
        <p>3. Skill</p>
        <InputBorder 
          id="skill"
          name="skill"
          label="Choose required skill level" 
          placeholder="Choose a skill level"
          value={data.skill}
          handleChange={handleChange}
        />
      </div>
      <div className="desc-input format">
        <p>4. Description</p>
        <TextArea
          id="desc" 
          name="desc"
          label="Group Description" 
          placeholder="Enter a brief description of your group"
          value={data.desc}
          handleChange={handleChange}
        />
      </div>
        <input 
        className="input-upload"
        type="file" 
        name="file" 
        accept="image/*" 
        onChange={(e) => setImage(e.target.files[0])}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
  )
}
