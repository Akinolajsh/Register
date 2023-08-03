import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Container>
        <Main>
          <Title>Register</Title>
          <InputHolder>
          <Icon></Icon>
            <Input placeholder="Enter you username"/>
          </InputHolder>
          <Error>Error</Error>

          <InputHolder>
          <Icon></Icon>
            <Input  placeholder="Enter you email"/>
          </InputHolder>
          <Error>Error</Error>

          <InputHolder>
          <Icon></Icon>
            <Input  placeholder="Enter you  password"/>
          </InputHolder>
          <Error>Error</Error>


          <Holder>
            <LineText>By clicking Register, you agree to our terms and <span>privacy policy</span></LineText>
          </Holder>
          <Holder>
          <Button type="submit">Register</Button>
          <Button2 to="/sign-in">Sign in</Button2>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default Register;

const Icon = styled.div`
height: 100%;
width: 15%;
background-color: #74acff;
`

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 600;
`;

const Holder = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 5px 0;
`;

const Button2 = styled(Link)`
  width: 42%;
  background-color: var(--appAuth);
  color: var(--appBG);
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  border-radius: var(--appRadiusSmall);
  text-decoration: none;
`;

const Button = styled.button`
  width: 42%;
  background-color: var(--appMainColor);
  color: var(--appBG);
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  border-radius: var(--appRadiusSmall);
  font-size: 15px;
  outline: none;
  border: 0;
`;
const LineText = styled.div`
  text-transform: uppercase;
  font-size: 10px;
  margin: 0 6px;
  width: 100%;
  text-align: center;
  line-height: 1.2;
  span{
    color: blue;
  }
`;

const Error = styled.div`
  font-size: 10px;
  color: #53012e;
  font-weight: bold;
  text-align: right;
  width: 90%;
  margin-bottom: 7px;
`;

const Input = styled.input`
  background-color: var(--appBG);
  border: 0;
  outline: none;
  width: 95%;
  height: 95%;
  padding-left: 10px;
`;

const InputHolder = styled.div`
  display: flex;
  position: relative;
  width: 90%;
  height: 35px;
  border: 1px solid var(--appBorderL);
  border-radius: var(--appRadiusSmall);
  margin: 5px 0;
`;

const Main = styled.form`
  width: 300px;
  min-height: 300px;
  border: 1px solid skyblue;
  border-radius: var(--appRadiusSmall);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--appBG);
  color: var(--appText);
  display: flex;
  justify-content: center;
  align-items: center;
`;
