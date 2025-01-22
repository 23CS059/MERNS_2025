const Gallery = (props1) => {
  return (
    <div>
      <h2>Welcome to {props1.page} page</h2>
      <img src="secefrontend\src\assets\logo.png" alt="" />
      <h3>The image is {props1.img}</h3>
    </div>
  );
};
export default Gallery;