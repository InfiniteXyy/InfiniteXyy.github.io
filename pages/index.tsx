import { PrintableText } from "components/printable-text";
import { Projects } from "components/projects";

export default function Home() {
  return (
    <div className="h-full bg-neutral-100">
      <div className="flex h-full flex-col items-center justify-center border-4 border-slate-600 text-center">
        <h1 className="border-b-4 border-b-gray-700 pb-1 text-3xl font-bold text-gray-700">
          <PrintableText>Hi there, I am Xyy</PrintableText>
        </h1>
        <div className="mt-10 flex items-center gap-2 text-2xl text-gray-500">
          <a href="https://github.com/infinitexyy">
            <div className="i-[ant-design-github-filled]" />
          </a>
          <a href={"https://www.zhihu.com/people/san-qian-yan-yan-huo"}>
            <div className="i-[ant-design-zhihu-square-filled]" />
          </a>
          <a href="https://stackoverflow.com/users/8930251/shawn-xu/">
            <div className="i-[fa-stack-overflow] text-xl" />
          </a>
          <a href="mailto: xuyiyangwing@gmail.com">
            <div className="i-[ant-design-mail-filled]" />
          </a>
        </div>
      </div>
      <div className="bg-slate-600 py-20 text-white">
        <Projects />
      </div>
    </div>
  );
}
