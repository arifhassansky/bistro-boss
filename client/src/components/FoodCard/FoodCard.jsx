import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item;
  const [, refetch] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddtoCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };

      axiosSecure
        .post("/carts", cartItem)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart succesfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Login to add the food to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddtoCart}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
