import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
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

  if (data) {
    return (
      <>
        <Header />
        <Hero />
        <About />
        <Projects projects={data.projects} />
        <Education intensiveCourses={data.intensiveCourses} />
        <Footer />
      </>
    );
  }

  return <div>No data available</div>;
};

export default App;
