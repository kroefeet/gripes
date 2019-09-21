import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <div key={this.state.gripePile._id}>
            <div>
              <h1 className="LightGripe-window-text-size">"{currentGripe.gripeText}"</h1>
            </div>

            <div>
              <Link className="LightGripe-window-submit--button" to={'/gripe/Light/'}>Another Gripe...</Link>
                
                {/* <button className="SubmitGripe--button" onClick={() => this.currentGripe}>
                  More Gripes
                </button> */}
                {/* <div onClick={() => this.voteArticle(currentGripe)}>
                  <span alt="upvote this">⬆ {currentGripe.voteCount}</span>
                </div> */}
              </div>
          </div>
        }
      </div>     
    );
  }
}

export default LightGripe;
