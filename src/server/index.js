import { createServer } from 'miragejs'
import posts from './data/posts.json'

export default function makeServer() {
	let server = createServer({

		routes() {
			this.get('/api/posts', () => posts)

			this.get('/api/post/:id', (schema, request) => {
				let id = request.params.id
				
				return posts.find(post => +post.id === +id)
			})
		}

	})
	return server
}