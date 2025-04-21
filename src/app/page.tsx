"use client"
import React, { useEffect } from "react";
import Table from "./components/table";
import { getProductsPagination } from "./api/products/product-service";
import SideBar from "./components/sidebar";
import { ProductsPagination } from "./api/products/models/products";
import { FilterPagination } from "./models/filterPagination";


let filtersPagination = {
  paging: {
    page: 0,
    size: 20
  },
  filters: {
    brand: '',
    status: []
  }
}

export default function Home() {
  const [products, setProducts] = React.useState<ProductsPagination>();
  const [filter, setFilter] = React.useState<FilterPagination>(filtersPagination);
  const [loading, setLoading] = React.useState<boolean>(true)

  const getDataPagination = (filters: any) => {
    setLoading(true);

    getProductsPagination(filters).then((res: ProductsPagination) => {
      setProducts(res);
    }).catch(error => {
      console.log(error);
    }).finally(() => setLoading(false));
  }

  useEffect(() => {
    getDataPagination(filter);
  }, [filter])

  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-12 col-xl-2 bg-light m-2 rounded">
            <SideBar setFilter={setFilter}></SideBar>
          </div>

          <div className="col bg-light m-2 pt-2 rounded">
            {!loading ?
              <Table data={products} setFilter={setFilter}></Table>
              : <p className="w-100 text-center">Cargando productos...</p>
            }
          </div>
        </div>
      </div>
    </>
  );
}

