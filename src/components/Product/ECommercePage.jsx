import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import LoadingOverlay from 'react-loading-overlay';
import Product from './Product';
import fetchProducts from './fetchProducts';

const ECommercePage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetchProducts().then((data) => {
  //     setProducts(data);
  //     setLoading(false);
  //   });
  // }, []);
  useEffect(() => {
    fetchProducts().then((data) => {
      const limitedData = data.slice(0, 10); // Limit to 10 records
      setProducts(limitedData);
      setTimeout(() => {
        setLoading(false);
      }, 3000); // 3-second delay
    });
  }, []);
  
  return (
    <LoadingOverlay
      active={loading}
      spinner={<Circles />}
      text='Loading products...'
    >
      <div className='product-list'>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </LoadingOverlay>
  );
};

export default ECommercePage;
