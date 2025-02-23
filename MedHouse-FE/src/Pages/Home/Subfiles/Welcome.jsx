
import "../home.css"
import backgroundVector from "../../../assets/welcome_back_vector1.svg";
import imageDoctor from "../../../assets/welcome_doctor.jpg"

const Welcome = () => {
  return (
    <div className="welcome sections">
      <img className="back-img" src={backgroundVector} alt="background-vector" />
      <div className="main-container">
        <div className="left-container">
          <h1>Welcome</h1>
          <p>HostelX RGIPT is a smart and efficient hostel management system designed to simplify hostel life at RGIPT. From room allocation and complaint management to leave applications and important updates, our platform ensures a seamless experience for both students and administrators. With an intuitive interface, transparent operations, and hassle-free management, HostelX RGIPT makes hostel living more organized and convenient.</p>
          <div>
            <button>Read More</button>
            <a href="">Contact Us <span className ="material-icons-outlined">arrow_forward</span></a>
          </div>
        </div>
        <div className="right-container">
  <img src={imageDoctor} alt="doctor" style={{ width: "80%", height: "80%" }} />
</div>

      </div>

    </div>
  )
}

export default Welcome