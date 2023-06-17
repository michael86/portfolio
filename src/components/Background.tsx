const Background = () => {
  const count = 30;
  return (
    <div className="particle-container">
      {[...Array(count)].map((_, i) => (
        <div className="particle" key={i}></div>
      ))}
    </div>
  );
};

export default Background;
