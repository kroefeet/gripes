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

  randomIndex() {
    return Math.floor(Math.random() * Math.floor(this.state.gripePile.length));
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
          item.gripeLevel === 1
          ) {
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
    const currentGripe = this.state.gripePile[this.randomIndex()]

    return (
      <div className="Gripes">
        {
            <div className="Gripes-article" key={this.state.gripePile._id}>

              <h1>{currentGripe.gripeText}</h1>

              {/* <div className="Gripes-articleActions">
                <div onClick={() => this.deleteArticle(currentGripe)}>
                  <span alt="delete this">🗑</span>
                </div>
                <div onClick={() => this.voteArticle(currentGripe)}>
                  <span alt="upvote this">⬆ {currentGripe.voteCount}</span>
                </div>
              </div> */}
            </div>
            
        }
      </div>
      
    );
  }
}

export default LightGripe;
