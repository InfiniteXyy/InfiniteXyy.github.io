import React, { Fragment } from 'react';
import { type StackItem, StackTag } from './stack-tag';

export interface IProject {
  name: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
  badge?: string;
  stack?: StackItem[];
}

export function ProjectItem({ project }: { project: IProject }) {
  const Wrapper = project.url ? 'a' : 'div';

  return (
    <Wrapper
      className="project-row group block px-5 py-4"
      {...(project.url ? { href: project.url, rel: 'noreferrer', target: '_blank' } : {})}
    >
      <div className="flex items-center gap-5">
        {/* Name */}
        <div className="font-semibold text-base text-ink group-hover:text-accent transition-colors duration-150 shrink-0 w-36 md:w-52 truncate">
          {project.name}
          {project.badge && (
            <span
              className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-sm align-middle"
              style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
            >
              {project.badge}
            </span>
          )}
        </div>

        {/* Description */}
        <div className="text-muted text-sm leading-relaxed flex-1 min-w-0 hidden md:block truncate">
          {project.description}
        </div>

        {/* Stack tags */}
        {project.stack && project.stack.length > 0 && (
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {project.stack.map((stack, i) => (
              <Fragment key={stack}>
                {i > 0 && <span className="text-rule-light text-xs select-none">·</span>}
                <StackTag type={stack} />
              </Fragment>
            ))}
          </div>
        )}

        {/* Arrow */}
        {project.url && (
          <div className="i-[heroicons-outline-arrow-up-right] text-muted text-sm shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </div>

      {/* Mobile description */}
      <div className="text-muted text-sm leading-relaxed mt-1.5 md:hidden">
        {project.description}
      </div>
    </Wrapper>
  );
}
