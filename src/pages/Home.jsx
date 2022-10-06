import React from "react";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice.js";
import Categories from "../components/Categories";
import Sort, { listSort } from "../components/Sort";
import ProductBlock from "../components/ProductBlock";
import Skeleton from "../components/ProductBlock/Skeleton";
import Pagination from "../components/Pagination";
import { AppContext } from "../App";
import {
  fetchProducts,
  selectProductData,
} from "../redux/slices/productsSlice.js";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectProductData);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const sortType = sort.sortProperty;

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getProducts = async () => {
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const order = sortType.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchProducts({
        sortBy,
        category,
        order,
        search,
        currentPage,
      })
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, currentPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = listSort.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    getProducts();

    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);

  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const products = items.map((obj) => <ProductBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategoty={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All products</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Not found</h2>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : products}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
