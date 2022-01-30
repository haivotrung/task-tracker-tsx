

const Button = (props:
    {
        color: string | number, text: string,
        onclick: React.MouseEventHandler<HTMLButtonElement>
    }) => {
    return (<button onClick={props.onclick}
        style={{ background: props.color }}
        className="btn" > {props.text} </button >

    )
};

export default Button;