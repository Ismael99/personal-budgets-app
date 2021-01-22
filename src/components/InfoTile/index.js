import React from 'react';

const InfoTile = ({ transactionType ,amount }) => (
  <div className="flex flex-col content-center m-8">
    <div className="flex flex-row justify-between p-2">
      <div className="text-2xl font-semibold">
        {transactionType}
      </div>
      <div className="text-gray-500 text-right underline">ver mas</div>
    </div>
    <div className="justify-center m-2 pl-6 pr-6 pt-2">
      <p className="text-black text-5xl text-center">{`$${amount}`}</p>
    </div>
  </div>
);

export default InfoTile;
