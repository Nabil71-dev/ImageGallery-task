import React, { forwardRef } from 'react';

export const Photo = forwardRef(({ url, index, faded, style, ...props }, ref) => {
  const { selected, setSelected } = { ...props }
  const inlineStyles = {
    opacity: faded ? '0.2' : '1',
    transformOrigin: '0 0',
    height: index === 0 ? 395 : 190,
    backgroundImage: `url("${url}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-reapet',
    borderRadius: '5px',
    ...style,
  };

  const handleCheck = (id) => {
    if (selected?.includes(id)) {
      const arr = selected?.filter((item, index) => index != id)
      setSelected(arr)
    }
    else {
      setSelected([...selected, id])
    }
  }

  return (
    <>
      {
        <div style={{
          position: 'relative', height: index === 0 ? 395 : 190,
          gridRowStart: index === 0 ? 'span 2' : null,
          gridColumnStart: index === 0 ? 'span 2' : null,
        }}>
          <div ref={ref} style={inlineStyles} {...props} />
          <input type="checkbox" className="border border-danger m-2 card-check" onClick={() => handleCheck(index)} />
        </div>
      }
    </>
  )
});