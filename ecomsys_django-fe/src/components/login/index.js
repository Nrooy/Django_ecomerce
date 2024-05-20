import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import api_endpoint from '../../utils/ApiEnpoint';
import axios from 'axios'

function Login() {
    const [account, setAccount] = useState({ username: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(api_endpoint.apiLogin, { account })
            .then(data => {
                console.log(data);
                if (data.status === 1) {
                    alert('Đăng nhập thành công!');
                    window.dispatchEvent(new CustomEvent('user-login', { detail: { user: data.customer } }));
                    navigate('/');
                } else {
                    alert('Tài khoản hoặc mật khẩu không chính xác!');
                }
            })
            .catch(error => {
                console.log(error);
                alert('Có lỗi xảy ra!');
            });
    };

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex py-5 h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
                                        <form className="mx-1 mx-md-4" onSubmit={handleLogin}>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Username"
                                                        value={account.username}
                                                        onChange={e => setAccount({ ...account, username: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        value={account.password}
                                                        onChange={e => setAccount({ ...account, password: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-5 align-items-center">
                                                <div className="d-flex justify-content-between form-check">
                                                    <input
                                                        className="form-check-input mx-2"
                                                        type="checkbox"
                                                        checked={rememberMe}
                                                        onChange={e => setRememberMe(e.target.checked)}
                                                    />
                                                    <label className="form-check-label">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary">Sign In</button>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-3">
                                                Not a member?<a href="/sign-up" className="ms-2">Sign up here.</a>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <a href="/" className="ms-2">To home page.</a>
                                            </div>
                                        </form>
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

export default Login;
