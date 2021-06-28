import { useState } from "react";
import ProductsList from './components/ProductsList';
import ProductsFilter from './components/ProductsFilter';
import { useGetProductsQuery, useRedeemMutation } from '../../services/api';
import { filtersMethods } from "../../utils/filters";
import { useToasts } from 'react-toast-notifications';

const ProductsPage = ({ user }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const { data: products } = useGetProductsQuery();
  const [redeem] = useRedeemMutation();
  const { addToast } = useToasts();

  const handleFilterChange = filter => {
    setSelectedFilter(filter);
  };

  const getOrderedProducts = () => {
    let orderedProducts = products ? [...products] : [];
    if (filtersMethods[selectedFilter]) {
      orderedProducts = orderedProducts.sort(filtersMethods[selectedFilter]);
    }
    return orderedProducts;
  };

  const redeemProduct = async productId => {
    try {
      const result = await redeem(productId).unwrap();
      addToast(result.message, { appearance: 'success', autoDismiss: true });
    } catch {
      addToast("We couldn't complete your redeem, try again!", { appearance: 'error', autoDismiss: true });
    }

  };

  return (
    <>
      <div className="bg-header-electronics h-40 xs:h-48 md:h-60 lg:h-72 bg-100% xs:bg-cover xs:bg-center"></div>
      <main className="lg:max-w-screen-lg mx-auto">
        <ProductsFilter onChange={handleFilterChange} selected={selectedFilter} />
        <ProductsList products={getOrderedProducts()} user={user} onProductSelect={redeemProduct} />
      </main>
    </>
  )
};

export default ProductsPage;
