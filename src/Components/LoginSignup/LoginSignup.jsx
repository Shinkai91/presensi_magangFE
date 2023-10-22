import React from 'react';
import 'bulma/css/bulma.css';
import user_icon from '../Assets/person.png';
import password from '../Assets/password.png';
import imagelogin from '../../Assets/diskominfo.png';
import background_login from "../Assets/login_page.jpg";

const Login = () => {
    return (
      <section className="hero is-fullheight" style={{ backgroundImage: `url(${background_login})`, backgroundSize: 'cover' }}>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form className="box">
                                <img src={imagelogin} alt="" />
                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control has-icons-left">
                                        <input type="text" className="input" placeholder="Username" />
                                        <span className="icon is-small is-left">
                                            <img src={user_icon} alt="User Icon" />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" className="input" placeholder="Passowrd" />
                                        <span className="icon is-small is-left">
                                            <img src={password} alt="User Icon" />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;