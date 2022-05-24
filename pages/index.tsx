import { Header } from 'components/header';
import { Projects } from 'components/projects';

export default function Home() {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-between text-center">
        <Header />
        <div className="flex flex-col items-center">
          <h1 className="mb-5 text-5xl font-bold text-neutral-900 dark:text-neutral-50">Shawn Xu</h1>
          <h2 className="text-2xl text-neutral-400 dark:text-neutral-500">I think, and then build interesting projects</h2>
          <div className="mt-10 flex items-center gap-5 text-4xl text-gray-500">
            <a
              href="https://github.com/infinitexyy"
              className="rounded-lg p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
              <div className="i-[simple-icons-github] text-black dark:text-white" />
            </a>
            <a
              href="https://stackoverflow.com/users/8930251/shawn-xu/"
              className="rounded-lg p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
              <div className="i-[logos-stackoverflow-icon]" />
            </a>
            <a
              href="https://twitter.com/infinitexyy"
              className="rounded-lg p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
              <div className="i-[logos-twitter]" />
            </a>
            <a
              href={'https://www.zhihu.com/people/san-qian-yan-yan-huo'}
              className="rounded-lg p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
              <div className="i-[simple-icons-zhihu] text-blue-500" />
            </a>
          </div>

          <a
            href="mailto: xuyiyangwing@gmail.com"
            className="mt-12 flex h-10 items-center space-x-2 rounded-lg bg-black px-4 font-bold text-white transition-transform hover:scale-110 dark:bg-neutral-700 dark:text-neutral-200"
          >
            <div className="i-[clarity-talk-bubbles-line] text-lg" />
            <div>Talk to Me</div>
          </a>
        </div>

        <div className="mb-4 flex flex-col items-center text-neutral-600 dark:text-neutral-200">
          <h1 className="mb-3 text-center text-lg font-bold">Personal Projects</h1>
          <div className="i-[heroicons-solid-arrow-circle-down] animate-bounce text-3xl" />
        </div>
      </div>

      <div className="bg-neutral-50 py-10 dark:bg-neutral-900">
        <Projects />
      </div>
    </>
  );
}
