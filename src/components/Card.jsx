function Card(props) {
    return (
        <img className='card' src={props.card.img} alt={props.card.value} />
    );
}
export default Card