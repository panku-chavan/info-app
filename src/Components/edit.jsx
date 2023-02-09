import { useLocation } from "react-router"
import axios from "axios";
import {  useEffect, useState } from "react"

export const Edit = () => {
    const location = useLocation();
    const { id,name,gender,dob,mob,status } = location.state;
   // console.log(id)
    const [cname, setName] = useState(name);
    const [cgender, setGender] = useState(gender);
    const [cdob, setDob] = useState(dob);
    const [cmobile, setMobile] = useState(mob);
    const [cstatus, setStatus] = useState(status);
    const messege="Data Updated Successfully...!";
    const [show,setShow]=useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setShow(false);
        },3000)
    },[show]);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            name: cname,
            gender: cgender,
            dob: cdob,
            mob: cmobile,
            status: cstatus
        }
       // console.log(newTodo)
        setShow(true);
        const url = `http://localhost:8080/todos/update/${id}`;
        axios.put(url, newTodo).then((res) => console.log("Data updated Successfully...!", res)).catch((err) => console.log(err));

        setName('');
        setName('');
        setMobile('');
        setDob('');
        setGender(null);
    }
    return (
        <div>
            <div className="container-sm" style={{ marginTop: 20 }}>
                <h3 style={{ textAlign: 'center' }}>Edit Details</h3>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="form-group">
                        <label style={{ margin: "5px" }}>Name</label>
                        <input type="text"
                            className="form-control"
                            value={cname}
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
                                checked={cgender === 'Male'}
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
                                checked={cgender === 'Female'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label style={{ margin: '5px', marginLeft: '0px' }}>Date of Birth</label>
                        <input type="date"
                            className="form-control"
                            value={cdob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ margin: '5px', marginLeft: '0px' }}>Mobile</label>
                        <input type="number"
                            className="form-control"
                            value={cmobile}
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
                                checked={cstatus === 'Employed'}
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
                                checked={cstatus === 'Unemployed'}
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
                                checked={cstatus === 'Fresher'}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label className="form-check-label">Fresher</label>
                        </div>
                    </div>
                    <div className="form-group" style={{ marginTop: '15px' }}>

                        <input type="submit" value="Submit" className="btn btn-primary" href='/todos' />


                    </div>
                </form>
            </div>
            {show? <h4 style={{textAlign:"center",marginTop:"10px"}}>{messege}</h4>:null}
        </div>
    )
}