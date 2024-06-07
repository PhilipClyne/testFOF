import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";
import reward from "../img/REWARDS_whatsonM.jpg";

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
        <section class="flex flex-col md:flex-row gap-4">
          {/* <!-- Left Section: App Promotion --> */}
          <div class="bg-yellow-400 p-8 rounded-lg flex flex-col justify-center text-center md:w-1/2">
            <p class="text-lg">Tích điểm, đổi quà và ưu đãi</p>
            <h2 class="text-3xl font-bold my-4">ỨNG DỤNG McDONALD'S</h2>
            <a
              href="#"
              class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 inline-block"
            >
              TẢI ỨNG DỤNG
            </a>
          </div>

          {/* <!-- Right Section: Points Promotion --> */}
          <div class="bg-white rounded-lg shadow flex flex-col justify-center text-center md:w-1/2">
            <div class="  flex justify-center space-x-4 mb-4">
              <img src={reward} alt="Rewards on Phone" className="h-[25rem]" />
            </div>
          </div>
        </section>
      </main>
      <div className="flex justify-around mt-32">
        <div className="xl:block lg:hidden md:hidden:sm:hidden">
          <div className="grid grid-cols-2">
            {data.map((product) => (
              <div key={product._id}>
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>
        <ProductCarousel />
      </div>
    </>
  );
};

export default Header;
