import { Stack } from "@mui/material";
import { Form, Formik } from "formik";
import { Button, TextInput } from "ontribe-admin-storybook";
import { CategorySchema } from "../../../schemas/CategorySchema";
import { useCreateCategoryMutation } from "../../../services/productAPI";

interface CreateCategoryFormProps {
  callback?: () => void;
}
const CreateCategoryForm = (props: CreateCategoryFormProps) => {
  const [createCategory] = useCreateCategoryMutation();
  return (
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={CategorySchema}
      onSubmit={(values, { setSubmitting }) => {
        try {
          const data = {
            name: values.name,
          };
          const response = createCategory(data).unwrap();
          response.then((res) => {
            console.log(res);
            props.callback && props.callback();
          });
          response.catch((err) => {
            console.log(err);
          });
          response.finally(() => {
            setTimeout(() => setSubmitting(false), 3000);
          });
        } catch (err: any) {
          console.log(err);
        }
      }}
    >
      {({ isSubmitting, values, handleChange }) => (
        <Form>
          <Stack direction="column" spacing={2}>
            <TextInput
              name="name"
              placeholder="name"
              size="small"
              value={values.name}
              onChange={handleChange}
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              sx={{ py: 1, fontSize: 16, borderRadius: 2 }}
            >
              Continue
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default CreateCategoryForm;
