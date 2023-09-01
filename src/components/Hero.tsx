import { Element } from 'react-scroll';
import MainButton from './SharedComponents/MainButton';

const GITHUB_LINK = 'https://github.barataribeiro.com/';

const Hero: React.FC = () => {
  return (
    <Element name="home">
      <main
        aria-label="Site home page"
        role="main"
        className="h-screen w-full bg-mistGray-950 bg-heroBackground bg-cover bg-center bg-no-repeat"
      >
        <div className="container max-w-[90rem] px-4 py-40 sm:py-64">
          {/* Hero info */}
          <section
            className="flex flex-col items-start leading-none text-mistGray-950 max-sm:items-center max-sm:text-center"
            aria-labelledby="hero-heading"
            aria-describedby="hero-description"
          >
            <header>
              <h1
                id="hero-heading"
                className="font-Kanit text-5xl font-semibold uppercase tracking-wider text-mistGray-50"
              >
                <span className="-mr-2 font-Roboto text-[1.25rem] font-normal normal-case tracking-normal">
                  I'm
                </span>{' '}
                Barata Ribeiro
              </h1>
              <p className="mb-1 font-Kanit text-2xl font-light text-mistGray-200">
                Front-End Developer & UI Designer.
              </p>
            </header>
            <p
              id="hero-description"
              className="max-w-lg leading-relaxed text-mistGray-600"
            >
              Business grad passionate about bridging strategy and execution, expanding
              into front-end development and UI design for visually appealing,
              user-friendly interfaces.
            </p>
            <MainButton
              buttonText="GitHub"
              href={GITHUB_LINK}
              title="Visit my GitHub profile"
              aria-label="Visit my GitHub profile"
            />
          </section>
        </div>
      </main>
    </Element>
  );
};

export default Hero;
