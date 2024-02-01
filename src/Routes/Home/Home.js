import React from 'react'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import Products from '../../components/products/Products';

function Home({ data }) {
  console.log(data);
  return (
    <div>
      <Banner />
      <Products data={data} />
      <Footer />
    </div>
  )
}

export default Home