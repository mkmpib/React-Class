// import React from 'react'

// const TestDrive = () => {
//   return (
//     <>
//       <div className="testdrive">
//         <h1>BOOK A TEST RIDE NOW</h1>
//               <h4>Take A Hero Ride And Experience The Thrill</h4>
//               <form action="">
//                   <input type="text" placeholder='Enter Your Name' />
//                   <input type="number" placeholder='Enter the Mobile Number' />
//                   <input type="number" placeholder='Enter the OTP' />
//                   <input type="email" placeholder='Enter Your Email' />
//                   <input type="text" placeholder='Enter Your State' />
//                   <input type="text" placeholder='Enter Your City' />
//                   <button>Submit</button>
//               </form>
//       </div>
//     </>
//   );
// }

// export default TestDrive

import React, { useState } from "react";

const TestDrive = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    otp: "",
    email: "",
    state: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState(""); // To store the generated OTP
  const [otpSent, setOtpSent] = useState(false); // To track if OTP is sent
  const [otpVerified, setOtpVerified] = useState(false); // To track if OTP is verified

  const states = ["State 1", "State 2", "State 3"]; // Example states
  const cities = ["City 1", "City 2", "City 3"]; // Example cities

  // Function to validate the form
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "The Name is required";
    if (!formData.mobile || !/^[6-9]\d{9}$/.test(formData.mobile))
      newErrors.mobile = "Please enter a valid mobile number";
    if (!formData.otp && !otpVerified) newErrors.otp = "The OTP is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.state) newErrors.state = "Select a state";
    if (!formData.city) newErrors.city = "Select a city";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
  };

  // Function to generate and send OTP
  const sendOtp = () => {
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors({ ...errors, email: "Please enter a valid email to send OTP" });
      return;
    }
    const generatedOtp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    setOtp(generatedOtp);
    setOtpSent(true);
    setTimeout(() => setOtpSent(false), 300000); // OTP expires after 5 minutes

    // Mock sending OTP to the email (replace this with your backend service)
    console.log(`Sending OTP ${generatedOtp} to ${formData.email}`);
    alert(`OTP sent to ${formData.email}: ${generatedOtp}`); // Use an email API in production
  };

  // Function to verify OTP
  const verifyOtp = () => {
    if (formData.otp === otp.toString()) {
      setOtpVerified(true);
      alert("OTP verified successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate() && otpVerified) {
      alert("Form submitted successfully!");
      console.log(formData); // You can send the data to a server here
    } else if (!otpVerified) {
      alert("Please verify the OTP before submitting the form.");
    }
  };

  return (
    <div style={{ backgroundColor: "#ff0000", padding: "20px", color: "#fff" }}>
      <h1>BOOK A TEST RIDE NOW</h1>
      <p>Take A Hero Ride And Experience The Thrill</p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flexBasis: "48%", marginBottom: "20px" }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.name && <p style={{ color: "#ffcccb" }}>{errors.name}</p>}
        </div>

        <div
          style={{
            flexBasis: "48%",
            marginBottom: "20px",
            position: "relative",
          }}
        >
          <label>Mobile No.</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.mobile && <p style={{ color: "#ffcccb" }}>{errors.mobile}</p>}
          <button
            type="button"
            onClick={sendOtp}
            style={{
              position: "absolute",
              right: "10px",
              top: "30px",
              backgroundColor: "#fff",
              color: "#ff0000",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Send OTP
          </button>
        </div>

        <div style={{ flexBasis: "48%", marginBottom: "20px" }}>
          <label>Enter OTP</label>
          <input
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.otp && <p style={{ color: "#ffcccb" }}>{errors.otp}</p>}
          <button
            type="button"
            onClick={verifyOtp}
            style={{
              marginTop: "10px",
              backgroundColor: "#fff",
              color: "#ff0000",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Verify OTP
          </button>
        </div>

        <div style={{ flexBasis: "48%", marginBottom: "20px" }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.email && <p style={{ color: "#ffcccb" }}>{errors.email}</p>}
        </div>

        <div style={{ flexBasis: "48%", marginBottom: "20px" }}>
          <label>State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">Select a state</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && <p style={{ color: "#ffcccb" }}>{errors.state}</p>}
        </div>

        <div style={{ flexBasis: "48%", marginBottom: "20px" }}>
          <label>City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">Select a city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <p style={{ color: "#ffcccb" }}>{errors.city}</p>}
        </div>

        <div
          style={{ flexBasis: "100%", textAlign: "center", marginTop: "20px" }}
        >
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#fff",
              color: "#ff0000",
              border: "none",
              fontWeight: "bold",
            }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestDrive;

