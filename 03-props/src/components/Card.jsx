

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} />
      <h3>{props.user},{props.age}</h3>
      <p>AI & DS Student | Developer | QUEST Club Member</p>
      <button>View</button>
    </div>
  )
}

export default Card
