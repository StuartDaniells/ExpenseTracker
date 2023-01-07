import "./Card.css";

const Card = (props) => {
   // passing classes from wrapper component and adding ours
   const classes = 'card ' + props.className;

   // props.children is what gets passed by default (without passing an attributes) 
   // and is the content between the opening & closing tags of component
   return <div className={classes}>{props.children}</div>
}

export default Card;