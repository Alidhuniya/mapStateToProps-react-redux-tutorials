import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
  render() {

    const post = this.props.post ? (
      <div >
        <h4 >{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div >Loading post...</div>
    );

    return (
      <div >
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

export default connect(mapStateToProps)(Post)
