// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const LockCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 100%;
`
export const Heading = styled.p`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #e2e8f0;
`
export const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
  font-family: 'Roboto';
  border-radius: 10px;
  height: 50px;
  width: 150px;
`
