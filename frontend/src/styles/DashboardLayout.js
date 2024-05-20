import { styled } from "styled-components";
import bg from '../images/bg.jpg';
import { MainLayout } from "../styles/Layouts";
import Orbs from "../Components/Orbs/orbs";
import Navigation from "../Components/Navigation/navigation";
import { useMemo, useState } from "react";
import { useGlobalContext } from "../context/globalContext";
import Dashboard from "../Components/Dashboard/Dashboard";
import Income from "../Components/Income/Income";
import Expenses from "../Components/Expenses/Expenses";
import Login from "../Components/Login/Login";
import {Routes, Route} from 'react-router-dom';

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();

  console.log(global);

  const displayData = ()=>{
    switch(active){
    case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const Board ={
    
  }

  const orbsMemo = useMemo(()=>{
    return <Orbs/>
  }, [])
  return (
    <AppStyled bg={bg} classname="App">
      {orbsMemo}
      
        
        
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
          </main>
        </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
  `;

export default App;
