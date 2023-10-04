// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
// import toast from "react-hot-toast";
// const CreateBlog = () => {
//   const id = localStorage.getItem("userId");
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({
//     title: "",
//     description: "",
//     image: "",
//   });
//   // input change
//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   //form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("/api/v1/blog/create-blog", {
//         title: inputs.title,
//         description: inputs.description,
//         image: inputs.image,
//         user: id,
//       });
//       if (data?.success) {
//         toast.success("Blog Created");
//         navigate("/my-blogs");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <Box
//           width={"50%"}
//           border={3}
//           borderRadius={10}
//           padding={3}
//           margin="auto"
//           boxShadow={"10px 10px 20px #ccc"}
//           display="flex"
//           flexDirection={"column"}
//           marginTop="30px"
//         >
//           <Typography
//             variant="h2"
//             textAlign={"center"}
//             fontWeight="bold"
//             padding={3}
//             color="gray"
//           >
//             Create A Pots
//           </Typography>
//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
//           >
//             Title
//           </InputLabel>
//           <TextField
//             name="title"
//             value={inputs.title}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//             required
//           />
//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
//           >
//             Description
//           </InputLabel>
//           <TextField
//             name="description"
//             value={inputs.description}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//             required
//           />
//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
//           >
//             Image URL
//           </InputLabel>
//           <TextField
//             name="image"
//             value={inputs.image}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//             required
//           />
//           <Button type="submit" color="primary" variant="contained">
//             SUBMIT
//           </Button>
//         </Box>
//       </form>
//     </>
//   );
// };

// export default CreateBlog;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";
import SendIcon from '@mui/icons-material/Send';
// import TextField from '@mui/material/TextField';
const CreateBlog = () => {
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });
  // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/blog/create-blog", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog Created");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          border={5}
          borderColor={"#000066"}
          backgroundColor={"#f2f2f2"}
          borderRadius={14}
          padding={3}
          margin="auto"
          boxShadow={"10px 10px 20px #000066"}
          display="flex"
          flexDirection={"column"}
          marginTop="30px"
        >
          <Typography
            variant="h2"
            textAlign={"center"}
            fontWeight="bold"
            padding={3}
            color="#000066"
          >
            Create New Blog
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>

         
          <TextField
          id="outlined-multiline-flexible"
          // label="Multiline"
          multiline
          maxRows={4}

          name="description"
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
          {/* <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          /> */}
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image URL
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button type="submit" color="primary" variant="contained" endIcon={<SendIcon />}>
            SUBMIT
          </Button>
        </Box>
      </form>
    </>
  );
};

export default CreateBlog;
