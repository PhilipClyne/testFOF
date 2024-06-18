import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";
import TopHeader from "./TopHeader";
import Content from "./Content";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <>
      <main class="container mx-auto mt-24">
        <TopHeader />
        <Content />
        <div className="flex justify-around mt-8">
          <ProductCarousel />
          <div className="xl:block lg:hidden md:hidden:sm:hidden">
            <div className="grid grid-cols-2">
              {data.map((product) => (
                <div key={product._id}>
                  <SmallProduct product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
