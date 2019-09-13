import React, { Component } from 'react';
import './SubmitGripe.css';

class SubmitGripe extends Component {
  state = {
    gripeLevel: 0,
    gripeText: '',
    gripeLabel: '',
  }

  onChangeContent = (ev) => {
    this.setState({
      gripeText: ev.target.value,
    });
  }

  onChangeLevel = (ev) => {
    const gripeLevel = parseInt(ev.target.value)
    const gripeLabel = ev.target.id
    this.setState({
      gripeLevel: gripeLevel,
      gripeLabel: gripeLabel,
    });
    console.log(gripeLevel)
    console.log(gripeLabel)
  }

  submit = () => {
    const formData = {
      gripeLevel: this.state.gripeLevel,
      gripeLabel: this.state.gripeLabel,
      gripeText: this.state.gripeText,

    };

    fetch('/api/mongodb/gripePile/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to gripe
        this.props.history.push('/gripe/');
      });
  }


  render() {
    return (
      <div className="SubmitGripe">
        <h1>Add your gripe here</h1>
        <div className="SubmitGripe--inputs">
            <input
                name="category"
                type="radio"
                id="light"
                value="1"
                onClick={this.onChangeLevel}
              />  <label>Light</label>
          <input
              name="category"
              type="radio"
              id="dark"
              value="2"
              onClick={this.onChangeLevel}
            />
            <label>Dark</label>

            <input
                name="category"
                type="radio"
                id="meta"
                value="0"
                onClick={this.onChangeLevel}
              />  <label>This website</label>
            </div>

        <textarea
            name="content"
            placeholder="Contents"
            value={this.state.details}
            onChange={this.onChangeContent}
          />

        <br />

        <button className="SubmitGripe--button" onClick={this.submit}>Add to the gripe pile</button>
      </div>

    );
  }
}

export default SubmitGripe;
