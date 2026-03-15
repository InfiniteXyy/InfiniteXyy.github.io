export type StackItem =
  | 'Vue3'
  | 'Nuxt3'
  | 'Demo'
  | 'Browser Plugin'
  | 'CSS'
  | 'backend'
  | 'framework'
  | 'React'
  | 'React Native'
  | 'vitepress'
  | 'doc'
  | 'svelte'
  | 'plugin'
  | 'Python'
  | 'Rust';

const colorMap: Record<StackItem, string> = {
  'React': 'text-sky-500',
  'React Native': 'text-sky-400',
  'Vue3': 'text-emerald-500',
  'Nuxt3': 'text-emerald-400',
  'svelte': 'text-red-500',
  'Rust': 'text-orange-500',
  'Python': 'text-yellow-500',
  'CSS': 'text-blue-500',
  'backend': 'text-purple-500',
  'framework': 'text-pink-500',
  'plugin': 'text-stone-400',
  'vitepress': 'text-violet-500',
  'doc': 'text-stone-400',
  'Demo': 'text-emerald-500',
  'Browser Plugin': 'text-amber-500',
};

export function StackTag({ type }: { type: StackItem }) {
  return (
    <span className={`text-xs font-medium ${colorMap[type]}`}>{type}</span>
  );
}
