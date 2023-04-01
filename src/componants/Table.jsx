import React, { useState } from 'react'

export default function Table({ students }) {

    return (
        <div className='container mt-5'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>
                    {
                        students.map((ele, index) => {

                            return <tr>
                                <th>{index + 1}</th>
                                <td>{ele.name}</td>
                                <td>{ele.age}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}