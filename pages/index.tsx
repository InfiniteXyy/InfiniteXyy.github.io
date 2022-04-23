import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { PrintableText } from "components/printable-text";
import { Projects } from "components/projects";
import { FaStackOverflow as StackOverflow } from "react-icons/fa";
import { AiFillGithub as Github, AiFillMail as Mail, AiFillZhihuSquare as Zhihu } from "react-icons/ai";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-neutral-100">
      <Parallax className="top-0 left-0" pages={2}>
        <ParallaxLayer className="flex flex-col items-center justify-center text-center" offset={0} speed={2.5}>
          <h1 className="text-3xl font-bold text-gray-700 underline underline-offset-4">
            <PrintableText>Hi there, My name is Yiyang</PrintableText>
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
        </ParallaxLayer>
        <ParallaxLayer className="bg-slate-500" offset={1} speed={2} />
        <ParallaxLayer className="flex items-center justify-center text-white" offset={1} speed={0.5}>
          <Projects />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
