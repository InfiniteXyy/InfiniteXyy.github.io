import type { IProject } from './project-item';
import { ProjectItem } from './project-item';

export interface ICategory {
  name: string;
  projects: IProject[];
}

export function Category(props: { category: ICategory }) {
  const { category } = props;

  return (
    <div className="mx-auto w-[948px] max-w-full overflow-auto p-4">
      <div className="mb-4 flex items-center space-x-1 font-bold text-neutral-500 dark:text-neutral-400">
        <div className="i-[mdi-chevron-right]" />
        <span>{category.name}</span>
      </div>
      <div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {category.projects.map(project => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
