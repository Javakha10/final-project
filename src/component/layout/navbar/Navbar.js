import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../../context/productContext";

const Navbar = () => {
  const { mainPageProducts } = useContext(productContext);
  return (
    <div>
      {mainPageProducts?.categories?.lenght > 0 &&
        mainPageProducts.categories.map((category) => {
          return (
            <Link
              to={`/products/categories/${category.name}?page=1`}
              key={category.id}
            >
              {category.name}
            </Link>
          );
        })}
    </div>
  );
};

export default Navbar;
