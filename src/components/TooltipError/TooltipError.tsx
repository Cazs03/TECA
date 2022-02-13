import "./../../assets/TooltipError.scss";

export default function TooltipError(props: any) {
  return (
    <div className="TooltipError">
      <h2>responseErrors: {props.responseErrors}</h2>
    </div>
  );
}
