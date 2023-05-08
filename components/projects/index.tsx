import { IProject } from './project-item';
import { Category } from './project-category';
import { catagories } from './data';

export type { IProject };

export function Projects() {
  return (
    <div className="w-full">
      {catagories.map((category) => (
        <Category category={category} key={category.name} />
      ))}
    </div>
  );
}
