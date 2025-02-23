import "../About.css";

const Mission = () => {
  return (
    <div className="sections mission">
      <h1>About Us</h1>
      <div className="mission-description">
        <div className="mission-description-left">
          <h3 className="mission-description-title">Our Mission</h3>
          <p className="mission-description-text">
          HostelX RGIPT is a smart and efficient hostel management system designed to simplify hostel life at RGIPT. From room allocation and complaint management to leave applications and important updates, our platform ensures a seamless experience for both students and administrators. With an intuitive interface, transparent operations, and hassle-free management, HostelX RGIPT makes hostel living more organized and convenient.
          </p>
          <p className="catchPhrase">Your Hassle-Free Hostel Experience, Just a Click Away!</p>
        </div>
        <div className="mission-description-right">
            <img src="/Image/mission.jpeg" alt="" style={{ width: "95%", height: "95%" }} />                                                       
        </div>
      </div>
    </div>
  );
};

export default Mission;
