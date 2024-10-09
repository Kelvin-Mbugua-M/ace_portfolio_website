import React,{ useEffect ,useState } from 'react';
const Loop = ({data,marker}) => {
    const [title, setTitle] = useState("");
    const targetString = `  ${data}`;
    const clearDelay = 100;
    const displayDelay = 300;
    let charIndex = 0;
    let isClearing = false;
    let intervalFrame;
    useEffect(() => {
      const updateTitle = () => {
        if (!isClearing) {
          if (charIndex < targetString.length - 1) {
            setTitle((prevText) => prevText + targetString[charIndex]);
            charIndex++;
          } else {
            isClearing = true;
            clearInterval(intervalFrame);
            intervalFrame = setInterval(() => {
              if (charIndex > 0) {
                setTitle((prevText) => prevText.slice(0, -1));
                charIndex--;
              } else {
                clearInterval(intervalFrame);
                setTimeout(() => {
                  charIndex = 0;
                  isClearing = false;
                  intervalFrame = setInterval(updateTitle, displayDelay);
                }, 500);
              }
            }, clearDelay);
          }
        }
      };
  
      intervalFrame = setInterval(updateTitle, displayDelay);
  
      return () => clearInterval(intervalFrame);
    }, []);
    return<>{title}{marker} </>
}

export default Loop