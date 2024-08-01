import { createContext, useState, useContext } from 'react';

const FullScreenContext = createContext();

export const useFullScreen = () => useContext(FullScreenContext);

const FullScreenProvider = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    const element = document.documentElement;
    if (!isFullScreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();   

      } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();   

      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen)   
 { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);   

  };

  return (
    <FullScreenContext.Provider value={{ isFullScreen, handleFullScreen }}>
      {children}
    </FullScreenContext.Provider>
  );
};

export default FullScreenProvider;
