export default function CTA() {
  return (
    <section style={{ padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          padding: '72px 48px', borderRadius: 28,
          background: 'linear-gradient(135deg, rgba(79,142,255,0.12), rgba(124,58,237,0.12))',
          border: '1px solid rgba(79,142,255,0.25)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Glow blob */}
          <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: 400, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(79,142,255,0.2), transparent 70%)', pointerEvents: 'none' }} />

          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#f0f4ff', marginBottom: 16 }}>
            Ready to grow with{' '}
            <span className="gradient-text">Nexovia?</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--text2)', marginBottom: 40, maxWidth: 460, margin: '0 auto 40px' }}>
            Join teams already using Nexovia to manage customers, close deals, and deliver better service.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing">
              <button className="glow-btn" style={{ padding: '14px 36px', borderRadius: 12, fontSize: 16 }}>
                Start for Free →
              </button>
            </a>
            <a href="https://crm-project-eta-beige.vercel.app" target="_blank" rel="noreferrer">
              <button style={{
                padding: '14px 36px', borderRadius: 12, fontSize: 16, fontWeight: 600,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#f0f4ff', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              >View Demo</button>
            </a>
          </div>
          <p style={{ marginTop: 24, fontSize: 13, color: 'var(--text3)' }}>No credit card required · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
