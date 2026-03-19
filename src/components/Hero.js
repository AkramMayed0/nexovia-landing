export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '120px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background — matches CRM dashboard bg glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.18) 0%, transparent 65%),
          radial-gradient(ellipse 50% 40% at 80% 80%, rgba(124,58,237,0.10) 0%, transparent 55%),
          radial-gradient(ellipse 40% 40% at 20% 70%, rgba(37,99,235,0.07) 0%, transparent 50%)
        `,
      }} />

      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.08,
        backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />

      {/* Floating orbs */}
      <div style={{ position: 'absolute', top: '18%', left: '6%', width: 220, height: 220, borderRadius: '50%', background: 'rgba(37,99,235,0.07)', animation: 'float 7s ease-in-out infinite', filter: 'blur(50px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '18%', right: '8%', width: 180, height: 180, borderRadius: '50%', background: 'rgba(124,58,237,0.07)', animation: 'float 9s ease-in-out infinite reverse', filter: 'blur(40px)', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820 }}>

        {/* Badge */}
        <div className="fade-up-1" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 16px', borderRadius: 99,
          background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)',
          fontSize: 13, fontWeight: 600, color: '#60a5fa', marginBottom: 32,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563eb', boxShadow: '0 0 8px #2563eb', display: 'inline-block' }} />
          Free for everyone — no credit card needed
        </div>

        {/* Headline */}
        <h1 className="fade-up-2" style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(40px, 7vw, 76px)',
          fontWeight: 800, lineHeight: 1.08, letterSpacing: '-2px',
          color: 'var(--text)', marginBottom: 24,
        }}>
          The CRM that{' '}
          <span className="gradient-text">connects</span>
          <br />you to what matters
        </h1>

        {/* Subtext */}
        <p className="fade-up-3" style={{
          fontSize: 'clamp(16px, 2.2vw, 19px)', fontWeight: 400,
          color: 'var(--text2)', maxWidth: 540, margin: '0 auto 44px',
          lineHeight: 1.75,
        }}>
          Nexovia brings your customers, deals, and team into one beautifully simple workspace. Built for speed, designed for growth.
        </p>

        {/* CTA Buttons */}
        <div className="fade-up-4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/signup">
            <button className="glow-btn" style={{ padding: '13px 32px', borderRadius: 12, fontSize: 15 }}>
              Start for Free →
            </button>
          </a>
          <a href="https://crm-project-eta-beige.vercel.app" target="_blank" rel="noreferrer">
            <button className="ghost-btn" style={{ padding: '13px 32px', borderRadius: 12, fontSize: 15 }}>
              View Live Demo
            </button>
          </a>
        </div>

        {/* Stats — matching CRM StatCard style */}
        <div className="fade-up-4" style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 64, flexWrap: 'wrap' }}>
          {[
            { value: '100%', label: 'Free Forever',    color: '#10b981' },
            { value: '99.9%', label: 'Uptime SLA',     color: '#2563eb' },
            { value: '4.9★',  label: 'User Rating',    color: '#f59e0b' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '16px 28px', borderRadius: 12,
              background: 'var(--card)', border: '1px solid var(--border)',
              textAlign: 'center', minWidth: 120,
            }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 26, fontWeight: 900, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}