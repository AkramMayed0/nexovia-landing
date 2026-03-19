export default function CTA() {
  return (
    <section style={{ padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          padding: '64px 48px', borderRadius: 20,
          background: 'var(--card)',
          border: '1px solid var(--border)',
          position: 'relative', overflow: 'hidden',
          boxShadow: '0 0 80px rgba(37,99,235,0.08)',
        }}>
          {/* Top accent line — like CRM active nav indicator */}
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 120, height: 2, background: 'linear-gradient(90deg, #2563eb, #7c3aed)', borderRadius: '0 0 4px 4px' }} />

          {/* Glow */}
          <div style={{ position: 'absolute', top: '-40%', left: '50%', transform: 'translateX(-50%)', width: 500, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.1), transparent 70%)', pointerEvents: 'none' }} />

          <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--text)', marginBottom: 14 }}>
            Ready to grow with{' '}
            <span className="gradient-text">Nexovia?</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text2)', marginBottom: 36, maxWidth: 420, margin: '0 auto 36px' }}>
            Join teams already using Nexovia to manage customers, close deals, and deliver better service.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/signup">
              <button className="glow-btn" style={{ padding: '13px 36px', borderRadius: 12, fontSize: 15 }}>
                Start for Free →
              </button>
            </a>
            <a href="https://crm-project-eta-beige.vercel.app" target="_blank" rel="noreferrer">
              <button className="ghost-btn" style={{ padding: '13px 36px', borderRadius: 12, fontSize: 15 }}>
                View Demo
              </button>
            </a>
          </div>
          <p style={{ marginTop: 20, fontSize: 12, color: 'var(--text3)' }}>No credit card required · Free forever</p>
        </div>
      </div>
    </section>
  );
}