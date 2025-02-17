export default function TableRow(props)
{
    return (
        <tr>
            <td>{props.user.id}</td>
            <td style={{ color: props.style.color }}>{props.user.name}</td>
            <td>{props.user.age}</td>
        </tr>
    )
}


