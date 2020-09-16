import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

class Home extends Component {
  render(){
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div  key={post.id}>
            <div >
              <Link to={'/' + post.id}>
                <span >{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div>No posts to show</div>
    );

    return (
      <div>
        <div>
          <h4>Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)