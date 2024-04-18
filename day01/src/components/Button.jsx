function Button(props) {
    return(
        <button
            style={{color:props.color}}>
            {props.text}-{props.color.toUpperCase()}
        </button>

    );
}

Button.defaultProps={
    color:"blue",
}

export default Button;