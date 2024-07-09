import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h2>Biography</h2>
          <h5>Who We Are</h5>
          <p>Welcome to ZeeCare, where compassionate care meets cutting-edge medicine. 
At ZeeCare, we are more than just a medical facility;
 we are a community of dedicated healthcare professionals 
 committed to providing exceptional care and support to our patients and their families. 

Founded on the principles of integrity, empathy, and innovation, our team of physicians,
 nurses, and staff work tirelessly to deliver personalized treatment plans tailored to meet
 the unique needs of each individual. 
With state-of-the-art technology and a multidisciplinary approach,
 we strive for excellence in every aspect of patient care, from diagnosis to recovery. 

          </p>
          <p>From the moment you walk through our doors, you become a part of our family, and we are 
committed to guiding you every step of the way on your journey to health and wellness. </p>
          <p>Thank you for choosing ZeeCare. Your trust is our greatest honor, and we are honored to be your
 partner in health. </p>

          <p>
          Welcome to a place where healing begins and hope thrives—welcome to ZeeCare. 
          </p>
         
        
        </div>
      </div>
    </>
  );
};

export default Biography;