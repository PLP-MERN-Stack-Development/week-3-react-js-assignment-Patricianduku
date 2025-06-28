function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}

export default Card;
