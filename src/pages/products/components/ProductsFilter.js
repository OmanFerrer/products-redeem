import DropDown from "../../../components/dropdown/DropDown";
import DropDownItem from "../../../components/dropdown/DropDownItem";
import DropDownItemSeparator from "../../../components/dropdown/DropDownItemSeparator";
import {filters} from "../../../utils/filters";

const ProductsFilter = ({ selected, onChange }) => {
  return (
    <>
      <div className="flex flex-wrap justify-end">
        <div className="w-auto px-4">
          <div className="relative inline-flex align-middle w-full">
            <div className="flex items-end">
              <span className="text-sm text-gray-500 mt-5">Sort by</span>
              <DropDown onChange={onChange} selected={filters[selected || 'mostrecent']}>
                <DropDownItem label={filters.mostrecent} value={"mostrecent"} />
                <DropDownItemSeparator />
                <DropDownItem label={filters.lowestprice} value={"lowestprice"} />
                <DropDownItem label={filters.highestprice} value={"highestprice"} />
              </DropDown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsFilter;