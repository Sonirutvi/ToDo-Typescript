import React, { useState } from "react";
import FillForm from "./Form/form";
import "./Form/form.scss";
import Forms from "./Form/forms";
import Table from "./table/table";
import "./table/table.scss";
function Index() {
const [formData, setFormData] = useState([])
console.log(formData,"formData");

    return(
        <>
        <FillForm/>
        {/* <Table items={formData}/> */}
        {/* <Forms/> */}
        </>
    )
    
}
export default Index