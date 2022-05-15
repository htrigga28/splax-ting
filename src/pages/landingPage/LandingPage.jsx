import React, { useState } from 'react';
import './landingPage.css';
import logo from '../../assets/logo.png';
import img1 from '../../assets/first_img.jpg';
import img2 from '../../assets/second.jpg';
import discord from '../../assets/discord.png';
import twitter from '../../assets/twitter.png';
import opensea from '../../assets/opensea.png';
import Mint from '../../components/mintInput/Mint';

const LandingPage = () => {
  const [unclicked, setUnclicked] = useState(true);

  const mint = () => {
    setUnclicked(!unclicked);
  };
  return (
    <div className='fVuTlC'>
      <div className='sc-jRQBWg hJIUsY' style={{ padding: '24px' }}>
        <a target={'_blank'} href='/' rel='noreferrer'>
          <h1 className='logo'>TRTH</h1>
        </a>
        <div className='sc-dkPtRN fOCuSz'></div>
        <div className='sc-iqseJM hCtRMc' style={{ padding: '24px' }}>
          <div className='sc-jRQBWg ecqpxm'>
            <img alt='example' src={img1} className='sc-egiyK ibZGUe' />
          </div>
          <div className='sc-eCImPb bXSuWo'></div>
          <div
            className='sc-jRQBWg iGONVV'
            style={{
              backgroundColor: 'blue',
              padding: '24px',
              borderRadius: '24px',
              border: '4px dashed var(--secondary)',
              boxShadow: 'rgba(0, 0, 0, 0.7) 0px 5px 11px 2px',
            }}
          >
            <p
              className='sc-gKclnd hTaLOw'
              style={{
                textAlign: 'center',
                fontSize: '50px',
                fontWeight: 'bold',
                color: 'var(--accent-text)',
              }}
            >
              0 / 1010
            </p>
            <p
              className='sc-furwcr fKhrKp'
              style={{ textAlign: 'center', color: 'var(--accent-text)' }}
            >
              <a
                target='_blank'
                href='https://etherscan.io/address/0x87dcb78443F9814e300F5dafe8eAf46A34832742'
                className='sc-bqiRlB cKgmqo'
                rel='noreferrer'
              >
                0x87dcb78443F98...
              </a>
            </p>
            <div className='sc-dkPtRN fOCuSz'></div>
            <p
              className='sc-gKclnd hTaLOw'
              style={{ textAlign: 'center', color: 'var(--accent-text)' }}
            >
              1 TRTH costs 0.0333 Eth.
            </p>
            <div className='sc-gsDKAQ cawakT'></div>
            <p
              className='sc-furwcr fKhrKp'
              style={{ textAlign: 'center', color: 'var(--accent-text)' }}
            >
              Excluding gas fees.
            </p>
            <div className='sc-dkPtRN fOCuSz'></div>
            {unclicked ? (
              <div className='sc-jRQBWg hjJAWj'>
                <p
                  className='sc-furwcr fKhrKp'
                  style={{ textAlign: 'center', color: 'var(--accent-text)' }}
                >
                  Connect to the Ethereum network
                </p>
                <div className='sc-dkPtRN fOCuSz'></div>
                <button onClick={mint} className='sc-jrQzAO hbmZCJ'>
                  CONNECT
                </button>
              </div>
            ) : (
              <Mint />
            )}
            <div className='sc-hKwDye fcfOfo'></div>
            <div className='socials'>
              <a
                href='https://discord.gg/BUUAj8AQ'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img className='discord' src={discord} />
              </a>
              <a
                href='https://twitter.com/alfa_pass'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img className='twitter' src={twitter} />
              </a>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                <img className='opensea' src={opensea} />
              </a>
            </div>
          </div>
          <div className='sc-eCImPb bXSuWo'></div>
          <div className='sc-jRQBWg ecqpxm'>
            <img alt='example' src={img2} className='sc-egiyK ibZGUe' />
          </div>
        </div>
        <div className='sc-hKwDye fcfOfo'></div>
        <div className='sc-jRQBWg hjJAWj' style={{ width: '70%' }}>
          <p
            className='sc-furwcr fKhrKp'
            style={{ textAlign: 'center', color: 'var(--accent-text)' }}
          >
            Please make sure you are connected to the right network (Ethereum
            Mainnet) and the correct address.
          </p>
          <div className='sc-dkPtRN fOCuSz'></div>
          {/* <p
            className='sc-furwcr fKhrKp'
            style={{ textAlign: 'center', color: 'var(--accent-text)' }}
          >
            Genesis Passes:{' '}
            <a href='https://opensea.io/collection/revolutionary-alpha'>
              Revolutionary Alpha Passes
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
