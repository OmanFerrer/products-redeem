import Points from '../../../components/Points';

const ProductCard = ({ product, userPoints, onSelect }) => {
  const { img, name, cost } = product;
  const canRedeem = userPoints >= cost;
  const percentage = `${String((userPoints / cost) * 100)}%`;

  const onRedeem = () => {
    onSelect(product._id);
  };

  return (
    <div className="py-4 px-4 bg-white rounded-xl shadow-md space-y-1">
      <img className="block mx-auto h-32 
        transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        src={img?.url} alt={name} />
      <div className="relative">
        <p className="text-md text-black font-semibold text-center mb-2">{name}</p>
        <div className="flex items-end justify-between">
          <div className="flex-1 space-y-0.5">
            <Points text={`${cost} Points`} size={12} textClasses="text-xs text-yellow-400" />
          </div>
          {canRedeem ?
            <button className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 
              hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:text-white focus:bg-blue-600 focus:border-transparent"
              onClick={onRedeem}>
                REDEEM
            </button> :
            <span className="text-xxs leading-relaxed font-semibold inline-block text-gray-400">
              {`${cost - userPoints} to Redeem`}
            </span>
          }
        </div>
        {!canRedeem &&
          <div className="overflow-hidden h-2 mt-1 text-xs flex rounded bg-yellow-200 bg-opacity-60">
            <div style={{ width: percentage }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
          </div>}
      </div>
    </div>
  )
};

export default ProductCard;