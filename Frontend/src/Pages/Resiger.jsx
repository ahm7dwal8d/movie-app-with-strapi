import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

export default function Resiger() {
  const navigate = useNavigate();
  async function setValueToApi(values) {
    console.log(values);
    const { username, email, password, phone, rePassword } = values;
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/auth/signup `,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            // rePassword: rePassword,
            phone: phone,
          }),
        }
      );
      const data = await res.json();
      if (data.statusMsg === "fail") {
        toast.error(data.message);
      } else {
        toast.success(`Hello ${data?.user?.name}`);
        navigate("/");
      }
      return data;
    } catch (err) {
      toast.error(err.message);
    }
  }
  const formlikObj = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: function (value) {
      setValueToApi(value);
    },
    validate: function (values) {
      const errors = {};
      if (!values.username) {
        errors.usename = "The UserName Is required";
      }
      if (!values.email) {
        errors.email = "You Miss (@ || .) In Email Input";
      }
      if (!values.password) {
        errors.password = "The Password should be 10 number ";
      }
      // if (!values.rePassword) {
      //   errors.password = "The Password should be 10 number ";
      // }
      if (!values.phone) {
        errors.phone = "You Phone Is required";
      }
      return errors;
    },
  });
  return (
    <div className="mt-4">
      <div className="container m-auto">
        <h1>Resiger</h1>
        <form className="m-auto w-3/4" onSubmit={formlikObj.handleSubmit}>
          <div className="mt-4">
            <label className="block" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              name=""
              id="username"
              className="block w-full p-1 focus:outline-none mt-2"
              placeholder=""
              onChange={formlikObj.handleChange}
              value={formlikObj.values.username}
            />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="email">
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
            <label className="block" htmlFor="password">
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
          <div className="mt-4">
            <label className="block" htmlFor="Repassword">
              Repassword:
            </label>
            <input
              type="password"
              name=""
              id="Repassword"
              className="block w-full p-1 focus:outline-none mt-2"
              placeholder=""
              onChange={formlikObj.handleChange}
              value={formlikObj.values.rePassword}
            />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="phone">
              phone:
            </label>
            <input
              type="tel"
              name=""
              id="phone"
              className="block w-full p-1 focus:outline-none mt-2"
              placeholder=""
              onChange={formlikObj.handleChange}
              value={formlikObj.values.phone}
            />
          </div>
          <button className="bg-red-600 mt-4 capitalize p-2 w-40" type="submit">
            login
          </button>
        </form>
        <ToastContainer />
        <h4 className="text-center capitalize">
          you hava any account <Link to={"/"}>Sign Up</Link>
        </h4>
      </div>
    </div>
  );
}
