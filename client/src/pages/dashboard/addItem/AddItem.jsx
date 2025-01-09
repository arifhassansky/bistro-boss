import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API}`,
      imageFile,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    );
    console.log(res.data);
  };

  return (
    <div className="px-20">
      <SectionTitle heading="Add a Menu Item" subHeading="What's new" />

      <div className="bg-gray-100 px-16 py-8 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="Enter recipe name"
              {...register("name", { required: true })}
              className="input input-bordered"
            />
          </div>

          <div className="flex gap-8 mt-4">
            {/* Category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Enter price"
                {...register("price", { required: true })}
                className="input input-bordered"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div className="form-control w-full mt-6">
            <textarea
              className="textarea textarea-bordered"
              {...register("recipe")}
              placeholder="Enter recipe details here"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="form-control w-full mt-10">
            <input
              type="file"
              {...register("image", { required: true })}
              accept="image/*"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button type="submit" className="btn bg-orange-400 border-none">
              Add Item
              <span className="ml-2">
                <FaUtensils />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
