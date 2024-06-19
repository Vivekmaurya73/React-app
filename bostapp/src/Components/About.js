

const About = () => {
  return (
    <div className="about box">
      <div className="about-container">
        <img src="/images/ca.3.jpg" alt="snow" className="about-image" />
        <div className="about-content">
          <h5>ABOUT US</h5>
          <h1 className="m-text">Our main goal is to protect the environment</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="tab-class">
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Vision</li>
            </ul>
            <div className="tab-content">
              <h5>LOREM IPSUM</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <button className="s-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;