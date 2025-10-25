
const Card = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <img
          src={props.image}
        />
        <h2>{props.name}</h2>
        <h4>{props.role}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Card