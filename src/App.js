import Home from './pages/Home'
import Post from './pages/Post'
import Header from './components/Header'
import Footer from './components/Footer'
import SiteTitle from './components/SiteTitle'
import AboutMeSidebar from './components/AboutMeSidebar'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <SiteTitle />

        <div className="main">
          <AboutMeSidebar />

          <div className="main-content">

					<Router>
						<Route exact path="/">
							<Home />
						</Route>

						<Route path="/post">
							<Post />
						</Route>
					</Router>
						
					</div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default App;
