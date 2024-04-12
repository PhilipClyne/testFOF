import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  return (
    <div className="w-[20rem] ml-[2rem] p-3 border-2 border-gray-300 ">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-[15rem] w-[15rem] rounded"
        />
        {/* <HeartIcon product={product} /> */}
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div>{product.name}</div>
            <span className=" text-pink-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full bg-pink-600 dark:text-pink-300">
              ${product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SmallProduct;
