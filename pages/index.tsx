import { PrintableText } from "components/printable-text";
import { FaStackOverflow as StackOverflow } from "react-icons/fa";
import { AiFillGithub as Github, AiFillMail as Mail, AiFillZhihuSquare as Zhihu } from "react-icons/ai";
import { Projects } from "components/projects";

export default function Home() {
  return (
    <div className="bg-neutral-100 h-full">
      <div className="flex h-full flex-col items-center justify-center border-4 border-slate-600 text-center">
        <h1 className="border-b-4 pb-1 border-b-gray-700 text-3xl font-bold text-gray-700">
          <PrintableText>Hi there, I am Xyy</PrintableText>
        </h1>
        <div className="mt-10 flex items-center gap-2 text-2xl text-gray-500">
          <a href="https://github.com/infinitexyy">
            <Github />
          </a>
          <a href={"https://www.zhihu.com/people/san-qian-yan-yan-huo"}>
            <Zhihu />
          </a>
          <a href="https://stackoverflow.com/users/8930251/shawn-xu/">
            <StackOverflow />
          </a>
          <a href="mailto: xuyiyangwing@gmail.com">
            <Mail />
          </a>
        </div>
      </div>
      <div className="bg-slate-600 py-20 text-white">
        <Projects />
      </div>
    </div>
  );
}
