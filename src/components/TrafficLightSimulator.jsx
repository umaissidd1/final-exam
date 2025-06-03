import React from 'react';

const TrafficLightSimulator = () => {
    const [activeLight, setActiveLight] = useState('red');

  return (
    <div className="traffic-light-container">
      <div className="light red"></div>
      <div className="light yellow"></div>
      <div className="light green"></div>
    </div>
  );
};




const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .traffic-light-container {
    width: 120px;
    background-color: #333;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin: 50px auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  
  .light {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }
  
  .light.active {
    opacity: 1;
  }
  
  .red { background-color: #ff0000; }
  .yellow { background-color: #ffff00; }
  .green { background-color: #00ff00; }
`;
document.head.appendChild(styleSheet);

export default TrafficLightSimulator;
