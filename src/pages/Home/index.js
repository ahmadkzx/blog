import React from 'react'
import axios from 'axios'
import makerServer from '../../server'
import PostItem from '../../components/PostItem'

class Home extends React.Component {

	constructor() {
		super()
		this.state = { posts: [] }
	}

	async componentDidMount() {
		makerServer()
		const { data } = await axios.get('/api/posts')
		this.setState({ posts: data })
	}

  render() {
    return (
      <div className="home-page" style={{paddingRight: '1rem'}}>

				{ this.state.posts.map(post => (
					<PostItem
						id={post.id}
						date={post.date}
						title={post.title}
						summary={post.summary}
						key={`post-${post.id}`}
						timeToRead={post.timeToRead}
					/>
				)) }

      </div>
    )
  }

}

export default Home