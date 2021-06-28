import './Card.css';

function Card(props) {
    const classes = "card1 " + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;