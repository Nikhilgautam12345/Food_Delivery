export const Randomcolour = () => {
    let color;
    do {
      color = Math.floor(Math.random() * 16777216).toString(16);
      color = '#000000'.slice(0, -color.length) + color;
    } while (color === '#ffffff'); 
    return color;
  };
  
