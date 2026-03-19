export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '44px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 900, color: '#fff', fontFamily: 'Syne, sans-serif',
            }}>N</div>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 17, color: 'var(--text)' }}>Nexovia</span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { label: 'Features',     href: '#features' },
              { label: 'How it Works', href: '#how-it-works' },
              { label: 'Pricing',      href: '#pricing' },
              { label: 'Sign in',      href: 'https://crm-project-eta-beige.vercel.app' },
            ].map(link => (
              <a key={link.label} href={link.href}
                style={{ fontSize: 13, color: 'var(--text3)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text2)'}
                onMouseLeave={e => e.target.style.color = 'var(--text3)'}
              >{link.label}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--text3)' }}>© 2026 Nexovia. All rights reserved.</p>
          <p style={{ fontSize: 12, color: 'var(--text3)' }}>Built with 🔥 for modern teams</p>
        </div>
      </div>
    </footer>
  );
}