import { IProject, ProjectItem } from "./project-item";

export type ICategory = {
  name: string;
  projects: IProject[];
};

export function Category(props: { category: ICategory }) {
  const { category } = props;

  return (
    <div className="mx-auto w-[948px] max-w-full overflow-auto p-4">
      <h3 className="my-4 text-xl font-medium">{category.name}</h3>
      <div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {category.projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
