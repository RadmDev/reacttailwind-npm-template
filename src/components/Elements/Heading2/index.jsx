const Heading2 = ({ children, variant }) => {
  return (
    <h2 className={`text-4xl font-bold text-color-primary ${variant}`}>
      {children}
    </h2>
  );
};

export default Heading2;
