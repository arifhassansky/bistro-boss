import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { imageUpload } from "../../utils/imageUpload";

const SignUp = () => {
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn();
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      const res = await axiosPublic.post("/users", userInfo);
      if (res.data) {
        toast.success("Registration successful!");
        navigate("/");
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("Google Sign-In failed. Please try again.");
    }
  };

  const onSubmit = async (data) => {
    // Extract image file from the form
    const imageFile = data.image[0];
    const photoUrl = await imageUpload(imageFile);

    // Create user and update profile
    await createUser(data.email, data.password);
    await updateUserProfile(data.name, photoUrl);

    // Save user info to the database
    const userInfo = {
      name: data.name,
      email: data.email,
      photo: photoUrl,
    };

    const res = await axiosPublic.post("/users", userInfo);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Sign Up successful",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      navigate("/");
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | Bistro Boss</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="input input-bordered"
                />
                {errors.image && (
                  <span className="text-red-600">Photo is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must include one uppercase, one lowercase, and one
                    special character.
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="divider">or</div>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Login
              </Link>
            </p>
            <div className="text-center mt-4">
              <button onClick={handleGoogleLogin} className="btn btn-outline">
                Sign Up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
