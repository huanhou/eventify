import React from "react";

const About = () => {
  return (
    <div className="about-page">
      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-content">
          <h1>Our Mission: Redefining Event Experiences</h1>
          <p>
            Discover, manage, and attend events that resonate with you. Whether
            you're hosting or participating, we aim to create a seamless
            experience for everyone involved.
          </p>
        </div>
        <div className="vision-images">
          <img src="about1.jpg" alt="Vision 1" />
          <img src="about2.jpg" alt="Vision 2" />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <h2>Why Choose Us?</h2>
        <div className="stats-container">
          <div className="stats-item">
            <h2>1M+</h2>
            <p>Attendees Connected</p>
          </div>
          <div className="stats-item">
            <h2>50K+</h2>
            <p>Events Hosted</p>
          </div>
          <div className="stats-item">
            <h2>5K+</h2>
            <p>Event Organizers</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {[
            { name: "Alice Johnson", role: "CEO", img: "team1.jpg" },
            { name: "Mark Brown", role: "CTO", img: "team2.jpg" },
            {
              name: "Sophia Lee",
              role: "Marketing Head",
              img: "team4.jpg",
            },
            {
              name: "Ethan Davis",
              role: "Lead Developer",
              img: "team3.jpg",
            },
            {
              name: "Emily White",
              role: "Event Manager",
              img: "team6.jpg",
            },
            {
              name: "Daniel King",
              role: "Customer Success",
              img: "team5.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {[
            {
              title: "Innovation",
              description:
                "Pushing boundaries to bring the best event experiences.",
            },
            {
              title: "Community",
              description: "Fostering strong connections through events.",
            },
            {
              title: "Excellence",
              description:
                "Delivering exceptional results for attendees and organizers.",
            },
            {
              title: "Sustainability",
              description: "Promoting green events and eco-friendly practices.",
            },
          ].map((value, index) => (
            <div key={index} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
