import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="w-[20rem] ml-[2rem] p-3 relative">
      <div className="relative w-full h-[20rem]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md border-2 border-slate-500"
        />
        <HeartIcon product={product} className="absolute top-2 right-2" />
      </div>

      <div className="p-2">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex items-center justify-between">
            <div className="text-lg truncate">{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              ${product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
