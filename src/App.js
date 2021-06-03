
import {  TopBar, AllPots,BottomBar,Separator} from './components/index'

//import {  Separator, Logo, Row} from './components/index'

function App() {


  return (
    
    <>
      <TopBar/>
      
      <AllPots/>
      <Separator/>
      {/* <a href="BottomBar Aqui"></a> */}
      <BottomBar/>
      <Separator y='50' />
      
    </>
  );
}

export default App;
