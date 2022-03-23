import React, { useState } from "react";
import Form from "./Form/form";
import "./Form/form.scss";
import Table from "./table/table";
import "./table/table.scss";
function Index() {
const [formData, setFormData] = useState([])
console.log(formData,"formData");

    return(
        <>
        <Form setFormData={setFormData}/>
        <Table items={formData}/>
        </>
    )
    
}
export default Index