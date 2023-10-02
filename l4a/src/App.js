import Links from './component/nav/nav';
import Main from './component/main/main';
import Divider from './component/divider/divider';
import MainContent from './component/content/content';
import Services from './component/services/services';
import Statement from './component/statement/statement';
import Contact from './component/contact/contact';
import './App.css';

function App() {

  return (
    <div className="App">
          <Links />
          <Main />
          <Divider />
          <MainContent/>
          <Divider />
          {/* <Services />
          <Divider />
          <Statement />
          <Divider />
          <Contact /> */}
        </div>
  );
}

export default App;
