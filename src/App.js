//import './App.css';
import {  TopBar, AllPots,BottomBar,Separator } from './components/index'
//import {  Separator, Logo, Row} from './components/index'

function App() {
  return (
    <div>
      <TopBar/>
      <Separator/>
      <AllPots/>
      <Separator/>
      <BottomBar/>
      <Separator/>
    </div>
  );
}

export default App;
