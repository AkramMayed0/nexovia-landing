const steps = [
  { num: '01', title: 'Create your workspace', desc: 'Sign up in seconds. Set up your team, invite staff, and configure your pipeline — no technical knowledge needed.' },
  { num: '02', title: 'Import your customers', desc: 'Bring in your existing customers via CSV import or add them manually. Nexovia organizes everything automatically.' },
  { num: '03', title: 'Grow with insights', desc: 'Track deals, resolve tickets, and let AI surface the opportunities hiding in your customer data.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(79,142,255,0.04) 50%, transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 99, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', fontSize: 12, fontWeight: 700, color: '#a78bfa', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>
            How it works
          </div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#f0f4ff', marginBottom: 16 }}>
            Up and running in minutes
          </h2>
          <p style={{ fontSize: 18, color: 'var(--text2)', maxWidth: 460, margin: '0 auto' }}>
            No onboarding calls. No complex setup. Just results.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hide-mobile" style={{ position: 'absolute', top: 28, left: 'calc(100% - 16px)', width: 32, height: 1, background: 'linear-gradient(90deg, var(--border), transparent)', zIndex: 0 }} />
              )}
              <div style={{ padding: '36px 28px', borderRadius: 16, background: 'var(--card)', border: '1px solid var(--border)', position: 'relative' }}>
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 42, fontWeight: 800, lineHeight: 1,
                  background: 'linear-gradient(135deg, rgba(79,142,255,0.15), rgba(124,58,237,0.15))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  marginBottom: 20,
                }}>{s.num}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 700, color: '#f0f4ff', marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
