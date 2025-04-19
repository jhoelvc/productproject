"use client"
import React, { useEffect } from "react";
import Table from "./components/table";
import { getProducts } from "./api/products/product-service";
import SideBar from "./components/sidebar";
import { ProductsPagination } from "./api/products/models/products";
import { filters } from "./constants";

export default function Home() {
  const [products, setProducts] = React.useState<ProductsPagination>();

  const getData = () => {
    getProducts().then((res: ProductsPagination) => {
      setProducts(res);
    });
  }

  const handleChangeState = (filter: any) => {
    console.log(filters[filter.input as keyof typeof filters].find(o => o.id === filter.value))
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-2 bg-secondary m-2 rounded">
            <SideBar onChangeState={handleChangeState}></SideBar>
          </div>

          <div className="col bg-secondary m-2 pt-2 rounded">
            {products ?
              <Table data={products}></Table>
              : <p className="w-100 text-center">Cargando productos...</p>
            }
          </div>
        </div>
      </div>
    </>
  );
}
