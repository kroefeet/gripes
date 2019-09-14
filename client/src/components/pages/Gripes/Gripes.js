import React, { Component } from 'react';
import './Gripes.css';


class Gripes extends Component {
  state = {
    gripePile: [],
  }

  componentDidMount() {
    this.fetchGripes();
  }

  fetchGripes() {
    console.log('Fetching data from API');
    fetch('/api/mongodb/gripePile/')
      .then(response => response.json())
      .then(data => {
        console.log('Got data back', data);
        this.setState({
          gripePile: data,
        });
      });
  }
/*
  deleteGripe(documentId) {
    console.log('Sending DELETE for', documentId);
    // Do the DELETE, using "?_id=" to specify which document we are deleting
    fetch('/api/mongodb/gripes/?_id=' + documentId, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Call method to refresh data
        this.fetchGripes();
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
    fetch('/api/mongodb/gripePile/?_id=' + documentId, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Call method to refresh data
        this.fetchGripes();
      });
  }
*/
  render() {
    return (
      <div className="Gripes">
        <h1>This section could display an individual gripe</h1>
        {
          this.state.gripePile.map((gripe, index) => (
            <div className="Gripes-article" key={gripe._id}>

              <p>{gripe.gripeText}</p>

              <div className="Gripes-articleActions">
                <div onClick={() => this.deleteArticle(gripe._id)}>
                  <span alt="delete this">🗑</span>
                </div>
                <div onClick={() => this.voteArticle(gripe)}>
                  <span alt="upvote this">⬆ {gripe.voteCount}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Gripes;
