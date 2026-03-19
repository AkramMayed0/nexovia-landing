export default function Pricing() {
  const features = [
    'Unlimited staff members',
    'Unlimited customers',
    'Tickets, Orders & Interactions',
    'Sales Pipeline (Kanban)',
    'Customer Health Score',
    'Advanced analytics & reports',
    'CSV import/export',
    'Global search',
    'Email notifications',
    'Activity log',
    'Dark mode & Arabic support',
    'Multi-language (EN/AR)',
  ];

  return (
    <section id="pricing" style={{ padding: '100px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 99, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', fontSize: 12, fontWeight: 700, color: '#10b981', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Pricing</div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#f0f4ff', marginBottom: 16 }}>
          100% Free. Forever.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--text2)', maxWidth: 480, margin: '0 auto' }}>
          No credit card. No hidden fees. No limits. Everything included for free.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          padding: '48px 40px', borderRadius: 24, maxWidth: 520, width: '100%',
          background: 'linear-gradient(145deg, rgba(79,142,255,0.12), rgba(16,185,129,0.08))',
          border: '1px solid rgba(79,142,255,0.4)',
          boxShadow: '0 0 80px rgba(79,142,255,0.15)',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', padding: '5px 20px', borderRadius: 99, background: 'linear-gradient(135deg, #4f8eff, #10b981)', fontSize: 12, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>
            ✦ Everything Included
          </div>

          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 72, fontWeight: 800, color: '#f0f4ff', letterSpacing: '-3px', lineHeight: 1 }}>
              $0
            </div>
            <div style={{ fontSize: 16, color: 'var(--text2)', marginTop: 8 }}>forever, no strings attached</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: 36 }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text2)' }}>
                <span style={{ color: '#10b981', fontSize: 14, flexShrink: 0 }}>✓</span>{f}
              </div>
            ))}
          </div>

          <button
            onClick={() => window.location.href = '/signup'}
            className="glow-btn"
            style={{ width: '100%', padding: '15px', borderRadius: 14, fontSize: 16, fontWeight: 700 }}
          >
            Create Free Workspace →
          </button>

          <p style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: 'var(--text3)' }}>
            No credit card required · Setup in 30 seconds
          </p>
        </div>
      </div>
    </section>
  );
}