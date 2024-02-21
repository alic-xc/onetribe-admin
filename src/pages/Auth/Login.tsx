import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../assets/images/logo.svg";
import { Form, Formik } from "formik";
import { Button, TextInput } from "ontribe-admin-storybook";

const Login = () => {
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
              name: "",
            }}
            onSubmit={(values) => console.log(values)}
          >
            {({ isSubmitting, isValid }) => (
              <Form style={{ width: "90%" }}>
                <Stack my={6} direction="column" spacing={2}>
                  <TextInput
                    name="name"
                    placeholder="Email"
                    size="small"
                    value=""
                  />
                  <TextInput
                    name="name"
                    placeholder="Password"
                    size="small"
                    value=""
                  />
                  <Typography>Forgotten Password</Typography>
                  <Button
                    variant="contained"
                    color="primary"
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
