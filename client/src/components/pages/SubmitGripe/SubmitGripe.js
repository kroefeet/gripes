import React, { Component } from 'react';
import './SubmitGripe.css';

class SubmitGripe extends Component {
  state = {
    gripeLevel: 0,
    gripeText: '',
  }

  onChangeContent = (ev) => {
    this.setState({
      gripeText: ev.target.value,
    });
  }

  onChangeLevel = (ev) => {
    this.setState({
      gripeLevel: ev.target.value,
    });
  }

  submit = () => {
    const formData = {
      gripeLevel: this.state.gripeLevel,
      gripeText: this.state.gripeText,
    };

    fetch('/api/mongodb/gripes.gripePile/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to blog
        this.props.history.push('/blog/');
      });
  }


  render() {
    return (
      <div className="SubmitGripe">
        <h1>Add your gripe here</h1>
        <input
            name="category"
            type="radio"
            id="light"
            value={this.state.gripeLevel}
            onChange={this.onChangeLevel}
          />  <label for="light">Light</label>
      <input
          name="category"
          type="radio"
          id="dark"
          value={this.state.gripeLevel}
          onChange={this.onChangeLevel}
        />
        <label for="dark">Dark</label>

        <input
            name="category"
            type="radio"
            id="meta"
            value={this.state.gripeLevel}
            onChange={this.onChangeLevel}
          />  <label for="meta">Website complaint</label>

        <textarea
            name="content"
            placeholder="Contents"
            value={this.state.details}
            onChange={this.onChangeContent}
          />

        <br />

        <button onClick={this.submit}>Add to the gripe pile</button>
      </div>

    );
  }
}

export default SubmitGripe;