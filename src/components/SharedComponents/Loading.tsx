const Loading: React.FC = () => {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center"
      aria-label="Loading content"
      aria-live="polite"
      role="status"
    >
      <div className="loader mb-4 h-32 w-32 rounded-full border-8 border-t-8 border-gray-200 ease-linear"></div>
      <h2 className="text-center text-xl font-semibold">Loading...</h2>
    </div>
  );
};

export default Loading;
