import React from 'react'
import styled from 'styled-components'

export const Dashboard = () => {
  return (
    <DivContainer>
      <img src="https://res.cloudinary.com/djbiam1gm/image/upload/v1645461682/WhatsApp_Image_2022-02-21_at_8.40.33_AM_xzhaq2.jpg" alt="img" />
    </DivContainer>
    
  )
}

const DivContainer = styled.div`
  width: 100vw;
  height: 80vh;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
`
