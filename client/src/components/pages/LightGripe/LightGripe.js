import React, { Component } from 'react';
import './LightGripe.css';


class LightGripe extends Component {
  state = {
    gripePile: [
      {
        gripeLevel: "",
      },
    ],
  }

  componentDidMount() {
    this.fetchLightGripes();
  }

  fetchLightGripes() {
    fetch('/api/mongodb/gripePile/')
    .then(response => response.json())
    .then(data => {
      console.log('Did component mount?', data);
      // make a newList
      // push the items in the newList
      let newList = [];
      for (let item of data) {
        if (
          item.gripeLevel === 1) {
            newList.push(item);
        }
      }
// make newList become gripePile
      this.setState({
        gripePile: newList,
      });
      console.log('Light gripes only', this.state.gripePile);
    });
  }


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

export default LightGripe;