import { Header } from '../../components/header';

const frontendStack = [
  { key: 'javascript', label: 'JavaScript', icon: 'i-[logos-javascript]' },
  { key: 'typescript', label: 'TypeScript', icon: 'i-[logos-typescript-icon]' },
  { key: 'react', label: 'React', icon: 'i-[logos-react]' },
  { key: 'nextjs', label: 'Next.js', icon: 'i-[logos-nextjs-icon]' },
  { key: 'vue', label: 'Vue', icon: 'i-[logos-vue]' },
  { key: 'nuxt', label: 'Nuxt', icon: 'i-[logos-nuxt-icon]' },
  { key: 'graphql', label: 'GraphQL', icon: 'i-[logos-graphql]' },
  { key: 'python', label: 'Python', icon: 'i-[logos-python]' },
  { key: 'tailwindcss', label: 'Tailwind', icon: 'i-[logos-tailwindcss-icon]' },
  { key: 'vitejs', label: 'Vite', icon: 'i-[logos-vitejs]' },
  { key: 'rollupjs', label: 'Rollup', icon: 'i-[logos-rollupjs]' },
  { key: 'react-query', label: 'React Query', icon: 'i-[logos-react-query-icon]' },
  { key: 'trpc', label: 'tRPC', icon: 'i-[logos-trpc]' },
];

const gameStack = [
  { key: 'csharp', label: 'C#', icon: 'i-[logos-c-sharp]' },
  { key: 'godot', label: 'Godot', icon: 'i-[logos-godot-icon]' },
  { key: 'unity', label: 'Unity', icon: 'i-[logos-unity]' },
];

const experiences = [
  { date: '2022.7 — Present', company: 'SAP', position: 'Frontend Developer' },
  { date: '2020.10 — 2022.6', company: 'LeetCode', position: 'Frontend Developer' },
  { date: '2019.7 — 2020.10', company: 'Trip.com', position: 'Intern / Frontend Developer' },
];

function StackGrid({ items }: { items: typeof frontendStack }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map(({ key, label, icon }) => (
        <div
          key={key}
          className="flex items-center gap-2 text-sm font-medium text-ink px-3 py-2 rounded-sm"
          style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--rule)' }}
        >
          <span className={`${icon} text-base`} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <>
      <Header currentPath="/about" />
      <main className="max-w-2xl mx-auto px-6 py-12 md:py-20">

        {/* ── Title ──────────────────────────────────────── */}
        <div className="animate-in delay-1 mb-12">
          <p className="text-muted text-xs font-semibold tracking-[0.22em] uppercase mb-5">About</p>
          <h1
            className="font-display font-light mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', lineHeight: '0.95', letterSpacing: '-0.025em' }}
          >
            Frontend
            <br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Engineer.</em>
          </h1>

          <div
            className="space-y-1.5 text-muted text-sm leading-relaxed max-w-xs"
            style={{ borderLeft: '2px solid var(--rule)', paddingLeft: '1.25rem' }}
          >
            <p>Love JavaScript, TypeScript, and React.js</p>
            <p>Good at CSS, State Management, and FE infra</p>
            <p>Trying to be a game developer in spare time 🦀</p>
          </div>

          <p className="mt-5 text-sm">
            <a href="mailto:xuyiyangwing@gmail.com" className="text-accent hover:underline underline-offset-4">
              xuyiyangwing@gmail.com
            </a>
          </p>
        </div>

        <div className="h-px mb-10" style={{ backgroundColor: 'var(--rule)' }} />

        {/* ── Stack ──────────────────────────────────────── */}
        <div className="animate-in delay-2 mb-10">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-muted mb-4">Frontend Stack</p>
          <StackGrid items={frontendStack} />
        </div>

        <div className="animate-in delay-3 mb-10">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-muted mb-4">Game Dev Stack</p>
          <StackGrid items={gameStack} />
        </div>

        <div className="h-px mb-10" style={{ backgroundColor: 'var(--rule)' }} />

        {/* ── Experience ─────────────────────────────────── */}
        <div className="animate-in delay-4">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-muted mb-6">Experience</p>
          <div>
            {experiences.map(({ date, company, position }, i) => (
              <div
                key={company}
                className="flex items-start justify-between py-4"
                style={{ borderBottom: i < experiences.length - 1 ? '1px solid var(--rule-light)' : 'none' }}
              >
                <div>
                  <div className="font-semibold text-sm text-ink">{company}</div>
                  <div className="text-muted text-xs mt-0.5">{position}</div>
                </div>
                <div className="text-muted text-xs font-mono shrink-0 ml-4 mt-0.5 text-right">{date}</div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </>
  );
}
