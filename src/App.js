
import {  TopBar, AllPots,BottomBar,Separator} from './components/index'

//import {  Separator, Logo, Row} from './components/index'

function App() {


  return (
    <>
      <TopBar/>
      <Separator y='145'/>
      <AllPots/>
      {/* <a href="BottomBar Aqui"></a> */}
      <BottomBar/>
      <Separator y='25' />
    </>
  );
}

export default App;
