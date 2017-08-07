import Area from "./Area";
import ForceShuffle from "./ForceShuffle";

const { Component } = React;

export default class GUI extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleChange(value) {
    if (!value) return;
    this.setState({ text: GUI.wordShuffler(value) });
  }

  static wordShuffler(str) {
    if (!str) return "";
    const strArray = str.split(" ");
    const arr = [];
    while (strArray.length > 0) {
      arr.push(
        strArray.splice(Math.floor(Math.random() * strArray.length), 1)[0]
      );
    }
    return arr.join(" ");
  }

  render() {
    return <div id="gui">
      <Area text="Normal" handleChange={e => this.handleChange(e.target.value)} />
      <Area text="Shuffled" maxInp="0" val={this.state.text} />
      <ForceShuffle
        handleClick={() => this.handleChange((document.getElementById("areaNormal") || {}).value)} />
    </div>
  }
}
