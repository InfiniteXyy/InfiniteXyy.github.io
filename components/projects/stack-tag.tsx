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

const classNameMap: Record<StackItem, string> = {
  'Rust': 'bg-orange-500 text-white',
  'Demo': 'bg-green-500 text-white',
  'Vue3': 'bg-green-500 text-white',
  'Nuxt3': 'bg-white text-green-500',
  'CSS': 'bg-orange-500 text-white',
  'backend': 'bg-black text-white',
  'framework': 'bg-pink-500 text-white',
  'React': 'bg-blue-500 text-white',
  'React Native': 'bg-blue-50 text-blue-600',
  'vitepress': 'bg-green-500 text-white',
  'doc': 'bg-gray-200 text-black',
  'svelte': 'text-white bg-red-500',
  'plugin': 'text-white bg-gray-500',
  'Browser Plugin': 'text-red-500 bg-white',
  'Python': 'text-yellow-100 bg-blue-500',
};

export function StackTag(props: { type: StackItem }) {
  return (
    <div className={`rounded px-1 text-xs font-medium md:opacity-20 ${classNameMap[props.type]}`}>{props.type}</div>
  );
}
