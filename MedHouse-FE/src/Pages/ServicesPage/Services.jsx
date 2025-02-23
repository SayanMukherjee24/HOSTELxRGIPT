import "./services.css";
import ServicesCard from "./Subfiles/ServicesCard";
import NoticeCard from "./Subfiles/NoticeCard";
import serviceData from "./Subfiles/servicesData";
import noticeBoardData from "./Subfiles/noticeBoardData"
import { useState } from "react";

const Services = () => {

  const googleMapSites ={
    main:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.8878684345445!2d81.5053572754173!3d26.26530242703904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bad3814708b11%3A0x568133190375afc!2sRGIPT%20JAIS!5e0!3m2!1sen!2sin!4v1740175129909!5m2!1sen!2sin",
    Restaurants:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.8878684345445!2d81.5053572754173!3d26.26530242703904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bad3814708b11%3A0x568133190375afc!2sRGIPT%20JAIS!5e0!3m2!1sen!2sin!4v1740175129909!5m2!1sen!2sin",
    Cafe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.8878684345445!2d81.5053572754173!3d26.26530242703904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bad3814708b11%3A0x568133190375afc!2sRGIPT%20JAIS!5e0!3m2!1sen!2sin!4v1740175129909!5m2!1sen!2sin",
    Hospitals:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.8878684345445!2d81.5053572754173!3d26.26530242703904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bad3814708b11%3A0x568133190375afc!2sRGIPT%20JAIS!5e0!3m2!1sen!2sin!4v1740175129909!5m2!1sen!2sin",

  }

  const [googleMapLink, SetGoogleMapLink] = useState(googleMapSites["main"])
  
  const serviceList = serviceData.map(card =>
    <ServicesCard
    key={card.id}
    imgSrc={card.imgSrc}
    service={card.service}
    details={card.details}
    link={card.link}
    />
    );

  const noticeList = noticeBoardData.map(card =>
    <NoticeCard
    key={card.id}
    title = {card.title}
    description={card.description}
    link={card.link}
    />
    );


    

  return (
    <div className="services-page-container">
      {/* services section */}
      <h2 className="page-heading">Services</h2>
      <div className="card-container">{serviceList}</div>

      {/* notices section */}
      <h2 className="page-heading">Notice Board</h2>
      <div className="card-container">
        {noticeList}
        <div className="notice-card">
          <h2 style={{color:"#A1C4D4"}}>new notice</h2>
          <div className="box">
          <span className="material-icons-outlined">add</span>
          </div>
        </div>
      </div>
      <div className="googlemap-location">
      <iframe src= {googleMapLink}
              width="80%" 
              height="100%" 
              style={{border:"1px solid  #00487C"}} 
              allowFullScreen=""  
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className="sites">
                <button type="button" onClick={()=>SetGoogleMapLink(googleMapSites["main"])}>University</button>
                <button type="button" onClick={()=>SetGoogleMapLink(googleMapSites["Restaurants"])}>Restaurants</button>
                <button type="button" onClick={()=>SetGoogleMapLink(googleMapSites["Cafe"])}>Cafes</button>
                <button type="button" onClick={()=>SetGoogleMapLink(googleMapSites["Hospitals"])}>Hospitals</button>

              </div>
      </div>

      
      

        

    </div>
  )
}

export default Services
