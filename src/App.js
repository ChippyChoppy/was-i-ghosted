import './App.css';
import ViewContainer from './Containers/ViewContainer'
import styled from 'styled-components'

function App() {
  return (
    <Main>
      <ViewContainer />
    </Main>
  );
}

export default App;

const Main = styled.div `
height: 100vh;
width: 100vw;
`
