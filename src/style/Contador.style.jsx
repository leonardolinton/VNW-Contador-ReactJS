import styled from "styled-components";

export const Box = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 2.5rem;
  border-radius: 1rem;
  color: aliceblue;
  background-color: #1f0033;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (max-width: 550px) {
    width: 90vw;
    height: 90vh;
  }
`;

export const Display = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background-color: #ffffff34;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blueviolet;
  height: 5rem;
  width: 5rem;
  font-size: 3rem;
  color: aliceblue;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const ResetButton = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 1rem;
  background-color: #ae00ff;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
