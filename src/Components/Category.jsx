import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromised = fetch("/categories.json").then((res) => res.json());

const Category = () => {
  const categorys = use(categoryPromised);
  console.log(categorys);
  return (
    <div>
      <h2 className="font-bold">All Caterogy ({categorys.length})</h2>
      <div className="grid grid-cols-1 mt-7 gap-3">
        {categorys.map((category) => (
          <NavLink
            key={category.id}
            className={
              "btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-gray-500"
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
