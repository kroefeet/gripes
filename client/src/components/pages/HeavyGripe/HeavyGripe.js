import React, { Component } from 'react';
import './HeavyGripe.css';
import { Link } from 'react-router-dom';  

// TODO: checkbox for light/heavy gripes on WriteArticle
//      - Try one gripe w/ light/heavy variables
//        - From API, filter Light and Heavy gripes
//        - then randomize each category when displaying on app
class HeavyGripe extends Component {
  state = {
    gripePile: [
      {
        gripeLevel: "",
      },
    ],
  }

  componentDidMount() {
    this.fetchHeavyGripes();
  }

  randomIndex() {
    return Math.floor(Math.random() * Math.floor(this.state.gripePile.length));
  }

  fetchHeavyGripes() {
    fetch('/api/mongodb/gripePile/')
    .then(response => response.json())
    .then(data => {
      console.log('Did component mount?', data);
      // make a newList
      // push the items in the newList
      let newList = [];
      for (let item of data) {
        if (
          item.gripeLevel === 2) {
            newList.push(item);
        }
      }
// make newList become gripePile
      this.setState({
        gripePile: newList,
      });
      console.log('Heavy gripes only', this.state.gripePile);
    });
  }


  render() {
    const currentGripe = this.state.gripePile[this.randomIndex()]

    return (
      <div className="Gripes">
        {
          <div className="Gripes-article" key={this.state.gripePile._id}>

              <h1>{currentGripe.gripeText}</h1>

              <div className="Gripes-articleActions">
                <Link to={'/gripe/Light/'}>More Gripes</Link>
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

export default HeavyGripe;
