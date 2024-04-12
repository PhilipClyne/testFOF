import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useGetProductsQuery } from "../redux/api/productApiSlice";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });
  return <>{!keyword ? <Header /> : null}</>;
};

export default Home;
