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

const fallbackIcon = <div className="i-[heroicons-solid-cube]" />;

export function ProjectItem({
  project,
  catColor,
  catColorDim,
  catDarkColor,
  catDarkColorDim,
}: {
  project: IProject;
  catColor: string;
  catColorDim: string;
  catDarkColor: string;
  catDarkColorDim: string;
}) {
  const Wrapper = project.url ? 'a' : 'div';
  const icon = project.icon ?? fallbackIcon;

  return (
    <Wrapper
      className="project-card group relative flex flex-col rounded-xl p-5 transition-all duration-200"
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--rule-light)',
        '--card-color': catColor,
        '--card-color-dim': catColorDim,
        '--card-color-dark': catDarkColor,
        '--card-color-dim-dark': catDarkColorDim,
      } as React.CSSProperties}
      {...(project.url ? { href: project.url, rel: 'noreferrer', target: '_blank' } : {})}
    >
      {/* Top row: icon + arrow */}
      <div className="flex items-start justify-between mb-3">
        <div className="card-icon flex items-center justify-center w-10 h-10 rounded-lg text-lg">
          {icon}
        </div>

        {project.url && (
          <div className="i-[heroicons-outline-arrow-up-right] text-muted text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </div>

      {/* Name + badge */}
      <div className="card-title font-semibold text-base text-ink transition-colors duration-150 mb-1.5">
        {project.name}
        {project.badge && (
          <span
            className="card-badge ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-sm align-middle"
          >
            {project.badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-3 flex-1">
        {project.description}
      </p>

      {/* Stack tags */}
      {project.stack && project.stack.length > 0 && (
        <div className="flex flex-wrap items-center gap-1 mt-auto">
          {project.stack.map((stack, i) => (
            <Fragment key={stack}>
              {i > 0 && <span className="text-rule-light text-xs select-none">·</span>}
              <StackTag type={stack} />
            </Fragment>
          ))}
        </div>
      )}
    </Wrapper>
  );
}
