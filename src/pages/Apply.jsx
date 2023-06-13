import React, { useState } from "react";
import { styled } from "styled-components";

const Apply = () => {
  const [user, setUser] = useState({
    // Taking only fname,dob,gender,mail,number,citizen
    fname: "",
    dob: "",
    gender: "Male",
    mail: "",
    number: "",
    citizen: "Indian",
    a1: "",
    a2: "",
    a3: "",
    a4: "",
  });
  // console.log(user);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <Wrapper>
      <div className="container">
        <header>Registration</header>
        {/* form */}
        <form onSubmit={handleSubmit}>
          <div className="details personal">
            <span className="title">Personal Details</span>
            {/* fields */}
            <div className="fields">
              <div className="input-field">
                <label>Full Name</label>
                <input
                  type="text"
                  value={user.fname}
                  name="fname"
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter Your name"
                  required
                />
              </div>
              <div className="input-field">
                <label>Date of Birth</label>
                <input
                  type="date"
                  value={user.dob}
                  name="dob"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Email</label>
                <input
                  value={user.mail}
                  name="mail"
                  onChange={(e) => handleChange(e)}
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="input-field">
                <label>Mobile Number</label>
                <input
                  type="number"
                  value={user.number}
                  name="number"
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              <div className="input-field">
                <label>Gender</label>
                <select
                  value={user.gender}
                  name="gender"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="input-field">
                <label>Occupation</label>
                <input type="text" placeholder="Enter occupation" />
              </div>
            </div>
          </div>

          <div className="details ID">
            <span className="title">Identity Details</span>
            {/* fields */}
            <div className="fields">
              <div className="input-field">
                <label>ID Type</label>
                <input type="text" placeholder="Enter Identity Type" />
              </div>
              <div className="input-field">
                <label>Issuance Date</label>
                <input type="date" />
              </div>
              <div className="input-field">
                <label>ID Number</label>
                <input type="text" placeholder="Enter your ID number" />
              </div>
              <div className="input-field">
                <label>Issuance Authority</label>
                <input type="text" placeholder="Enter authority" />
              </div>
              <div className="input-field">
                <label>Citizenship</label>
                <select
                  value={user.citizen}
                  name="citizen"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Indian</option>
                  <option>Non-Indian</option>
                </select>
              </div>
              <div className="input-field">
                <label>Occupation</label>
                <input type="text" placeholder="Enter occupation" />
              </div>
            </div>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 58px);
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    position: relative;
    max-width: 1100px;
    width: 100%;
    border-radius: 6px;
    padding: 30px;
    margin: 0 15px;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    header {
      font-size: 20px;
      font-weight: 600;
      color: #333;
      position: relative;
    }

    header::before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 37px;
      height: 3px;
      border-radius: 8px;
      background-color: #4070f4;
    }

    form {
      position: relative;
      margin-top: 16px;
      min-height: 490px;

      .details {
        margin-top: 30px;
      }
      .details .ID {
        margin-top: 10px;
      }
      .title {
        display: block;
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 500;
        color: #333;
        margin: 6px 0;
      }

      .fields {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .fields .input-field {
        display: flex;
        width: calc(100% / 3 - 15px);
        flex-direction: column;
        margin: 4px 0;
      }

      .input-field label {
        font-weight: 500;
        font-size: 12px;
        color: #2e2e2e;
      }

      .input-field input {
        height: 42px;
        margin: 8px 0;
        padding: 0 15px;
        outline: none;
        border: 1px solid #aaa;
        font-size: 14px;
        font-weight: 400;
        border-radius: 5px;
        color: #333;
      }

      .input-field input:is(:focus, :valid) {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
      }
      .input-field input[type="date"] {
        color: #707070;
      }
      .input-field input[type="date"]:valid {
        color: #333;
      }
    }

    .btn {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
      background-color: #27374d;
      padding: 6px 12px;
      width: 150px;
      border: 0;
      border-radius: 5px;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
    .btn:hover {
      background-color: #115293;
    }
  }
`;

export default Apply;
