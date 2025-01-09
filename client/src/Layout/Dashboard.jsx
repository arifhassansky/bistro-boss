import { IoCalendar, IoCartSharp, IoHome, IoMenu } from "react-icons/io5";
import { FaBook, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import {
  MdBookOnline,
  MdContactEmergency,
  MdOutlinePayment,
  MdReviews,
  MdShop,
} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 bg-orange-300 min-h-screen">
        <div className="text-center mb-12 mt-10">
          <h3 className="text-4xl font-bold">Bistro Boss</h3>
          <h4 className="text-4xl font-bold tracking-wider">Resutrant</h4>
        </div>
        {isAdmin ? (
          <>
            <ul className="px-10 space-y-3 text-lg">
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/dashboard/adminHome"
                >
                  <IoHome size={20} />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/dashboard/additem"
                >
                  <FaUtensils size={20} /> Add Items
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/dashboard/manageItems"
                >
                  <FaList size={20} /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/dashboard/bookings"
                >
                  <FaBook size={20} /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/dashboard/users"
                >
                  <FaUsers size={20} /> All Users
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="px-12 space-y-3 text-lg">
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/dashboard/userHome"
                >
                  <IoHome size={20} />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/dashboard/reservation"
                >
                  <IoCalendar size={20} /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/dashboard/payment"
                >
                  <MdOutlinePayment size={20} /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/dashboard/cart"
                >
                  <IoCartSharp size={20} /> My Cart ({cart?.length})
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/dashboard/cart"
                >
                  <MdReviews size={20} /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/dashboard/cart"
                >
                  <MdBookOnline size={20} /> My Bookings
                </NavLink>
              </li>
            </ul>
          </>
        )}

        {/* shared links */}
        <div className="divider my-6"></div>
        <ul className="px-12 space-y-3 text-lg">
          <li>
            <NavLink to="/" className="flex items-center gap-1">
              <IoHome size={20} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className="flex items-center gap-1">
              <IoMenu size={20} />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex items-center gap-1">
              <MdShop size={20} />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex items-center gap-1">
              <MdContactEmergency size={20} />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
