export default function Button(props)
{
    return <button onClick={props.eventHandler}>{props.children}</button>
}