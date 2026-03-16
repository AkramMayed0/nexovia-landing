export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '120px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background mesh */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 50% -20%, rgba(79,142,255,0.15) 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 80% 80%, rgba(124,58,237,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 20% 60%, rgba(79,142,255,0.08) 0%, transparent 50%)
        `,
      }} />

      {/* Floating orbs */}
      <div style={{ position: 'absolute', top: '15%', left: '8%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(79,142,255,0.06)', animation: 'float 6s ease-in-out infinite', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 160, height: 160, borderRadius: '50%', background: 'rgba(124,58,237,0.08)', animation: 'float 8s ease-in-out infinite reverse', filter: 'blur(30px)' }} />

      {/* Grid dots */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15,
        backgroundImage: 'radial-gradient(circle, #4f8eff 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820 }}>
        {/* Badge */}
        <div className="fade-up-1" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 16px', borderRadius: 99,
          background: 'rgba(79,142,255,0.1)', border: '1px solid rgba(79,142,255,0.3)',
          fontSize: 13, fontWeight: 600, color: '#4f8eff', marginBottom: 32,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4f8eff', animation: 'pulse-ring 1.5s ease-out infinite' }} />
          Now in Beta — Join for free
        </div>

        {/* Headline */}
        <h1 className="fade-up-2" style={{
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(42px, 7vw, 80px)',
          fontWeight: 800, lineHeight: 1.08, letterSpacing: '-2px',
          color: '#f0f4ff', marginBottom: 24,
        }}>
          The CRM that{' '}
          <span className="gradient-text">connects</span>
          <br />you to what matters
        </h1>

        {/* Subtext */}
        <p className="fade-up-3" style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: 400,
          color: 'var(--text2)', maxWidth: 560, margin: '0 auto 44px',
          lineHeight: 1.7,
        }}>
          Nexovia brings your customers, deals, and team into one beautifully simple workspace. Built for speed, designed for growth.
        </p>

        {/* CTA Buttons */}
        <div className="fade-up-4" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#pricing">
            <button className="glow-btn" style={{ padding: '14px 32px', borderRadius: 12, fontSize: 16 }}>
              Start for Free →
            </button>
          </a>
          <a href="https://crm-project-eta-beige.vercel.app" target="_blank" rel="noreferrer">
            <button style={{
              padding: '14px 32px', borderRadius: 12, fontSize: 16, fontWeight: 600,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
              color: '#f0f4ff', cursor: 'pointer', transition: 'all 0.2s',
              fontFamily: 'DM Sans, sans-serif',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
            >
              View Live Demo
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="fade-up-4" style={{ display: 'flex', gap: 48, justifyContent: 'center', marginTop: 64, flexWrap: 'wrap' }}>
          {[
            { value: '10K+', label: 'Customers Managed' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '4.9★', label: 'User Rating' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, fontWeight: 800, background: 'linear-gradient(135deg, #4f8eff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'var(--text3)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
