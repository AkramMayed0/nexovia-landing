import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0 40px', height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(15,17,23,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.25s ease',
    }}>
      {/* Logo — same style as CRM sidebar logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 9,
          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 15, fontWeight: 900, color: '#fff',
          fontFamily: 'Syne, sans-serif',
          boxShadow: '0 4px 14px rgba(37,99,235,0.35)',
        }}>N</div>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 19, letterSpacing: '-0.5px', color: 'var(--text)' }}>
          Nexovia
        </span>
      </div>

      {/* Nav Links */}
      <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {[['Features', '#features'], ['How it Works', '#how-it-works'], ['Pricing', '#pricing']].map(([label, href]) => (
          <a key={label} href={href} style={{ fontSize: 14, fontWeight: 500, color: 'var(--text2)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text2)'}
          >{label}</a>
        ))}
      </div>

      {/* CTA */}
      <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <a href="https://crm-project-eta-beige.vercel.app" target="_blank" rel="noreferrer">
          <button className="ghost-btn" style={{ padding: '8px 18px', fontSize: 13 }}>
            Sign in
          </button>
        </a>
        <a href="/signup">
          <button className="glow-btn" style={{ padding: '8px 20px', fontSize: 13 }}>
            Get Started Free
          </button>
        </a>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        className="hide-desktop"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', fontSize: 22, display: 'flex', alignItems: 'center' }}
      >☰</button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 64, left: 0, right: 0,
          background: 'var(--card)', borderBottom: '1px solid var(--border)',
          padding: '20px 40px', display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {[['Features', '#features'], ['How it Works', '#how-it-works'], ['Pricing', '#pricing']].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: 15, fontWeight: 600, color: 'var(--text2)' }}>{label}</a>
          ))}
          <a href="/signup">
            <button className="glow-btn" style={{ padding: '11px 24px', fontSize: 14, width: '100%' }}>
              Get Started Free
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}