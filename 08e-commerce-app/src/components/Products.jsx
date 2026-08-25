// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../features/Products/productSlice";

// function Products() {
//   const dispatch = useDispatch();

//   const { products, loading, error } = useSelector(
//     (state) => state.products
//   );

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (loading) return <h1>Loading...</h1>;

//   if (error) return <h1>{error}</h1>;

//   return (
//     <>
//       {products.map((item) => (
//         <div key={item.id}>
//           {item.title}
//         </div>
//       ))}
//     </>
//   );
// }

// export default Products;


import { useGetProductsQuery } from "../features/api/productApi";

function Products() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <>
      {data.products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </>
  );
}

export default Products;