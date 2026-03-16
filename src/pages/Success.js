export default function Success() {
  const plan = new URLSearchParams(window.location.search).get('plan') || 'pro';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center' }}>
      <div style={{ maxWidth: 520 }}>
        <div style={{ fontSize: 72, marginBottom: 24 }}>🎉</div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 40, fontWeight: 800, color: '#f0f4ff', marginBottom: 16, letterSpacing: '-1px' }}>
          Welcome to Nexovia!
        </h1>
        <p style={{ fontSize: 18, color: 'var(--text2)', marginBottom: 12 }}>
          Your <strong style={{ color: '#4f8eff', textTransform: 'capitalize' }}>{plan}</strong> plan is now active.
        </p>
        <p style={{ fontSize: 15, color: 'var(--text3)', marginBottom: 40 }}>
          Check your email for confirmation and next steps to set up your workspace.
        </p>
        <a href="https://crm-project-eta-beige.vercel.app">
          <button className="glow-btn" style={{ padding: '14px 36px', borderRadius: 12, fontSize: 16 }}>
            Go to your Dashboard →
          </button>
        </a>
      </div>
    </div>
  );
}
