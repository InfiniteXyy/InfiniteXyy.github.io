import type { IProject } from './project-item';
import { ProjectItem } from './project-item';

export interface ICategory {
  name: string;
  projects: IProject[];
}

export function Category({ category, index }: { category: ICategory; index: number }) {
  return (
    <div className="mb-12">
      {/* Category header */}
      <div className="flex items-center gap-4 mb-3">
        <span
          className="font-display italic font-light text-sm shrink-0"
          style={{ color: 'var(--accent)', opacity: 0.7 }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: 'var(--rule)' }} />
        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-muted shrink-0">
          {category.name}
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: 'var(--rule)' }} />
        <span className="text-muted text-xs font-mono shrink-0" style={{ opacity: 0.5 }}>
          {category.projects.length}
        </span>
      </div>

      {/* Project rows */}
      <div>
        {category.projects.map(project => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
