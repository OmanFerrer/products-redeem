import React from 'react'

const DropDownItem = ({ label, value, onChange }) => {
  return (
    <button className="text-sm py-2 px-4 outline-none focus:outline-none"
      type="button"
      onClick={() => onChange(value)}>
      {label}
    </button>
  )
};

export default DropDownItem;
