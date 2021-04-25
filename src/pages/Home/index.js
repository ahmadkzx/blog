import React from 'react'
import PostItem from '../../components/PostItem'

class Home extends React.Component {

  render() {
    return (
      <div className="home-page" style={{paddingRight: '1rem'}}>
				<PostItem />
				<PostItem />
				<PostItem />
      </div>
    )
  }

}

export default Home