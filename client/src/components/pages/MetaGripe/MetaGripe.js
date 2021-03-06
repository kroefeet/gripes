import React, { Component } from 'react';
import { Link } from 'react-router-dom';  

class MetaGripe extends Component {
  state = {
    gripePile: [
      {
        gripeLevel: "",
      },
    ],
  }

  componentDidMount() {
    this.fetchMetaGripes();
  }

  randomIndex() {
    return Math.floor(Math.random() * Math.floor(this.state.gripePile.length));
  }

  fetchMetaGripes() {
    fetch('/api/mongodb/gripePile/')
    .then(response => response.json())
    .then(data => {
      console.log('Did component mount?', data);
      let newList = [];
      for (let item of data) {
        if (
          item.gripeLevel === 0) {
            newList.push(item);
        }
      }
      this.setState({
        gripePile: newList,
      });
      console.log('Meta gripes only', this.state.gripePile);
    });
  }


  render() {
    const currentGripe = this.state.gripePile[this.randomIndex()]

    return (
      <div className="Gripes">
        {
          <div key={this.state.gripePile._id}>
            <div>
              <h1 className="Gripe-window-text-size">"{currentGripe.gripeText}"</h1>
            </div>
            
            <div>
              <Link className="Gripe-window-submit--button" to={'/gripe/Meta/'}>Another Gripe...</Link>

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

export default MetaGripe;
