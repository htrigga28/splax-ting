import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Mint = () => {
  const [count, setCount] = useState(1);
  return (
    <div className='sc-jRQBWg hjJAWj'>
      <div className='mint-buttons'>
        <div
          onClick={() => {
            if (count >= 1) {
              setCount(count - 1);
            }
          }}
          className='minus'
        >
          <FaMinus size={25} />
        </div>
        <input
          className='sc-furwcr fKhrKp test'
          type={'number'}
          min='1'
          max='2'
          maxLength={2}
          value={count}
          style={{ textAlign: 'center', color: 'var(--accent-text)' }}
        />
        <div
          className='plus'
          onClick={() => {
            if (count <= 1 && count < 2) {
              setCount(count + 1);
            }
          }}
        >
          <FaPlus size={25} />
        </div>
      </div>
      <p style={{ marginTop: '10px' }} className='fKhrKp'>
        Max mint per wallet is 2
      </p>
      <div className='sc-dkPtRN fOCuSz'></div>
      <button className='sc-jrQzAO hbmZCJ'>MINT</button>
    </div>
  );
};

export default Mint;
