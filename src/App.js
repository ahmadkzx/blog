import Home from './pages/Home'
import Header from './components/Header'
import SiteTitle from './components/SiteTitle'
import AboutMeSidebar from './components/AboutMeSidebar'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <SiteTitle />

        <div className="main">
          <AboutMeSidebar />

          <div className="main-content"><Home /></div>
        </div>

      </div>

    </div>
  );
}

export default App;
