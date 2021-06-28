import { createRef, useState, cloneElement, Children } from "react";
import { createPopper } from "@popperjs/core";
import chevDown from '../../images/chev-down.svg';

const DropDown = ({ selected, children, onChange }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const handleClick = () => {
    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
  };
  const handleChange = value => {
    setDropdownPopoverShow(false);
    onChange(value);
  };
  return (
    <>
      <button className="flex items-center text-sm mt-5 ml-2 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button" ref={btnDropdownRef} onClick={handleClick}>
        {selected}
        <img className="ml-1" src={chevDown} width={15} alt="down" />
      </button>
      <div ref={popoverDropdownRef}
        className={`${dropdownPopoverShow ? "block" : "hidden"} text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white`}
        style={{ minWidth: "12rem" }}>
        {Children.map(children, child => cloneElement(child, { onChange: handleChange }))}
      </div>
    </>
  );
};

export default DropDown;