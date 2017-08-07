import Area from "./Area";
import ForceScramble from "./ForceScramble";

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
    this.setState({ text: GUI.letterScrambler(value) });
  }

  static letterScrambler(str) {
    if (!str) return "";
    const strArray = [[]];
    let index = 0;
    str.split("").forEach(l => {
      strArray[index].push(l);
      if (/\s/.test(l)) {
        strArray.push([]);
        index++;
      }
    });
    const arr = [];
    for (const strArr of strArray) {
      const lastInd = strArr.length - 1;
      const last = strArr[lastInd];
      let usedLast = false;
      const strs = /\s/.test(last) ? [usedLast = true, strArr.slice(0, lastInd)][1] : strArr;
      const subArr = [];
      while (strs.length > 0) {
        subArr.push(
          strs.splice(Math.floor(Math.random() * strs.length), 1)[0]
        );
      }
      if (usedLast) subArr.push(last);
      arr.push(subArr);
    }
    return arr.map(a => {
      const last = a[a.length - 1];
      const whitespace = /\s/.test(last) ? last : "";
      return (whitespace ? a.slice(0, a.length - 1) : a).join("") + whitespace;
    }).join("");
  }

  render() {
    return <div id="gui">
      <Area text="Normal" handleChange={e => this.handleChange(e.target.value)} />
      <Area text="Scrambled" maxInp="0" val={this.state.text} />
      <ForceScramble
        handleClick={() => this.handleChange((document.getElementById("areaNormal") || {}).value)} />
    </div>
  }
}
