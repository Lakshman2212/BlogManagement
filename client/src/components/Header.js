// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { authActions } from "../redux/store";
// import toast from "react-hot-toast";
// const Header = () => {
//   // global state
//   let isLogin = useSelector((state) => state.isLogin);
//   isLogin = isLogin || localStorage.getItem("userId");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   //state
//   const [value, setValue] = useState();

//   //logout
//   const handleLogout = () => {
//     try {
//       dispatch(authActions.logout());
//       toast.success("Logout Successfully");
//       navigate("/login");
//       localStorage.clear();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <AppBar position="sticky">
//         <Toolbar>
//           <Typography variant="h4">My Blog APP</Typography>
//           {isLogin && (
//             <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
//               <Tabs
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, val) => setValue(val)}
//               >
//                 <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
//                 <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
//                 <Tab
//                   label="Create Blog"
//                   LinkComponent={Link}
//                   to="/create-blog"
//                 />
//               </Tabs>
//             </Box>
//           )}
//           <Box display={"flex"} marginLeft="auto">
//             {!isLogin && (
//               <>
//                 <Button
//                   sx={{ margin: 1, color: "white" }}
//                   LinkComponent={Link}
//                   to="/login"
//                 >
//                   Login
//                 </Button>
//                 <Button
//                   sx={{ margin: 1, color: "white" }}
//                   LinkComponent={Link}
//                   to="/register"
//                 >
//                   Register
//                 </Button>
//               </>
//             )}
//             {isLogin && (
//               <Button onClick={handleLogout} sx={{ margin: 1, color: "white" }}>
//                 Logout
//               </Button>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };

// export default Header;


//header
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
const Header = () => {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state
  const [value, setValue] = useState();

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AppBar position="sticky" sx={{background :" linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,103,0.8464635854341737) 35%, rgba(0,212,255,1) 100%)"}}>
        <Toolbar>
          <Typography variant="h4">My Blog APP</Typography>
          {isLogin && (
            <Box    
            //  sx={{background :" linear-gradient(90deg, rgba(109,58,180,1) 0%, rgba(253,29,177,1) 50%, rgba(84,69,252,1) 100%)"}} 
            display={"flex"} marginLeft="auto" marginRight={"auto"}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
                <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
                <Tab
                  label="Create Blog"
                  LinkComponent={Link}
                  to="/create-blog"
                />
              </Tabs>
            </Box>
          )}
          <Box display={"flex"} marginLeft="auto">
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
            {isLogin && (
              <Button onClick={handleLogout} sx={{ margin: 1, color: "black" }}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
