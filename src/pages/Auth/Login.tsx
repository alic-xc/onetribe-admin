import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../assets/images/logo.svg";
import { Form, Formik } from "formik";
import { Button, TextInput } from "ontribe-admin-storybook";
import { LoginSchema } from "../../schemas/AuthSchema";
import { useLoginMutation } from "../../services/authenticationAPI";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import React from "react";

const Login = () => {
  const [login] = useLoginMutation();
  const { refetch } = React.useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 0,
        m: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#F4F5FA",
      }}
    >
      <Stack
        flex={1}
        height="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction="column"
          alignItems="center"
          sx={{
            width: 443,
            height: 538,
            backgroundColor: "white",
            borderRadius: 3,
            p: 3,
            py: 8,
          }}
        >
          <img src={Logo} width={300} />
          <Typography fontSize={20} fontWeight={500} mt={5} mb={2}>
            Welcome Back
          </Typography>
          <Typography fontSize={14} fontWeight={400}>
            Login to your Site Manager Account
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              try {
                // highlight-next-line
                const data = {
                  username: values.email,
                  password: values.password,
                };

                const response = login(data).unwrap();
                response.then((res) => {
                  console.log(res);
                  localStorage.removeItem("access");
                  localStorage.setItem("access", res.access);
                  refetch();
                  navigate("/");
                });
                response.catch((err) => {
                  console.log(err);
                });
                response.finally(() => {
                  setTimeout(() => setSubmitting(false), 3000);
                });
              } catch (err: any) {
                const msg =
                  "Fail to login because of this reason:" + err.message;
              }
            }}
          >
            {({ isSubmitting, values, handleChange }) => (
              <Form style={{ width: "90%" }}>
                <Stack my={6} direction="column" spacing={2}>
                  <TextInput
                    name="email"
                    placeholder="Email"
                    size="small"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <TextInput
                    name="password"
                    placeholder="Password"
                    size="small"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <Typography>Forgotten Password</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                    sx={{ padding: 2, fontSize: 16, borderRadius: 10 }}
                  >
                    Access Store
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
