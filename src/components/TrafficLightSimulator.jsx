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
    <div className="light-casing">
    <div className="light red"></div>
    <div className="light yellow"></div>
    <div className="light green"></div>
    </div>
    <div className="stand"></div>
    </div>
  );
};




const styleSheet = document.createElement('style');
styleSheet.textContent = `
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f0f0f0;
  }
  
  .traffic-light-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .light-casing {
    width: 140px;
    background-color: #222;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
  }
  
  .light {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    opacity: 0.2;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    position: relative;
    overflow: hidden;
  }
  
  .light::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent);
    opacity: 0;
  }
  
  .light.active {
    opacity: 1;
    transform: scale(1.05);
  }
  
  .light.active::before {
    opacity: 0.3;
  }
  
  .red { background-color: #ff3b3b; }
  .yellow { background-color: #ffeb3b; }
  .green { background-color: #4caf50; }
  
  .stand {
    width: 40px;
    height: 150px;
    background: linear-gradient(to right, #555, #777, #555);
    border-radius: 5px;
    margin-top: -5px;
  }
`;
document.head.appendChild(styleSheet);

export default TrafficLightSimulator;
