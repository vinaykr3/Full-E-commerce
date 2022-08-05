/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import Loading from '../Loading';

const Products = () => {
  const [Filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let ComponentMounted = true;

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      fetch('https://fakestoreapi.com/products').then((res) => {
        return res.json();
      }).then((response) => {
        if (ComponentMounted) {
          setFilter(response);
          setLoading(false);
        }
      })
      return () => {
        ComponentMounted = false;
      }
    }
    getData();
  }, [])

  return (
    <>
      {
        loading ? <Loading /> :
          <section className="text-gray-600 bg-white body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {
                  Filter && Filter.map((items) => {
                    const { id, title, image, price, category } = items;
                    return (
                      <div className="lg:w-1/4 w-1/2 p-4 border border-gray-600 " key={id}>
                        <a className="block relative h-48 rounded overflow-hidden">
                          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={image} />
                        </a>
                        <div className="mt-4">
                          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                          <h2 className="text-gray-900 title-font text-md font-medium">{title}</h2>
                          <p className="mt-1">${price}</p>
                        </div>
                      </div>
                    )
                  })
                }


              </div>
            </div>
          </section>
      }

    </>

  )
}

export default Products

// https://fakestoreapi.com/products