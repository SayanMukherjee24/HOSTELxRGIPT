import { Link } from "react-router-dom";

function Reservations() {
  return (
    <div className="reservations sections">
      <div className="reservations_text">
        <h4>Reservations</h4>
        <p>
        HostelX RGIPT is a smart and efficient hostel management system designed to simplify hostel life at RGIPT. From room allocation and complaint management to leave applications and important updates, our platform ensures a seamless experience for both students and administrators. With an intuitive interface, transparent operations, and hassle-free management, HostelX RGIPT makes hostel living more organized and convenient.
        </p>
        {/* Separate blocks for both Ladies and boys */}
      </div>
      <div className="details">
        <div className="detail_box">
          <img src="/Image/Buildings/blockA.jpg" alt="" />
          <div className="detail_box-text">
            <h6>Block A</h6>
            <p className="detail_box-text_description">
              Available for 1st year and 2nd year students.
            </p>
            <p className="detail_box-text_spaces">
              <strong>1 Room</strong> - 4 students
            </p>
            <div className="detail_box-text_facilities">
              <p className="detail_box-text_title">Facilites</p>
              <p className="detail_box-text_things">
                <ul>
                  <li>4 beds with accessories for 4 students</li>
                  <li>Common study area</li>
                  <li>Common Bathrooms</li>
                  <li>Common Kitchen</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="detail_box">
          <img src="/Image/Buildings/blockB.jpg" alt="" />
          <div className="detail_box-text">
            <h6>Block B</h6>
            <p className="detail_box-text_description">
              Available for 3rd, 4th and 5th year students.
            </p>
            <p className="detail_box-text_spaces">
              <strong>1 Room</strong> - 2 students
            </p>
            <div className="detail_box-text_facilities">
              <p className="detail_box-text_title">Facilites</p>
              <p className="detail_box-text_things">
                <ul>
                  <li>2 beds with accessories for 2 students</li>
                  <li>Common study area</li>
                  <li>Personal Bathrooms</li>
                  <li>Common Kitchen</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="detail_box">
          <img src="/Image/Buildings/blockC.jpg" alt="" />
          <div className="detail_box-text">
            <h6>Block C</h6>
            <p className="detail_box-text_description">
              Available for 3rd, 4th, 5th and final year students.
            </p>
            <p className="detail_box-text_spaces">
              <strong>1 Room</strong> - 1 students
            </p>
            <div className="detail_box-text_facilities">
              <p className="detail_box-text_title">Facilites</p>
              <p className="detail_box-text_things">
                <ul>
                  <li>1 bed with accessories for 1 student</li>
                  <li>Common study area</li>
                  <li>personal Bathrooms</li>
                  <li>Common Kitchen</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="button">
          <Link to="/accommodation/form">Room Requests</Link>
        </div>
        <div className="button">
          <Link to="/accommodation/inquire">Room Inquiries</Link>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
