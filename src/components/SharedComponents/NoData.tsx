const NoData: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-center text-3xl font-semibold">No Data Available</h2>
      <p className="text-center text-lg">Please check back later.</p>
    </div>
  );
};

export default NoData;
