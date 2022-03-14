import React, { useState } from "react";

function MyForm(){
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [address, setAddress] = useState<string>("")
    const [subject, setSubject] = useState("")
    const [gender, setGender] = useState("")

    const handleClick = (event:any) => {
       event.preventDefault();
       alert(`
       First name: ${fname} 
       Last name: ${lname}
       Address:${address}
       subject: ${subject}
       Gender:${gender}`)
    }

return(
    <>
    <form onSubmit={handleClick}>
        <label>
            First name:
            <input type="text" 
            value={fname} 
            onChange={(e) => setFname(e.target.value)}
            placeholder = "Enter first name" />
        </label>
        <br/>
        <br/>
        <label>
            Last name:
            <input type="text" 
            value={lname} 
            onChange={(e) => setLname(e.target.value)} 
            placeholder = "Enter last name"/>
        </label>
        <br/><br/>
        <label> 
            Address:
            <textarea 
            value={address} 
            onChange={(e) => setAddress(e.target.value)}
            placeholder = "Enter your address" />
        </label>
        <br/><br/>
        <label> Subject: </label>
        <select onChange={(e) => setSubject(e.target.value)}> 
            <option>Select subject:</option>
            <option value="English">English</option>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
        </select>
        <br/><br/>
        <label> 
            Gender:
            <input type="radio" value="Male" name="gender"  onChange={(e) => setGender(e.target.value)}/>Male
            <input type="radio" value="Female" name="gender"  onChange={(e) => setGender(e.target.value)}/>Female
            
        </label>
        <br/><br/>
        <label>
        <input type="submit"></input>
        </label>
    </form>
    </>
) 

}

export default MyForm