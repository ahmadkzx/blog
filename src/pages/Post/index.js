import './index.scss'
import React from 'react'
import axios from 'axios'
import makerServer from '../../server'
class Post extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			post: {
				id: props.match.params.id
			}
		}
	}

	async componentDidMount() {
		makerServer()
		const { data } = await axios.get(`/api/post/${this.state.post.id}`)
		this.setState({ post: data })
	}
	
	render() {
		return (
			<div className="post-page">
				<h2 className="post-page__title">{ this.state.post.title }</h2>
				<div className="post-page__content">{ this.state.post.content }</div>
			</div>
		)
	}
}

export default Post