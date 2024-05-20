import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({});
    const [alterPassword, setAlterPassword] = useState('');

    const createUser = async () => {

    };

    const checkEmptyInput = (text) => {
        return !text || text.trim().length == 0;
    };

    const validate = () => {
        if (checkEmptyInput(account.username) || checkEmptyInput(account.name) || checkEmptyInput(account.password) || checkEmptyInput(account.phone_number)) {
            toast.error('Please do not leave any field blank.')
            return false;
        }

        if (alterPassword !== account.password) {
            toast.error('Wrong confirm password!');
            return false;
        }
        return true;
    }

    const handleRegister = (e) => {
        if (validate() && window.confirm('Are you sure to create this user ?')) {
            const asyncFunction = async () => {
                await createUser(account);

            }
            asyncFunction();
        }
    }

    useEffect(() => {

    }, [])

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container">
                <div className="row d-flex py-5">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5">
                                        <p className="text-center h1 fw-bold mb-3 mt-3">Sign up</p>
                                        <div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-id-badge fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" className="form-control" placeholder='Username' value={account.username} onChange={e => setAccount({ ...account, username: e.target.value })} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" className="form-control" placeholder='Name' value={account.name} onChange={e => setAccount({ ...account, name: e.target.value })} />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="number" className="form-control hidden-number-input" placeholder='Phone number' value={account.phone_number} onChange={e => setAccount({ ...account, phone_number: e.target.value })} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" className="form-control" placeholder='Password' value={account.password} onChange={e => setAccount({ ...account, password: e.target.value })} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control" placeholder='Repeat your password' value={alterPassword} onChange={e => setAlterPassword(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-id-badge fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" className="form-control" placeholder='Email' value={account.email} onChange={e => setAccount({ ...account, email: e.target.value })} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-id-badge fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" className="form-control" placeholder='Address' value={account.address} onChange={e => setAccount({ ...account, address: e.target.value })} />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-success me-2" onClick={handleRegister}>Sign Up</button>
                                                <button className='btn btn-secondary' onClick={() => { navigate('/'); }}>To Home</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;