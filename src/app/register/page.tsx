import RegisterView from "@/views/Register";
import { API_BASE_URL } from "@/utils";

// const signUpApiCall = async (form: any) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/api-clients`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//       cache: "no-store",
//     });
//     if (!response.ok) {
//       throw new Error("Something went Wrong");
//     }
//     return response.json();
//   } catch (error) {
//     return error;
//   }
// };

const Register = () => {
  return <RegisterView />;
};
export default Register;
