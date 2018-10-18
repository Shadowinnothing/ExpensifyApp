import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return(props) => (
    <div>
      {props.isAdmin && <p>This is private info dude, don't share it</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return(props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You are NOT Authenticated, login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="'Spiderman > Iron Man'" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Wu-Tang my guy" />, document.getElementById('app'));
