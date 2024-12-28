import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredItem = data.filter((item) => item.category === "popular");
        setMenu(filteredItem);
      });
  }, []);

  return (
    <div className="my-28 max-w-screen-xl mx-auto">
      <SectionTitle heading="FROM OUR MENU" subHeading="Check it Out" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menu?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
