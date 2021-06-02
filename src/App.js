//import './App.css';
import {  TopBar, AllPots,BottomBar,Separator, Row } from './components/index'
//import {  Separator, Logo, Row} from './components/index'

function App() {
  return (
    <div>
      <TopBar/>
      <Separator/>
      <Row/>
      <AllPots/>
      <Separator/>
      {/* <a href="BottomBar Aqui"></a> */}
      <BottomBar/>
      <Separator/>
    </div>
  );
}

export default App;
