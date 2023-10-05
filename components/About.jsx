



import React from "react";
import Wrapper from "@/components/Wrapper";
import AboutComponent from "@/components/About";

const containerStyle = {
  backgroundColor: "#f5f5f5",
  padding: "40px",  
  borderRadius: "15px",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  maxWidth: "900px",  
  margin: "0 auto",
  border: "2px solid #e0e0e0",
  marginBottom: "20px",
};

const titleStyle = {
  fontSize: "28px",
  marginBottom: "15px",
  color: "#333",
};

const contentStyle = {
  fontSize: "18px",
  lineHeight: "1.6",
  color: "#555",
};

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Wrapper className="flex-grow">
        <div style={containerStyle}>
          <h2 style={titleStyle}>About Us</h2>
          <p style={contentStyle}>
            Welcome to our art gallery! We showcase a diverse collection of artwork from talented artists around the world. Each piece is carefully selected to evoke emotions, tell unique stories, and enrich the spaces they inhabit. Beyond being an online marketplace, we're a community that celebrates creativity and craftsmanship. Our mission is to make art accessible, supporting both emerging and established artists, while fostering a love for art in every heart. Join us on this creative journey, where every brushstroke carries the essence of an artist's soul.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutPage;





