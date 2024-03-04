import { Stack } from "@mui/material";
import { Form, Formik } from "formik";
import { Button, TextInput } from "ontribe-admin-storybook";
import { CategorySchema } from "../../../schemas/CategorySchema";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "../../../services/productAPI";
import { Category } from "../Index";

interface CreateCategoryFormProps {
  callback?: () => void;
  data?: Category;
  action?: string;
}
const CreateCategoryForm = (props: CreateCategoryFormProps) => {
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  console.log(props.data?.name);
  return (
    <Formik
      initialValues={{
        name: props.data?.name || "",
      }}
      enableReinitialize={true}
      validationSchema={CategorySchema}
      onSubmit={(values, { setSubmitting }) => {
        try {
          let response;
          const data: any = {
            name: values.name,
          };
          if (props.action === "edit") {
            data["id"] = props.data?._id;
            response = updateCategory(data).unwrap();
          } else {
            response = createCategory(data).unwrap();
          }
          response.then(() => {
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
