import SectionTitle from "../../../components/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="p-24 featured bg-fixed text-white">
      <SectionTitle subHeading="Check it Out" heading="FROM OUR MENU" />
      <div className="flex justify-start items-center gap-16 max-w-screen-xl mx-auto px-16">
        <img className="w-[648px]" src={featured} alt="" />

        <div>
          <h3 className="">March 20, 2023</h3>
          <h2 className="uppercase">Where I get some?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="border-b-4 mt-6 text-white rounded-md">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
