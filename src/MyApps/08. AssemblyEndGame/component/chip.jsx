import clsx from "clsx";

export default function Chip(props) {
  const styles = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  };

  const className = clsx("chip", props.isLanguageLost ? "lost" : props.isGameOver ? "game-over" : "");

  return (
    <span className={className} style={styles}>
      {props.name}
    </span>
  );
}