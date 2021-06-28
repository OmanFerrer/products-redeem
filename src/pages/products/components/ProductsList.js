import ProductCard from './ProductCard';

const ProductsList = ({ products, user, onProductSelect }) => {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {products.map(product =>
        <ProductCard key={product._id} product={product} userPoints={user?.points} onSelect={onProductSelect} />
      )}
    </div>
  );
};

export default ProductsList;