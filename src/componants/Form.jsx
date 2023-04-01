import React, { useState } from 'react';

export default function Form({ sendData }) {

    let [errors, setErrors] = useState({});

    const validateName = (e) => {

        let name = e.target.value

        if (!name) {
            setErrors({ ...errors, name: 'Name is required' });
        } else if (!(/^[a-zA-Z]+$/.test(name))) {
            setErrors({ ...errors, name: 'Name is invalid' });
        } else if (name.length < 3) {
            setErrors({ ...errors, name: 'Name must be 3 charcters or more' });
        }
        else {
            setErrors({ ...errors, name: '' });
        }

    }

    const validateAge = (e) => {
        let age = e.target.value

        if (!age) {
            setErrors({ ...errors, age: 'Age is required' });
        } else if (age < 18) {
            setErrors({ ...errors, age: 'Age must be 18 charcters or more' });
        } else {
            setErrors({ ...errors, age: '' });
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target[0].value
        const age = e.target[1].value

        if ((!errors.name && !errors.age) && (name !== '' && age !== '')) {
            let student = { name, age }
            sendData(student)
        }
    };

    return (
        <div className="container w-50 mt-5">
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" name="name" onChange={validateName} />
                    {errors.name && <div>{errors.name}</div>}
                </div>
                <div className="mt-3">
                    <label className="form-label">Age</label>
                    <input className="form-control" type="number" name="age" onChange={validateAge} />
                    {errors.age && <div>{errors.age}</div>}
                </div>
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    );
}