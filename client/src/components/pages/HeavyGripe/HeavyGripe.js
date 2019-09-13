import React, { Component } from 'react';
import './HeavyGripe.css';

// TODO: checkbox for light/heavy gripes on WriteArticle
//      - Try one gripe w/ light/heavy variables
//        - From API, filter Light and Heavy gripes
//        - then randomize each category when displaying on app
class HeavyGripe extends Component {
  state = {
    HeavyGripePosts: [],
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    console.log('Fetching data from API');
    fetch('/api/mongodb/HeavyGripeposts/')
      .then(response => response.json())
      .then(data => {
        console.log('Got data back', data);
        this.setState({
          HeavyGripePosts: data,
        });
      });
  }

  deleteArticle(documentId) {
    console.log('Sending DELETE for', documentId);
    // Do the DELETE, using "?_id=" to specify which document we are deleting
    fetch('/api/mongodb/HeavyGripeposts/?_id=' + documentId, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Call method to refresh data
        this.fetchPosts();
      });
  }

  voteArticle(article) {
    let newVoteCount = article.voteCount;

    // Increase the vote count
    if (!newVoteCount) {
      newVoteCount = 1;
    } else {
      newVoteCount++;
    }

    const formData = {
      voteCount: newVoteCount,
    };

    // Do the PUT, using "?_id=" to specify which document we are affecting
    const documentId = article._id;
    fetch('/api/mongodb/HeavyGripeposts/?_id=' + documentId, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Call method to refresh data
        this.fetchPosts();
      });
  }

  render() {
    return (
      <div className="HeavyGripe">
        <h1>Heavy Sour-puss gripes go in here....</h1>
        {
          this.state.HeavyGripePosts.map((post, index) => (
            <div className="HeavyGripe-article" key={post._id}>

              <h1>{post.title}</h1>
              <p>{post.text}</p>

              <div className="HeavyGripe-articleActions">
                <div onClick={() => this.deleteArticle(post._id)}>
                  <span alt="delete this">🗑</span>
                </div>
                <div onClick={() => this.voteArticle(post)}>
                  <span alt="upvote this">⬆ {post.voteCount}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default HeavyGripe;
