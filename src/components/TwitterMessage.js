import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      maxChars: props.maxChars,
      charsRemaining: props.maxChars 
    };
  }

  updateRemainingChars = () => {
    this.setState((previousState) => {
      return {
        charsRemaining: previousState.maxChars - previousState.message.length,
      }
    })
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    })
    this.updateRemainingChars()
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleMessageChange} type="text" name="message" id="message" value={this.state.message}/>
        <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
