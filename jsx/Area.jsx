export default function Area(props) {
  const text = props.text;
  return <div class="area">
    {text}
    <br/>
    <textarea id={`area${text}`} onChange={props.handleChange} maxLength={props.maxInp} value={props.val}/>
  </div>
}
