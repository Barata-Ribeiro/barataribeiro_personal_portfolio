import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
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
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  );
};

export default App;
