// Resume.jsx
import React from "react";

const Resume = () => {
  const downloadResume = () => {
    // Replace the URL below with the actual URL of your resume file
    const resumeUrl = "C:\Users\lohwe\portfolio-website\public\resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "your_resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* You can customize the content of the Resume component here */}
      {/* This component will automatically trigger the download */}
      {downloadResume()}
    </div>
  );
};

export default Resume;
