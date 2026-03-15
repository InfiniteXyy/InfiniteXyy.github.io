import { Header } from '~/components/header';
import { Projects } from '~/components/projects';

const socials = [
  { href: 'https://github.com/infinitexyy', icon: 'i-[simple-icons-github]', label: 'GitHub' },
  { href: 'https://stackoverflow.com/users/8930251/shawn-xu/', icon: 'i-[logos-stackoverflow-icon]', label: 'Stack Overflow' },
  { href: 'https://twitter.com/infinitexyy', icon: 'i-[logos-twitter]', label: 'Twitter' },
  { href: 'https://www.zhihu.com/people/san-qian-yan-yan-huo', icon: 'i-[simple-icons-zhihu]', label: 'Zhihu' },
] as const;

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Header currentPath="/" />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="hero-grid relative min-h-[88vh] flex flex-col"
        style={{ borderBottom: '1px solid var(--rule)' }}
      >
        <div className="max-w-screen-lg mx-auto w-full px-6 md:px-16 pt-16 md:pt-24 pb-12 flex-1 flex flex-col justify-between">
          <div>
            <p className="animate-in delay-1 text-muted text-xs font-semibold tracking-[0.22em] uppercase mb-8">
              Frontend Engineer · Game Dev lover
            </p>

            <h1
              className="animate-in delay-2 font-display font-light"
              style={{
                fontSize: 'clamp(3.6rem, 11vw, 9rem)',
                lineHeight: '0.9',
                letterSpacing: '-0.025em',
                marginBottom: '2rem',
              }}
            >
              Shawn
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Xu.</em>
            </h1>

            <p
              className="animate-in delay-3 text-muted leading-relaxed max-w-xs md:max-w-sm"
              style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', marginBottom: '2.5rem' }}
            >
              I think, and build interesting things —
              <br />
              from frontend ecosystems to game mechanics.
            </p>

            {/* Social links */}
            <div className="animate-in delay-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors duration-150"
                >
                  <span className={`${icon} text-base`} />
                  <span>{label}</span>
                </a>
              ))}
              <a
                href="mailto:xuyiyangwing@gmail.com"
                className="flex items-center gap-2 text-sm font-semibold px-3.5 py-1.5 rounded-sm transition-transform duration-150 hover:scale-105 hover:brightness-110"
                style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
              >
                <span className="i-[clarity-talk-bubbles-line] text-sm" />
                Talk to Me
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-in delay-5 flex items-center gap-3 text-muted">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase">Projects</span>
            <div className="h-px w-8" style={{ backgroundColor: 'var(--rule)' }} />
            <div className="i-[heroicons-solid-arrow-circle-down] animate-bounce text-xl" />
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────── */}
      <section className="py-14 md:py-20 px-6 md:px-16 max-w-screen-lg mx-auto">
        <Projects />
      </section>
    </div>
  );
}
