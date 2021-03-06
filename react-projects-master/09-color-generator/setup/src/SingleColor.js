import React, {useState, useEffect} from 'react';
import rgbToHex from './utils';

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState (false);
  const bg = rgb.join (',');
  const hexValue = `#${hexColor}`
  
  const copyHandler = () => {
     setAlert(true);
     navigator.clipboard.writeText(hexValue);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000)

    return () => clearTimeout(timeout);
  }, [alert])
  
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{backgroundColor: `rgb(${bg})`}}
      onClick={copyHandler}
    >
      <p className="percent-value">
        {weight}%
      </p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
