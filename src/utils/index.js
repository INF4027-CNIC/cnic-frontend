export const generateImage = () => {
  // Generate avatar randomly

  const random = Math.floor(Math.random() * 1000);

  return `https://i.pravatar.cc/150?img=${random}`; 
}