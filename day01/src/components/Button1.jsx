function Button1({text,color,children}) {
    const onClickButton = (e) => {
        console.log(e);
    }

    return(
        <button
            onClick={onClickButton}
            onMouseEnter={onClickButton}
            style={{color:color}}>
            {text}-{color.toUpperCase()}
            {children}</button>

    );
}

Button1.defaultProps={
    color:"blue",
}

export default Button1;