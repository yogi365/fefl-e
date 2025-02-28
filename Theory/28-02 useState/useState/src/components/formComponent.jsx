import { useState } from "react";

export default function FormComponent()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [select, setSelect] = useState("First")
    const [subject, setSubject] = useState([]);
    function handleNameChange(event)
    {
        setName(event.target.value)
    }
    function handleEmailChange(event)
    {
        setEmail(event.target.value)
    }

    function handleSelectChange(event)
    {
        setSelect(event.target.value)
    }

    function handleChecks(event)
    {
        // console.log(event.target.checked);
        setSubject(prevSubject => event.target.checked ? [...prevSubject, event.target.value] :
            prevSubject.filter(sub => sub !== target.event.value)
        )
    }

    return (
        <>
            <form>
                <input type="text" value={name} onChange={handleNameChange} />
                <input type="email" value={email} onChange={handleEmailChange} />
                <select onChange={handleSelectChange}>
                    <option value="first">First</option>
                    <option value="second">second</option>
                    <option value="third">third</option>
                    <option value="fourth">fourth</option>
                </select>

                <table>
                    <tbody>
                        <tr>
                            <td>Mathematics</td>
                            <td><input type="checkbox" name="subject" value="Mathematics" onChange={handleChecks} /></td>
                        </tr>
                        <tr>
                            <td>FEFL</td>
                            <td><input type="checkbox" name="subject" value="FEFL" onChange={handleChecks} /></td>
                        </tr>

                        <tr>
                            <td>DS</td>
                            <td><input type="checkbox" name="subject" value="DS" onChange={handleChecks} /></td>
                        </tr>
                    </tbody>
                </table>
                {/* <button>Submit</button> */}
            </form>
            <p>{name}</p>
            <p>{email}</p>
            <p>{select}</p>
        </>
    )
}