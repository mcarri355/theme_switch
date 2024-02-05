import Nav from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/MainContent';
import Header from './components/Header';
import {createContext, useState} from 'react';
import {data} from './data';

export const StyleContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [info, setInfo] = useState(data);

  return (
    <>
      <div className={theme==='light' ? 'contentHome' : 'contentHome darkContentHome'}>
          <StyleContext.Provider value={{theme, setTheme, info}}>
            <Nav></Nav>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
          </StyleContext.Provider>
        </div>
    </>
  );
}

export default App;