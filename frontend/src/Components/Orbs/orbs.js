import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';


export default function Orbs() {

    const { width, height } = useWindowSize();

    console.log(width, height);

    const moveOrbs = keyframes`
    
        0%, 100%{
            transform: translate(-160vh);
        }
        50%{
            transform: translate(${width}px, ${height}px);
        }

    `;

    const OrbStyled = styled.div`
        width: 65vh;
        height: 65vh;
        position: absolute;
        border-radius: 50%;
        margin-top: -35vh;
        margin-left: -35vh;
        background: linear-gradient(180deg, #FFC107 0%, #FF9800 100%);
        filter: blur(400px);
        animation: ${moveOrbs} 15s linear infinite;
    `;
  return (
    <OrbStyled>

    </OrbStyled>
  )
}
