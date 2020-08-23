import React from 'react';
import s from './Frame.module.css';
// import image from '../../../assets/images/Photo.png';

const Frame = (props) => {
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
    
    // ctx.globalAlpha=0.50;
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

    if (props.hasOwnProperty('available')) {
      if (!props.available) {
        ctx.globalAlpha=1;
        // ctx.fillStyle = '#ffffff80';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.502)';
        ctx.strokeStyle = '#b3b3b3';
        ctx.fill();
      } else {
        ctx.globalAlpha=0;
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }
    } else if(props.choise === 'sel') {
      ctx.strokeStyle = '#d91667';
    } else if(props.choise === 'def') {
      ctx.strokeStyle = '#1698d9';
    } else if(props.choise === 'defHover') {
      ctx.strokeStyle = '#2ea8e6';
    } else if(props.choise === 'selHover') {
      ctx.strokeStyle = '#e62e7a';
    }

    ctx.beginPath();
    ctx.moveTo(42, 0);
    ctx.lineTo(310, 0);
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.bezierCurveTo(308, 1.5, 318, 2, 318.5, 12);
    ctx.stroke();
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(320, 10);
    ctx.lineTo(320, 470);
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.bezierCurveTo(318.5, 468, 318, 478, 308, 478.5);
    ctx.stroke();
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(310, 480);
    ctx.lineTo(10, 480);
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.bezierCurveTo(12, 478.5, 2, 478, 1.5, 468);
    ctx.stroke();
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, 470);
    ctx.lineTo(0, 42);
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0.5, 42.5);
    ctx.lineTo(42.5, 0.5);
    ctx.stroke();
    ctx.fill();
  })

  return (
    <canvas className={props.flag === 'frame1' ? s.frame1 : s.frame2} ref={canvasRef} width='320' height='480' />
  );
  
}

export default Frame;
