import React from "react";

export type IProject = {
  name: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
  badge?: string;
};

export function ProjectItem(props: { project: IProject }) {
  const { project } = props;
  return (
    <a
      className="relative flex h-auto flex-col overflow-hidden rounded bg-white bg-opacity-5 p-4 text-base transition hover:bg-opacity-20"
      href={project.url}
      rel="noreferrer"
      target="_blank"
    >
      <style jsx>{`
        a:hover > .__badge:last-of-type {
          opacity: 1;
        }
      `}</style>
      <div className="text-md cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap font-bold text-blue-300">
        {project.name}
      </div>
      <div className="my-2 text-sm">{project.description}</div>
      {project.icon && <div className="absolute top-2 right-2 text-6xl opacity-5">{project.icon}</div>}
      {project.badge && (
        <div className="__badge absolute top-0 right-0 w-10 rounded-bl bg-green-600 text-center text-sm font-bold opacity-75">
          {project.badge}
        </div>
      )}
    </a>
  );
}
