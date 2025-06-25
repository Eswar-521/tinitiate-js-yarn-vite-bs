import React from "react";
import { Camera, Mail, Phone, User, BookOpen, CheckCircle } from "lucide-react";

const Profile = () => {
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #6366F1, #3B82F6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    animation: "fadeInUp 0.7s ease",
  };

  const bannerStyle = {
    height: "112px",
    background: "linear-gradient(to right, #1D4ED8, #7C3AED)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const profileImgWrapper = {
    position: "absolute",
    bottom: "-40px",
    textAlign: "center",
  };

  const profileImg = {
    width: "96px",
    height: "96px",
    borderRadius: "50%",
    border: "4px solid white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  };

  const cameraLabel = {
    position: "absolute",
    bottom: "0px",
    right: "0px",
    backgroundColor: "#333",
    padding: "4px",
    borderRadius: "50%",
    cursor: "pointer",
  };

  const userInfoStyle = {
    paddingTop: "56px",
    paddingBottom: "24px",
    textAlign: "center",
    paddingInline: "16px",
  };

  const contactStyle = {
    padding: "0 24px 24px",
    color: "#374151",
  };

  const sectionTitle = {
    fontWeight: "bold",
    marginBottom: "8px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    color: "#111827",
  };

  const courseCard = {
    backgroundColor: "#F3F4F6",
    borderRadius: "10px",
    padding: "12px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Banner */}
        <div style={bannerStyle}>
          <div style={profileImgWrapper}>
            <div style={{ position: "relative" }}>
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                style={profileImg}
              />
              <label style={cameraLabel}>
                <Camera color="white" size={16} />
                <input type="file" style={{ display: "none" }} />
              </label>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div style={userInfoStyle}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#1F2937" }}>
            John Doe
          </h2>
          <p style={{ fontSize: "14px", color: "#6B7280" }}>Full Stack Developer</p>
        </div>

        {/* Contact and Courses */}
        <div style={contactStyle}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <User size={18} color="#3B82F6" style={{ marginRight: "8px" }} />
            <span>John Doe</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <Mail size={18} color="#3B82F6" style={{ marginRight: "8px" }} />
            <span>john.doe@example.com</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <Phone size={18} color="#3B82F6" style={{ marginRight: "8px" }} />
            <span>+91 9876543210</span>
          </div>

          <div style={{ marginTop: "20px" }}>
            <div style={sectionTitle}>
              <BookOpen size={20} color="#7C3AED" style={{ marginRight: "8px" }} />
              Enrolled Courses
            </div>
            <div>
              <div style={courseCard}>
                <span>React Development</span>
                <CheckCircle color="#10B981" size={18} />
              </div>
              <div style={courseCard}>
                <span>Node.js Backend</span>
                <CheckCircle color="#10B981" size={18} />
              </div>
              <div style={courseCard}>
                <span>UI/UX Design</span>
                <CheckCircle color="#FBBF24" size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Profile;
