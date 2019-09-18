import React, { Component } from 'react';
import './MetaGripe.css';
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
          <div className="Gripes-article" key={this.state.gripePile._id}>

              <h1>{currentGripe.gripeText}</h1>

              <div className="Gripes-articleActions">
                <Link to={'/gripe/Meta/'}>More Gripes</Link>
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
