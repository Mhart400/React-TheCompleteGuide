import { Route } from "react-router-dom";


const Welcome = () => {
  return (
    <>
      <h1>The Welcome Page</h1>
        <Route path='/welcome/new-user'>
            <h2>Hello new user</h2>
        </Route>
    </>
  );
};

export default Welcome;
