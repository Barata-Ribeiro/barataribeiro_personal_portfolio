import { ErrorProps } from '../../@types';

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center"
      role="alert"
      aria-live="polite"
    >
      <h2 className="mb-4 text-center text-3xl font-semibold text-red-500">Oops!</h2>
      <p className="text-center text-lg">{message}</p>
    </div>
  );
};

export default Error;
