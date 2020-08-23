import React from 'react';
import s from './FrameBckgr.module.css';

const FrameBckgr = (props) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d');

    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#1698d9';
    canvas.style.width = '320px';
    canvas.style.height = '480px';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(42, 0);
    ctx.lineTo(310, 0);
    ctx.bezierCurveTo(308, 1.5, 318, 2, 318.5, 12);
    ctx.lineTo(320, 470);
    ctx.bezierCurveTo(318.5, 468, 318, 478, 308, 478.5);
    ctx.lineTo(10, 480);
    ctx.bezierCurveTo(12, 478.5, 2, 480, 1.5, 468);
    ctx.lineTo(0, 42);
    ctx.lineTo(42, 0);
    ctx.fill();
  })

  return (
    <canvas className={s.frameBckgr} ref={canvasRef} width='320' height='480' />
  );
  
}

export default FrameBckgr;
