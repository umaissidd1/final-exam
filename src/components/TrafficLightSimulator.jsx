import React from 'react';

const TrafficLightSimulator = () => {
    const [activeLight, setActiveLight] = useState('red');


useEffect(() => {
    const timer = setInterval(() => {
      setActiveLight(prev => {
        if (prev === 'red') return 'yellow';
        if (prev === 'yellow') return 'green';
        return 'red';
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

    

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
    transition: all 0.5s ease;
  }
  
  .light.active {
    opacity: 1;
    box-shadow: 
      0 0 20px 5px rgba(255, 255, 255, 0.7),
      inset 0 0 10px rgba(255, 255, 255, 0.5);
  }
  
  .red.active { box-shadow: 0 0 20px 5px rgba(255, 0, 0, 0.7); }
  .yellow.active { box-shadow: 0 0 20px 5px rgba(255, 255, 0, 0.7); }
  .green.active { box-shadow: 0 0 20px 5px rgba(0, 255, 0, 0.7); }
`;
document.head.appendChild(styleSheet);

export default TrafficLightSimulator;

  
