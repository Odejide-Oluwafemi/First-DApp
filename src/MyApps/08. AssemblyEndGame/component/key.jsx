export default function KeyButton(props) {
  const style = {
    backgroundColor: props.status.correct
      ? "#10A95B "
      : props.status.wrong
      ? "#EC5D49"
      : "#fcba29",
  };

  return (
    <button
      className="key-button"
      style={style}
      onClick={() => props.handleInput(props.value)}
      disabled={props.isGameOver}
      aria-label={`Letter ${props.value}`}
    >
      {props.value}
    </button>
  );
}
