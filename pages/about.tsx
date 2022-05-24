import { Header } from 'components/header';

export default function About() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[800px] py-5 px-5 leading-9 md:py-20">
        <h1 className="mb-4 text-3xl font-bold">Frontend Engineer</h1>
        <ul>
          <li>
            📫 How to reach me:{' '}
            <a href="mailto: xuyiyangwing@gmail.com" className="underline">
              xuyiyangwing@gmail.com
            </a>
          </li>
          <li>😊 Love JavaScript/TypeScript and React.js</li>
          <li>🦀 Try to learn Rust, CDRT and many other cool things</li>
        </ul>
        <h1 className="mb-4 mt-10 text-3xl font-bold">My major Stacks</h1>
        <div className="flex flex-wrap gap-3 text-3xl children:inline-block children:rounded-2xl children:bg-neutral-100 children:p-6 dark:children:bg-neutral-800">
          {[
            <div key="javascript" className="i-[logos-javascript]" />,
            <div key="typescript" className="i-[logos-typescript-icon]" />,
            <div key="react" className="i-[logos-react]" />,
            <div key="nextjs" className="i-[logos-nextjs-icon]" />,
            <div key="vue" className="i-[logos-vue]" />,
            <div key="nuxt" className="i-[logos-nuxt-icon]" />,
            <div key="graphql" className="i-[logos-graphql]" />,
            <div key="python" className="i-[logos-python]" />,
            <div key="tailwindcss" className="i-[logos-tailwindcss-icon]" />,
            <div key="vitejs" className="i-[logos-vitejs]" />,
            <div key="rollupjs" className="i-[logos-rollupjs]" />,
          ].map((ele, index) => (
            <div key={index}>{ele}</div>
          ))}
        </div>
        <h1 className="mb-4 mt-10 text-3xl font-bold">Working Experience</h1>
        <ul className="children:flex">
          <li>
            2020.10 - *<small className="ml-4">(Frontend Developer)</small> <strong className="ml-auto">LeetCode</strong>
          </li>
          <li>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">2019.7-2020.10</span>{' '}
            <small className="ml-1 overflow-hidden text-ellipsis whitespace-nowrap">(Intern/Frontend Developer)</small>{' '}
            <strong className="ml-auto">Trip.com</strong>
          </li>
        </ul>
      </div>
    </>
  );
}
