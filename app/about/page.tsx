import { Header } from 'components/header';

export default function About() {
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
          <li>🦀 Try to learn Rust, CDRT and many other cool things</li>
        </ul>
        <h1 className="mb-4 mt-10 text-2xl font-bold">My major Stacks</h1>
        <div className="flex flex-wrap gap-3 text-3xl [&>*]:inline-block [&>*]:rounded-2xl [&>*]:bg-neutral-100 [&>*]:p-6 dark:[&>*]:bg-neutral-800">
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
        <h1 className="mb-4 mt-10 text-2xl font-bold">Working Experience</h1>
        <ul className="leading-5 [&>*]:mb-4 [&>*]:flex">
          <li>
            <div>
              <div>2022.7 - *</div>
              <div className="text-sm opacity-60">(Frontend Developer)</div>
            </div>
            <strong className="ml-auto">SAP</strong>
          </li>
          <li>
            <div>
              <div>2020.10 - 2022.6</div>
              <div className="text-sm opacity-60">(Frontend Developer)</div>
            </div>
            <strong className="ml-auto">LeetCode</strong>
          </li>
          <li>
            <div>
              <div>2019.7 - 2020.10</div>
              <div className="text-sm opacity-60">(Intern/Frontend Developer)</div>
            </div>
            <strong className="ml-auto">Trip.com</strong>
          </li>
        </ul>
      </div>
    </>
  );
}
