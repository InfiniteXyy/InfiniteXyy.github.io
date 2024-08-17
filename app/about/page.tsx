import { Fragment } from 'react';
import { Header } from '../../components/header';

export default function About() {
  function renderStacks() {
    const stacks = {
      frontend: [
        { key: 'javascript', className: 'i-[logos-javascript]' },
        { key: 'typescript', className: 'i-[logos-typescript-icon]' },
        { key: 'react', className: 'i-[logos-react]' },
        { key: 'nextjs', className: 'i-[logos-nextjs-icon]' },
        { key: 'vue', className: 'i-[logos-vue]' },
        { key: 'nuxt', className: 'i-[logos-nuxt-icon]' },
        { key: 'graphql', className: 'i-[logos-graphql]' },
        { key: 'python', className: 'i-[logos-python]' },
        { key: 'tailwindcss', className: 'i-[logos-tailwindcss-icon]' },
        { key: 'vitejs', className: 'i-[logos-vitejs]' },
        { key: 'rollupjs', className: 'i-[logos-rollupjs]' },
        { key: 'react-query', className: 'i-[logos-react-query-icon]' },
        { key: 'trpc', className: 'i-[logos-trpc]' },
      ],
      'game dev': [
        { key: 'csdharp', className: 'i-[logos-c-sharp]' },
        { key: 'godot', className: 'i-[logos-godot-icon]' },
        { key: 'unity', className: 'i-[logos-unity]' },
      ],
    };
    return Object.entries(stacks).map(([category, stacks]) => (
      <Fragment key={category}>
        <h1 className="mb-4 mt-10 text-2xl font-bold">{`My ${category} stacks`}</h1>
        <div className="flex flex-wrap gap-3 text-3xl [&>*]:inline-block [&>*]:rounded-2xl [&>*]:bg-neutral-100 [&>*]:p-6 dark:[&>*]:bg-neutral-800">
          {stacks.map(({ key, className }) => (
            <div key={key}>
              <div className={className} />
            </div>
          ))}
        </div>
      </Fragment>
    ));
  }

  function renderWorkingExperience() {
    const experiences = [
      { date: '2022.7 - *', company: 'SAP', position: 'Frontend Developer' },
      { date: '2020.10 - 2022.6', company: 'LeetCode', position: 'Frontend Developer' },
      { date: '2019.7 - 2020.10', company: 'Trip.com', position: 'Intern/Frontend Developer' },
    ];
    return (
      <>
        <h1 className="mb-4 mt-10 text-2xl font-bold">Working Experience</h1>
        <ul className="leading-5 [&>*]:mb-4 [&>*]:flex">
          {experiences.map(({ date, company, position }) => (
            <li key={company}>
              <div>
                <div>{date}</div>
                <div className="text-sm opacity-60">{`(${position})`}</div>
              </div>
              <strong className="ml-auto">{company}</strong>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <Header currentPath="/about" />
      <div className="mx-auto max-w-[800px] px-5 py-5 leading-9 md:py-20">
        <h1 className="mb-4 text-2xl font-bold">Frontend Engineer</h1>
        <ul>
          <li>
            📫 How to reach me:{' '}
            <a href="mailto: xuyiyangwing@gmail.com" className="underline">
              xuyiyangwing@gmail.com
            </a>
          </li>
          <li>😊 Love JavaScript/TypeScript and React.js</li>
          <li>🍹 Good at CSS / State Management / FE infra</li>
          <li>🦀 Try to be a game developer</li>
        </ul>

        {renderStacks()}
        {renderWorkingExperience()}
      </div>
    </>
  );
}
