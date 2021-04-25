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
			<Router>
				<Header />

				<div className="container">
					<SiteTitle />

					<div className="main">
						<AboutMeSidebar />

						<div className="main-content">
					
						
							<Route exact path="/" component={Home} />
							<Route path="/post/:id" component={Post} />
							
						</div>
					</div>

				</div>

				<Footer />
			</Router>
    </div>
  );
}

export default App;
