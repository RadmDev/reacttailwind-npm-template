const Badge = ({ children, variant }) => {
  return (
    <div
      className={`flex flex-row items-center px-6 py-3 rounded-full w-fit gap-x-3 ${variant}`}
    >
      {children}
    </div>
  );
};

export default Badge;
