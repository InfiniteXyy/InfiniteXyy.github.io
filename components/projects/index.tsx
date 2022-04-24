import { IProject } from "./project-item";
import { Category } from "./project-category";
import { catagories } from "./data";

export type { IProject };

export function Projects() {
  return (
    <div className="w-full">
      <h1 className="mb-10 text-center text-3xl font-bold">My Projects</h1>
      {catagories.map((category) => (
        <Category category={category} key={category.name} />
      ))}
    </div>
  );
}
