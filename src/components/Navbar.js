import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0 40px', height: 68,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(5, 8, 16, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(26, 37, 64, 0.8)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 9,
          background: 'linear-gradient(135deg, #4f8eff, #7c3aed)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 900, color: '#fff',
          fontFamily: 'Syne, sans-serif',
          boxShadow: '0 4px 16px rgba(79,142,255,0.4)',
        }}>N</div>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, letterSpacing: '-0.5px', color: '#f0f4ff' }}>
          Nexovia
        </span>
      </div>

      {/* Nav Links */}
      <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        {['Features', 'How it Works', 'Pricing'].map(link => (
          <a key={link} href={'#' + link.toLowerCase().replace(/ /g, '-')}
            style={{ fontSize: 14, fontWeight: 500, color: 'var(--text2)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#f0f4ff'}
            onMouseLeave={e => e.target.style.color = 'var(--text2)'}
          >{link}</a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#pricing">
          <button className="glow-btn" style={{ padding: '9px 22px', borderRadius: 10, fontSize: 14 }}>
            Get Started Free
          </button>
        </a>
      </div>

      {/* Mobile menu button */}
      <button className="hide-desktop" onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f0f4ff', fontSize: 22, display: 'none' }}
      >☰</button>
    </nav>
  );
}