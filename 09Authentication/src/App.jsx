import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "./features/api/authApi.js";
import { setCredentials, logout } from "./features/products/userSlice.js";

function Login() {
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { user, isLoggedIn } = useSelector((state) => state.user);

  const [username] = useState("emilys");
  const [password] = useState("emilyspass");

  const handleLogin = async () => {
    console.log("=== LOGIN STARTED ===");

    console.log("Before API Call:", {
      username,
      password,
    });

    console.log("Before login:", isLoading);

    try {
      const data = await login({
        username,
        password,
      }).unwrap();

      console.log("API Response:", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
    
      dispatch(
        setCredentials({
          user: data,
          token: data.token,
        })
      );

      console.log("After Dispatch: Credentials sent to Redux");
      console.log("=== LOGIN SUCCESS ===");
    } catch (error) {
      console.log("Login Failed:", error);
    }
  };

  const handleLogout = () => {
    console.log("=== LOGOUT STARTED ===");
    console.log("Before Logout:", { user, isLoggedIn });

    dispatch(logout());

    console.log("Logout Action Dispatched");
    console.log("=== LOGOUT SUCCESS ===");
  };

  return (
    <div>
      <h2>Authentication Demo</h2>

      {isLoggedIn ? (
        <>
          <p>Welcome, {user.firstName}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      )}
    </div>
  );
}

export default Login;