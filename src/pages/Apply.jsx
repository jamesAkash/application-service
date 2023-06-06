import React from "react";
import { styled } from "styled-components";

const Apply = () => {
  return (
    <Wrapper>
      <header>
        <h1>Application Form</h1>
      </header>
      <form>
        <section>
          <h1>User Details</h1>
          <div className="section-form">
            <div className="form-control">
              <label htmlFor="firstName">First Name</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="name">Gender</label>
              <select>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <hr />
        </section>
        <section>
          <h1>Address Details</h1>

          <div className="section-form">
            <div className="form-control">
              <label htmlFor="Address1">House No/Street</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="Address2">City</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="Address3">District</label>
              <input type="text" />
            </div>

            <div className="form-control">
              <label htmlFor="lastName">Additional details</label>
              <textarea className="area" />
            </div>
            <div className="form-control">
              <label htmlFor="citizen">Citizen</label>
              <select>
                <option>Indian</option>
                <option>Non-Indian</option>
              </select>
            </div>
            <div className="form-control">
              <label for="img">Select image</label>
              <input type="file" id="img" name="img" accept="image/*" />
            </div>
          </div>
          <hr />
        </section>
        <button className="btn">Submit</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 56.8px);
  background-color: #fff;

  header {
    /* background-color: green; */
    /* padding: 2rem; */
    text-align: center;
    h1 {
      font-size: clamp(2rem, 3vw, 5rem);
    }
  }

  section {
    padding: 2rem;
    max-width: 1120px;
    margin: 0 auto;
    /* background-color: yellow; */
    h1 {
      font-size: clamp(1.2rem, 1.5vw, 1.5rem);
    }
  }
  .section-form {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    height: 100%;
    border-radius: 8px;
  }

  .form-control {
    /* background-color: green; */
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 18px;
    font-weight: 600;
  }
  input {
    padding: 4px;
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid black;
  }
  input[type="file"] {
    width: 100px;
    border: 0;
  }

  select {
    display: block;
    font-size: 18px;
    padding-left: 4px;
    max-width: 100px;
  }

  .area {
    height: 90px;
    border: 1px solid black;
    border-radius: 8px;
  }
  .btn {
    display: block;
    margin: 0 auto;
    padding: 0.4rem 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    background-color: coral;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
  }
  .btn:hover {
    color: #fff;
  }
`;

export default Apply;
