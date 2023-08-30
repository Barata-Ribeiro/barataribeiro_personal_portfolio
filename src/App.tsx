import useFetch from './hooks/useFetch';
import { Project, IntensiveCourse } from './types';

interface Data {
  projects: Project[];
  intensiveCourses: IntensiveCourse[];
}

const App = () => {
  const { data, loading, error } = useFetch<Data>('/assets/data/data.json');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1 className="text-5xl">Hello, World!</h1>
    </>
  );
};

export default App;
