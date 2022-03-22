import React from "react";

function Form() {


    return (
        <>
            <form className="main_div">
                <div className="fInput">
                    <label className="fname">First Name:</label> <input type="text" placeholder="Enter Your First Name" />
                </div>
                <div className="lInput">
                    <label className="lname">Last Name:</label> <input type="text" placeholder="Enter Your First Name" />
                </div>
                <div className="addInput">
                    <label className="add">Address:</label>
                    <select>
                        <option>Country</option>
                        <option>India</option>
                    </select>
                    <select>
                        <option>State</option>
                        <option>Gujarat</option>
                    </select>
                    <select>
                        <option>City</option>
                        <option>Ahmedabad</option>
                    </select>
                </div>
                <div className="pInput">
                    <label className="post">Post:</label>
                    <input type="checkbox" value="" />Frontend(FE)
                    <input type="checkbox" value="" />Backend(BE)
                    <input type="checkbox" value="" />Tester(T)
                </div>
                <div className="gInput">
                    <label className="gender">Gender:</label>
                    <input type="radio" value="Male" name="gender" />Male
                    <input type="radio" value="Male" name="gender" />Female
                </div>

                <button className="btn"> Submit</button>

            </form>

        </>
    )
}

export default Form