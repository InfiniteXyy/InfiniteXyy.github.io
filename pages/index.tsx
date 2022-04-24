import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { PrintableText } from "components/printable-text";
import { IRepo, Repos } from "components/repos";
import { FaStackOverflow as StackOverflow } from "react-icons/fa";
import { AiFillGithub as Github, AiFillMail as Mail, AiFillZhihuSquare as Zhihu } from "react-icons/ai";
// import type { GetStaticProps, NextPage } from "next";
// import { Octokit } from "@octokit/rest";

export default function Home(props: { repos: IRepo[] }) {
  const { repos } = props;
  return (
    <div className="bg-neutral-100">
      <Parallax className="top-0 left-0" pages={2}>
        <ParallaxLayer className="relative border-4 border-slate-600" offset={0} speed={0} />
        <ParallaxLayer className="flex flex-col items-center justify-center text-center" offset={0} speed={0.1}>
          <h1 className="text-3xl font-bold text-gray-700 underline underline-offset-4">
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
        </ParallaxLayer>
        <ParallaxLayer className="bg-slate-600" factor={1} offset={1} speed={0} />
        <ParallaxLayer className="flex items-center justify-center text-white" factor={1} offset={1} speed={0.5}>
          <div className="text-2xl">Currently Work In Progress</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

// const octokit = new Octokit();

// export const getStaticProps: GetStaticProps = async () => {
//   const repos = await octokit.rest.repos.listForUser({ username: "infinitexyy", type: "owner", sort: "updated" });
//   return { props: { repos: repos.data || [] } };
// };
