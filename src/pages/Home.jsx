import React from "react";
import Categories from "../components/categories";
import Sort from "../components/sort";
import PizzaBlock from "../components/PizzaBlock/pizzaBlock";
import { useEffect, useState } from "react";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";


const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "Popularity",
    sort: "rating",
  });

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://658c5d19859b3491d3f5faa3.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sort}&order=desc`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={number => setCurrentPage(number)} />
    </>
  );
};

export default Home;
