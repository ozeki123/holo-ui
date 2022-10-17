import React from "react";
import { Link } from "react-router-dom";
import "./ExperienceList.scss";
import { ReactComponent as BasketballIcon } from "../../../assets/icons/sports-basketball.svg";
import { ReactComponent as SwimmingIcon } from "../../../assets/icons/sports-swimming.svg";
import { ReactComponent as TennisIcon } from "../../../assets/icons/sports-tennis.svg";
import { ReactComponent as BilliardIcon } from "../../../assets/icons/sports-billiards.svg";
import { ReactComponent as GolfIcon } from "../../../assets/icons/sports-golf.svg";
import { ReactComponent as FootballIcon } from "../../../assets/icons/sports-soccer.svg";
import { ReactComponent as BaseballIcon } from "../../../assets/icons/sports-baseball.svg";
import { ReactComponent as VolleyballIcon } from "../../../assets/icons/sports-volleyball.svg";
import { ReactComponent as GymIcon } from "../../../assets/icons/sports-bodybuilding.svg";
import { ReactComponent as BadmintonIcon } from "../../../assets/icons/sports-badminton.svg";
import { ReactComponent as TableTennisIcon } from "../../../assets/icons/sports-table-tennis.svg";
import { ReactComponent as DartsIcon } from "../../../assets/icons/sports-darts.svg";
import { ReactComponent as ArcheryIcon } from "../../../assets/icons/sports-archery.svg";
import { ReactComponent as SkatingIcon } from "../../../assets/icons/sports-skating.svg";
import { ReactComponent as AllIcon } from "../../../assets/icons/8725478_apps_icon.svg";
import { ReactComponent as ComputerIcon } from "../../../assets/icons/3643757_computer_desktop_monitor_pc_personal_icon.svg";
import Experience from "../Experience/Experience";

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

const ExperienceList = ({ experiences }) => {
  return (
    <div className="items-container">
        <main className="items-content">
          <section className="items-section">
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
            <div className="item-results">
              {
                experiences.map((experience) => {
                  return(
                    <Link to={`/experiences/${experience._id}`} state={{experience: experience}}>
                      <div key={experience._id} className="item-space">
                        <div className="item-image">
                          <img src={experience.image}/>
                          <div className="price-tag">
                            <p>{`¥${experience.price}`}</p>
                          </div>
                          
                        </div>
                        
                          <Experience experience={experience} id={experience._id} title={experience.title} price={experience.price}/>
                        
                      </div>
                    </Link>
                  )
                })
              }
            </div>
              
          </section>
        </main>
    </div>
  )
}

export default ExperienceList