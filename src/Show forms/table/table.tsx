import React from "react";

function Table({ items }: any) {
    console.log(items, "props");
    return (
        <table className="mainn_div">
            <tbody>
                <tr>
                    <th>Sr.No.</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Post</th>
                    <th>gender</th>
                </tr>
                {items.map((elem: any, index: any) => {
                return (
                    <tr>
                        <td>1</td>
                        <td>{`${elem.firstName} ${elem.lastName}`}</td>
                        <td>{`${elem.address.country} ${elem.address.state} ${elem.address.city}`}</td>
                        <td>{`${elem.post.post1} ${elem.post.post2} ${elem.post.post3}`}</td>
                        <td>{elem.gender}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}
export default Table