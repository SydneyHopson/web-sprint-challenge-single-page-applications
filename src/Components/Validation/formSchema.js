import * as yup from 'yup';


const formSchema = yup.object().shape({
    name: yup.string().min(2, "name must be at least 2 characters"),
    size: yup.string().oneOf(["small", "medium", "large", "xlarge",], "Please select a size"),
    topping1: yup.string(),
    topping2: yup.string(),
    topping3: yup.string(),
    topping4: yup.string(),
    special: yup.string(),
  });

export default formSchema