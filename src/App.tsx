import { Button } from "./components/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useCallback, useState } from "react";
import { images, IMAGE_ARRAY_LENGTH } from "./config/images";
function App() {
  const [counter, setCounter] = useState<number>(0);

  const handleAdvanceButton = useCallback(async () => {
    if(counter >= IMAGE_ARRAY_LENGTH - 1) {
      setCounter(0);
      return;
    }
    setCounter(counter + 1);
  }, [counter, setCounter]);

  const handleGetBackCounter = useCallback(async () => {
    if(counter === 0) {
      setCounter(IMAGE_ARRAY_LENGTH - 1);
      return
    }
    setCounter(counter - 1);
  }, [counter, setCounter]);

  return (
    <>
      <Button
        icon={<FiChevronLeft />}
        handleClickButton={handleGetBackCounter}
      />
      <img src={images[counter].image} alt={images[counter].image} />
      <Button
        icon={<FiChevronRight />}
        handleClickButton={handleAdvanceButton}
      />
    </>
  );
}

export default App;
