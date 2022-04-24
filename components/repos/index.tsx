import { IRepo, RepoItem } from "./repo-item";

export type { IRepo };

export function Repos(props: { repos: IRepo[] }) {
  const { repos } = props;
  console.log(repos[0]);
  return (
    <div className="grid h-full grid-cols-3 gap-4 p-4 text-2xl">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
