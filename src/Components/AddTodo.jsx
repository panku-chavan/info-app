import axios from "axios";
import { useEffect, useState } from "react"


export const AddTodo = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState(null);
    const [dob, setDob] = useState('');
    const [mobile, setMobile] = useState('');
    const [status, setStatus] = useState('');
    const messege = 'Data Submitted Successfully...!';
    const errorMessege="Please fill all details then submit."
    const [show, setShow] = useState(false);
    const [showEr,setShower]=useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
            setShower(false);
        }, 3000)
    }, [show,showEr])

    const onSubmit = (e) => {
        e.preventDefault();




        const newTodo = {
            name: name,
            gender: gender,
            dob: dob,
            mob: mobile,
            status: status
        }
       // console.log(newTodo)
       

        if (name === '' || gender === null || dob === null || mobile === '' || status === '') {
            setShower(!showEr);
            //return;
        } else {
            setShow(true);
            const url = 'http://localhost:8080/todos/add';
            axios.post(url, newTodo).then((res) => console.log("Data added Successfully...!", res)).catch((err) => console.log(err));
        }
        setName('');
        setStatus('');
        setMobile('');
        setDob('');
        setGender(null);
    }
    return (
        <div>
            <div className="container-sm" style={{ marginTop: 20 }}>
                <h3 style={{ textAlign: 'center' }}>Add Details</h3>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="form-group">
                        <label style={{ margin: "5px" }}>Name</label>
                        <input type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ margin: '5px', marginLeft: '0px' }}>Gender :  </label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="genderOptions"
                                id="gengerMale"
                                value="Male"
                                checked={gender === 'Male'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="genserOptions"
                                id="genderFemale"
                                value="Female"
                                checked={gender === 'Female'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label style={{ margin: '5px', marginLeft: '0px' }}>Date of Birth</label>
                        <input type="date"
                            className="form-control"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ margin: '5px', marginLeft: '0px' }}>Mobile</label>
                        <input type="number"
                            className="form-control"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}

                        />
                    </div>


                    <div className="form-group">
                        <label style={{ margin: '5px', marginLeft: '0px' }}>Status :  </label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="statusOptions"
                                id="statusEmployed"
                                value="Employed"
                                checked={status === 'Employed'}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label className="form-check-label">Employed</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="statusOption"
                                id="statusUnepmployed"
                                value="Unemployed"
                                checked={status === 'Unemployed'}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label className="form-check-label">Unemployed</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="statusOption"
                                id="statusFresher"
                                value="Fresher"
                                checked={status === 'Fresher'}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label className="form-check-label">Fresher</label>
                        </div>
                    </div>
                    <div className="form-group" style={{ marginTop: '15px' }}>

                        <button type="submit" className="btn btn-primary"  >Submit</button>


                    </div>
                </form>
            </div>
            {showEr ? <h4 style={{ textAlign: "center", marginTop: "10px" }}>{errorMessege}</h4> : null}
            {show ? <h4 style={{ textAlign: "center", marginTop: "10px" }}>{messege}</h4> : null}
        </div>
    )
}