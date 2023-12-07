import React from 'react';
import 'tachyons';

const Signin = () => {
  return (
    <div className="tc">
      <h1 className="f2">Welcome to New Hampshire Crowdsourcing!</h1>
      <div className="flex justify-center">
        <article className="br2 ba dark-gray b--black-10 mv4 w-40-l mw6 mh4 center shadow-5 bg-washed-green">
          <main className="pa4 black-80">
            {/* Login Card */}
            <form className="measure">
              <fieldset id="login" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Login</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="login">Login:</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text" id="login" name="login" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password:</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password" id="password" name="password" />
                </div>
                <div className="tc">
                  <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit" value="Login" />
                </div>
              </fieldset>
            </form>
          </main>
        </article>
      </div>
    </div>
  );
};

export default Signin;

