import React from "react";
import McCoffe from "../img/McCoffe.png";
import Car from "../img/car.png";
import human from "../img/human.png";
import Burger from "../img/burger.png";
const Content = () => {
  return (
    <section className="rounded-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full">
            <div className="flex flex-wrap mt-6">
              <div className="w-full md:w-1/2 p-2">
                <a href="https://mcdonalds.vn/mccafe">
                  <img
                    className="w-full hidden md:block"
                    src={McCoffe}
                    alt=""
                  />
                </a>
                <div className="text-center mt-2">McCAFÉ</div>
              </div>
              <div className="w-full md:w-1/2 p-2">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 p-2">
                    <a href="https://mcdonalds.vn/tim-hieu/lich-su-1.html">
                      <img
                        className="w-full hidden md:block"
                        src={Car}
                        alt=""
                      />

                      <div className="text-center mt-2">
                        CÂU CHUYỆN VỀ McDONALD'S
                      </div>
                    </a>
                  </div>
                  <div className="w-full md:w-1/2 p-2">
                    <a href="https://mcdonalds.talent.vn/?utm_source=McDonalds.vn-Home&amp;utm_medium=Session&amp;utm_campaign=HR">
                      <img
                        className="w-full hidden md:block"
                        src={human}
                        alt=""
                      />

                      <div className="text-center mt-2">TUYỂN DỤNG</div>
                    </a>
                  </div>
                  <div className="w-full p-2">
                    <a href="http://mcdonalds.vn/thuc-don/chinh/banh-burgers">
                      <img className="w-full" src={Burger} alt="" />
                      <div className="text-center mt-2">
                        HAMBURGER <br />
                        KHÁM PHÁ VỊ NGON LỪNG DANH
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
