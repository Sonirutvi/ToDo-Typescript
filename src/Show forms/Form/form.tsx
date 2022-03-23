import { useState } from "react";

function Form({ setFormData }: any) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [post1, setPost1] = useState("")
    const [post2, setPost2] = useState("")
    const [post3, setPost3] = useState("")
    const [gender, setGender] = useState("")


    const handleClick = (e: any) => {
        e.preventDefault();
    
        let data;
        data = [{
            firstName: fname,
            lastName: lname,
            address: {
                country: country,
                state: state,
                city: city,
            },
            post: {
                post1: post1,
                post2: post2,
                post3: post3,
            },
            gender: gender
        }]
        setFormData(data)
    }

    return (
        <>
            <form className="main_div">
                <div className="child_div">
                    <div className="fInput">
                        <label className="fname">First Name:</label> <input type="text" onChange={(e) => setFname(e.target.value)} value={fname} placeholder="Enter Your First Name" />
                    </div>
                    <div className="lInput">
                        <label className="lname">Last Name:</label> <input type="text" onChange={(e) => setLname(e.target.value)} value={lname} placeholder="Enter Your Last Name" />
                    </div>
                    <div className="addInput">
                        <label className="add">Address:</label>
                        <select onChange={(e) => setCountry(e.target.value)} value={country}>
                            <option>Country</option>
                            <option>India</option>
                        </select>
                        <select onChange={(e) => setState(e.target.value)} value={state}>
                            <option>State</option>
                            <option>Gujarat</option>
                        </select>
                        <select onChange={(e) => setCity(e.target.value)} value={city}>
                            <option>City</option>
                            <option>Ahmedabad</option>
                        </select>
                    </div>
                    <div className="pInput">
                        <label className="post">Post:</label>
                        <input type="checkbox" onChange={(e) => setPost1(e.target.value)} value="FE" />Frontend(FE)
                        <input type="checkbox" onChange={(e) => setPost2(e.target.value)} value="BE" />Backend(BE)
                        <input type="checkbox" onChange={(e) => setPost3(e.target.value)} value="T" />Tester(T)
                    </div>
                    <div className="gInput">
                        <label className="gender">Gender:</label>
                        <input type="radio" onChange={(e) => setGender(e.target.value)} value="Male" name="gender" />Male
                        <input type="radio" onChange={(e) => setGender(e.target.value)} value="Female" name="gender" />Female
                    </div>

                    <button className="btn" onClick={(e) => handleClick(e)}> Submit</button>
                </div>
            </form>
        </>
    )
}
export default Form