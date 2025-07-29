export default function Die(props)
{
  const styles = {backgroundColor: props.isHeld ? "#59E391": "#fff"};

  return(
    <button
      className="die"
      style={styles}
      onClick={() => props.hold(props.id)}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value} is ${props.isHeld ? "held." : "not held."}`}
      ref={() => props.ref}
      >
      {props.value}
    </button>
  );
}