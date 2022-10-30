import React, { useEffect, useState } from "react";
import { ReactComponent as BasketballIcon } from "../../assets/icons/sports-basketball.svg";
import { ReactComponent as SwimmingIcon } from "../../assets/icons/sports-swimming.svg";
import { ReactComponent as TennisIcon } from "../../assets/icons/sports-tennis.svg";
import { ReactComponent as BilliardIcon } from "../../assets/icons/sports-billiards.svg";
import { ReactComponent as GolfIcon } from "../../assets/icons/sports-golf.svg";
import { ReactComponent as FootballIcon } from "../../assets/icons/sports-soccer.svg";
import { ReactComponent as BaseballIcon } from "../../assets/icons/sports-baseball.svg";
import { ReactComponent as VolleyballIcon } from "../../assets/icons/sports-volleyball.svg";
import { ReactComponent as GymIcon } from "../../assets/icons/sports-bodybuilding.svg";
import { ReactComponent as BadmintonIcon } from "../../assets/icons/sports-badminton.svg";
import { ReactComponent as TableTennisIcon } from "../../assets/icons/sports-table-tennis.svg";
import { ReactComponent as DartsIcon } from "../../assets/icons/sports-darts.svg";
import { ReactComponent as ArcheryIcon } from "../../assets/icons/sports-archery.svg";
import { ReactComponent as SkatingIcon } from "../../assets/icons/sports-skating.svg";
import { ReactComponent as AllIcon } from "../../assets/icons/8725478_apps_icon.svg";
import { ReactComponent as ComputerIcon } from "../../assets/icons/3643757_computer_desktop_monitor_pc_personal_icon.svg";
import axios from 'axios';
import { Link } from "react-router-dom";
import './LandingPage.scss';
const categoryArr = [
  {"title":"All sports", "image": AllIcon}, 
  {"title":"Basketball", "image": BasketballIcon}, 
  {"title":"Billiards", "image": BilliardIcon}, 
  {"title":"Tennis", "image": TennisIcon},
  {"title":"Swimming", "image": SwimmingIcon},
  {"title":"Golf", "image": GolfIcon}, 
  {"title":"Soccer", "image": FootballIcon},
  {"title":"Baseball", "image": BaseballIcon},
  {"title":"Volleyball", "image": VolleyballIcon},
  {"title":"Bodybuilding", "image": GymIcon},
  {"title":"Badminton", "image": BadmintonIcon},
  {"title":"Table Tennis", "image": TableTennisIcon},
  {"title":"Darts", "image": DartsIcon},
  {"title":"Archery", "image": ArcheryIcon},
  {"title":"Ice Skating", "image": SkatingIcon},
  {"title":"E Sports", "image": ComputerIcon},
]
const categoryData = ["Basketball", "American Football", "Soccer", "Tennis", "Swimming", "Baseball", "Volleyball", "Table Tennis", "Badminton", "Surfing", "Golf", "Track", "Sailing", "e-Sports"]

const LandingPage = ({data = categoryData}) => {
  const [items, setItems] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
    getItems();
    getExperiences();
  }, [])
  
  const getItems = () => {
    axios.get('/items')
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
  }

  const getExperiences = () => {
    axios.get('/experiences')
      .then((res) => {
        setExperiences(res.data);
        console.log(res.data);
      })
  }

  return (
    <main className="home-container">
      <div className="home-wrapper">
        <section className="home-banner">
          <Link to="/experiences">
            <div className="banner-side left">
              <div className="center-text">
                <p>Browse Experiences</p>
                <h2>Browse unique experiences hosted by our users</h2>
              </div>
            </div>
          </Link>
          <Link to="/spaces">
            <div className="banner-center">
              <div className="center-text">
                <p>Browse Spaces</p>
                <h2>Browse our collection of sports spaces <br/>hosted by our users</h2>
              </div>
            </div>
          </Link>
          <Link to="/groups">
            <div className="banner-side right">
              <div className="center-text">
                <p>Browse Groups</p>
                <h2>Browse groups created by other users</h2>
              </div>
            </div>
          </Link>
          
        </section>
        <ul className="items-category">
          {
            categoryArr.map((category, index) => (
              <li className="category-item">
                <button className="item-content">
                  {<category.image/>}
                  <p>{category.title}</p>
                </button>
              </li>
            ))
          }
        </ul>
        <section className="popular-section">
          <h2>Currently popular courts in Japan</h2>
          <div className="popular-items">
            {
              items.slice(0,6).map((court, index) => (
                <Link to={`/spaces/${court._id}`}>
                  <div className="item">
                    <img src={court.image} className="item-image" alt=""/>
                    <div className="item-heading">
                      <p>{court.title}</p>
                    </div>
                    <p className="item-location">{court.location}</p>
                    <div className="item-price">
                      <p className="price-bold">{`From ${court.price} `}</p>
                      <p>{" / hour"}</p>
                    </div>
                  </div>
                </Link>
                
              ))
            }
          </div>
        </section>
        <section className="popular-section">
          <h2>Currently popular experiences in Japan</h2>
          <div className="popular-items">
          {
            experiences.slice(0,6).map((exp, index) => (
              <Link to={`/experiences/${exp._id}`} state={{experience: exp}}>
                <div className="item">
                  <img src={exp.image} className="item-image" alt=""/>
                  <div className="item-heading">
                    <p>{exp.title}</p>
                  </div>
                  <p className="item-location">{exp.location}</p>
                  <div className="item-price">
                    <p className="price-bold">{`From ${exp.price} `}</p>
                    <p>{" / hour"}</p>
                  </div>
                </div>
              </Link>
              
            ))
          }
          </div>
        </section>
      </div>
      
    </main>
  )
}

export default LandingPage;
