import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import useFetch from './hooks/useFetch';

import { Project, IntensiveCourse, HigherEducationCourse } from './@types';

import Loading from './components/SharedComponents/Loading';
import Error from './components/SharedComponents/Error';
import NoData from './components/SharedComponents/NoData';

interface Data {
  projects: Project[];
  intensiveCourses: IntensiveCourse[];
  higherEducationCourses: HigherEducationCourse[];
}

const App = () => {
  const { data, loading, error } = useFetch<Data>('/assets/data/data.json');

  if (loading) return <Loading />;
  if (error) return <Error message={`Something happened: ${error}`} />;
  if (data) {
    return (
      <>
        <Header />
        <Hero />
        <About />
        <Projects projects={data.projects} />
        <Education
          intensiveCourses={data.intensiveCourses}
          highEducationCourses={data.higherEducationCourses}
        />
        <Footer />
      </>
    );
  }

  return <NoData />;
};

export default App;
