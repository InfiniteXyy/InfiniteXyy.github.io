import React from 'react';
import { type StackItem, StackTag } from './stack-tag';

export interface IProject {
  name: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
  badge?: string;
  stack?: StackItem[];
}

export function ProjectItem(props: { project: IProject }) {
  const { project } = props;

  const LinkItem = project.url ? 'a' : 'div';
  return (
    <LinkItem
      className="relative flex h-auto flex-col overflow-hidden rounded border bg-neutral-100 p-4 text-base transition hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      href={project.url}
      rel="noreferrer"
      target="_blank"
    >
      <div className="text-md cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap font-bold text-blue-500 dark:text-blue-400">
        {project.name}
      </div>
      <div className="my-2 text-sm">{project.description}</div>
      {project.stack && (
        <div className="flex flex-wrap space-x-1">
          {project.stack?.map(stack => (
            <StackTag key={stack} type={stack} />
          ))}
        </div>
      )}
      {project.icon && <div className="absolute right-2 top-2 text-6xl !opacity-5">{project.icon}</div>}
      {project.badge && (
        <div className="absolute right-0 top-0 w-10 rounded-bl bg-green-600 text-center text-sm font-bold text-white opacity-75">
          {project.badge}
        </div>
      )}
    </LinkItem>
  );
}
