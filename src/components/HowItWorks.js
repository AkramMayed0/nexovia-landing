const steps = [
  { num: '01', title: 'Create your workspace', desc: 'Sign up in seconds. Set up your team, invite staff, and configure your pipeline — no technical knowledge needed.', color: '#2563eb' },
  { num: '02', title: 'Import your customers',  desc: 'Bring in your existing customers via CSV import or add them manually. Nexovia organizes everything automatically.', color: '#8b5cf6' },
  { num: '03', title: 'Grow with insights',     desc: 'Track deals, resolve tickets, and let health scores surface the customers that need your attention most.', color: '#10b981' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background stripe */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(37,99,235,0.03) 50%, transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-badge" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: '#a78bfa' }}>
            How it works
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--text)', marginBottom: 14 }}>
            Up and running in minutes
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text2)', maxWidth: 440, margin: '0 auto' }}>
            No onboarding calls. No complex setup. Just results.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hide-mobile" style={{ position: 'absolute', top: 32, left: 'calc(100% - 8px)', width: 24, height: 1, background: 'var(--border)', zIndex: 0 }} />
              )}
              <div className="card-hover" style={{
                padding: '32px 24px', borderRadius: 14,
                background: 'var(--card)', border: '1px solid var(--border)',
              }}>
                {/* Step number — styled like CRM stat card value */}
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 38, fontWeight: 900,
                  color: s.color, opacity: 0.25, lineHeight: 1, marginBottom: 20,
                  userSelect: 'none',
                }}>{s.num}</div>
                <div style={{ width: 36, height: 3, borderRadius: 2, background: s.color, marginBottom: 18, opacity: 0.7 }} />
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}