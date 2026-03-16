export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #4f8eff, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 900, color: '#fff', fontFamily: 'Syne, sans-serif' }}>N</div>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: '#f0f4ff' }}>Nexovia</span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[
              { label: 'Features',     href: '#features' },
              { label: 'How it Works', href: '#how-it-works' },
              { label: 'Pricing',      href: '#pricing' },
            ].map(link => (
              <a key={link.label} href={link.href} style={{ fontSize: 13, color: 'var(--text3)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text2)'}
                onMouseLeave={e => e.target.style.color = 'var(--text3)'}
              >{link.label}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 13, color: 'var(--text3)' }}>© 2026 Nexovia. All rights reserved.</p>
          <p style={{ fontSize: 13, color: 'var(--text3)' }}>Built with 🔥 for modern teams</p>
        </div>
      </div>
    </footer>
  );
}