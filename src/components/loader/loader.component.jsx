import './loader.styles.scss';

const Loader = ({ loader, children }) => {
  if (loader) {
    return (
      <img 
        className = 'loadre-image'
        src='https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif'
        alt="loader"
      />
    );
  };

  return(
    <div className="loader">
      {children}
    </div>
  );
};

export default Loader;