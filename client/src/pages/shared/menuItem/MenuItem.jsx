const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item || {};
  return (
    <div className="flex gap-4">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[118px] h-[104px]"
        src={image}
      />
      <div>
        <h2 className="uppercase">{name}-------------</h2>
        <p>{recipe}</p>
      </div>
      <span className="text-yellow-500">{price}</span>
    </div>
  );
};

export default MenuItem;
