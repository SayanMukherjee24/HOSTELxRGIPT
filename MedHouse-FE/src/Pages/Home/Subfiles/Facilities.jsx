function Facilities() {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    width: "250px",
    textAlign: "center",
    transition: "box-shadow 0.3s ease",
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const contactInfoStyle = {
    marginTop: "10px",
  };

  const hoverStyle = {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "20px",
        paddingTop: "30px",
      }}
    >
      <div style={{ ...cardStyle, ...hoverStyle }}>
        <h6 style={{ fontSize: "20px", paddingBottom: "20px" }}>GYMNASIUM</h6>
        <img src="Image/Facilities/gym.jpg" alt="" style={imgStyle} />
        <div style={contactInfoStyle}>
          <p>
            Opening time - <em>(morning)</em> 5 AM - 8 PM
          </p>
          <p>
            Trainer name - <em>Mr. Dev prasad</em>
          </p>
          <p>
            Contact no - <em>7654321989</em>
          </p>
        </div>
      </div>

      <div style={{ ...cardStyle, ...hoverStyle }}>
        <h6 style={{ fontSize: "20px", paddingBottom: "20px" }}>Laundry</h6>
        <img src="Image/Facilities/laundry.jpeg" alt="" style={imgStyle} />
        <div style={contactInfoStyle}>
          <p>
            Opening time - <em>(morning)</em> 5 AM - 8 PM
          </p>
          <p>
            Contact no - <em>7654321989</em>
          </p>
        </div>
      </div>

      <div style={{ ...cardStyle, ...hoverStyle }}>
        <h6 style={{ fontSize: "20px", paddingBottom: "20px" }}>
          Publication Service(private)
        </h6>
        <img src="Image/Facilities/bookshelf.jpg" alt="" style={imgStyle} />
        <div style={contactInfoStyle}>
          <p>
            Opening time - <em>(morning)</em> 5 AM - 8 PM
          </p>
          <p>
            Trainer name - <em>Mr. Arun sharma</em>
          </p>
          <p>
            Contact no - <em>7654321989</em>
          </p>
        </div>
      </div>

      <div style={{ ...cardStyle, ...hoverStyle }}>
        <h6 style={{ fontSize: "20px", paddingBottom: "20px" }}>
          Parcel handover service
        </h6>
        <img src="Image/Facilities/delivery.jpg" alt="" style={imgStyle} />
        <div style={contactInfoStyle}>
          <p>
            Opening time - <em>(morning)</em> 5 AM - 8 PM
          </p>
          <p>
            Trainer name - <em>Mr. Alok verma</em>
          </p>
          <p>
            Contact no - <em>7654321989</em>
          </p>
        </div>
      </div>

      <div style={{ ...cardStyle, ...hoverStyle }}>
        <h6 style={{ fontSize: "20px", paddingBottom: "20px" }}>Sport Club</h6>
        <img src="Image/Facilities/sportClub.jpg" alt="" style={imgStyle} />
        <div style={contactInfoStyle}>
          <p>
            Opening time - <em>(morning)</em> 5 AM - 8 PM
          </p>
          <p>
            Trainer name - <em>Mr. Lokesh gupta</em>
          </p>
          <p>
            Contact no - <em>7654321989</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
