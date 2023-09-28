import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  async function login(values) {
    const { email, password } = values;
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      toast.success(`Welcome ${data.username}`);
      if (data.statusMsg === "fail") {
        toast.error(data.message);
      } else {
        navigate("/home");
      }
      return data;
    } catch (err) {
      toast.error(err.message);
    }
  }
  const formlikObj = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: function (value) {
      login(value);
    },
    validate: function (values) {
      const errors = {};
      if (!values.email) {
        errors.email = "The Email Is required";
      }
      if (!values.password) {
        errors.password = "The Password Is required";
      }
    },
  });
  return (
    <div className="mt-4 h-screen">
      <div className="container m-auto">
        <h1 className="text-black dark:text-white">Login</h1>
        <form className="m-auto w-3/4" onSubmit={formlikObj.handleSubmit}>
          <div className="mt-4">
            <label className="block text-black dark:text-white" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="block w-full p-1 focus:outline-none mt-2"
              onChange={formlikObj.handleChange}
              placeholder=""
              value={formlikObj.values.email}
            />
          </div>
          <div className="mt-4">
            <label
              className="block text-black dark:text-white"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              type="password"
              name=""
              id="password"
              className="block w-full p-1 focus:outline-none mt-2"
              placeholder=""
              onChange={formlikObj.handleChange}
              value={formlikObj.values.password}
            />
          </div>
          <button className="bg-red-600 mt-4 capitalize p-2 w-40" type="submit">
            login
          </button>
        </form>
        <ToastContainer />
        <h4 className="text-center capitalize mt-6 text-black dark:text-white">
          you don't hava any account <Link to={"/Resiger"}>Sign Up</Link>
        </h4>
      </div>
    </div>
  );
}
