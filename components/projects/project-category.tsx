import type { IProject } from './project-item';
import { ProjectItem } from './project-item';

export interface ICategory {
  name: string;
  color?: string;
  colorDim?: string;
  projects: IProject[];
}

// Palette per category — cool-leaning but colorful
const categoryColors: { color: string; colorDim: string; darkColor: string; darkColorDim: string }[] = [
  { color: '#8B5CF6', colorDim: 'rgba(139,92,246,0.12)', darkColor: '#A78BFA', darkColorDim: 'rgba(167,139,250,0.14)' },  // violet
  { color: '#0891B2', colorDim: 'rgba(8,145,178,0.12)',  darkColor: '#22D3EE', darkColorDim: 'rgba(34,211,238,0.12)' },   // cyan
  { color: '#2563EB', colorDim: 'rgba(37,99,235,0.10)',  darkColor: '#60A5FA', darkColorDim: 'rgba(96,165,250,0.12)' },   // blue
  { color: '#059669', colorDim: 'rgba(5,150,105,0.12)',  darkColor: '#34D399', darkColorDim: 'rgba(52,211,153,0.12)' },   // emerald
  { color: '#D946EF', colorDim: 'rgba(217,70,239,0.12)', darkColor: '#E879F9', darkColorDim: 'rgba(232,121,249,0.12)' },  // fuchsia
];

export function Category({ category, index }: { category: ICategory; index: number }) {
  const palette = categoryColors[index % categoryColors.length]!;

  return (
    <div className="mb-12">
      {/* Category header */}
      <div className="flex items-center gap-4 mb-3">
        <span
          className="category-number font-display italic font-light text-sm shrink-0"
          style={{ '--cat-color': palette.color, '--cat-color-dark': palette.darkColor, opacity: 0.8 } as React.CSSProperties}
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

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.projects.map(project => (
          <ProjectItem key={project.name} project={project} catColor={palette.color} catColorDim={palette.colorDim} catDarkColor={palette.darkColor} catDarkColorDim={palette.darkColorDim} />
        ))}
      </div>
    </div>
  );
}
