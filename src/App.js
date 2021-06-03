//import './App.css';
import {  TopBar, AllPots,BottomBar,Separator, Row } from './components/index'
//import {  Separator, Logo, Row} from './components/index'

function App() {
  return (
    <>
      <TopBar/>
      <Separator y='50'/>
      <AllPots/>
      <Separator/>
      {/* <a href="BottomBar Aqui"></a> */}
      <BottomBar/>
      <Separator y='5000' />
    </>
  );
}

export default App;
