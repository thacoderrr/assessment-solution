// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types'
const TableDisp = () => {
  return (
    <div className="table w-full h-full py-3">
      <header className="grid grid-cols-4 border border-solid border-y-black py-2 px-1">
        <div className="cols-span-1 ">S/N</div>
        <div className="cols-span-1">Amount</div>
        <div className="cols-span-1">Decription</div>
        <div className="cols-span-1">Timestamp</div>
      </header>
    </div>
  );
};

export default TableDisp;

export const TableData = ({ data, index}) => {
  return (
    <div className="grid grid-cols-4 border border-solid border-y-black py-2 px-1">
      <div className="cols-span-1 ">{index}</div>
      <div className="cols-span-1">{data?.amount}</div>
      <div className="cols-span-1">{data?.description}</div>
      <div className="cols-span-1">{data?.createdAt}</div>
    </div>
  )
}

TableData.propTypes = {
  data: PropTypes.object,
  index: PropTypes.any
}