import type { Octokit } from "@octokit/rest";
import { FaRegStar } from "react-icons/fa";

export type IRepo = Awaited<ReturnType<Octokit["rest"]["repos"]["listForUser"]>>["data"][number];
export function RepoItem(props: { repo: IRepo }) {
  const { repo } = props;
  return (
    <div className="flex h-auto w-[300px] flex-col rounded-lg border border-gray-100 bg-white p-4 text-base text-black">
      <a
        className="text-md cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-blue-500 hover:underline"
        href={repo.html_url}
        rel="noreferrer"
        target="_blank"
      >
        {repo.name}
      </a>
      <div className="my-2 text-sm">{repo.description}</div>
      <div className="mt-auto flex items-center gap-2 text-sm">
        <div>{repo.language}</div>
        <div className="flex items-center gap-1 text-neutral-700">
          <FaRegStar />
          {repo.stargazers_count}
        </div>
      </div>
    </div>
  );
}
