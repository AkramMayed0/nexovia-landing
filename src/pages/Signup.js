import { useState } from 'react';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default function Signup() {
  const [form,    setForm]    = useState({ companyName: '', managerName: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.companyName || !form.managerName || !form.email) { setError('All fields are required'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError('Invalid email address'); return; }

    setLoading(true); setError('');
    try {
      const res = await fetch(API + '/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, plan: 'starter' }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || 'Something went wrong'); return; }
      setSuccess(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally { setLoading(false); }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, position: 'relative' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(79,142,255,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32, textDecoration: 'none' }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #4f8eff, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 900, color: '#fff', fontFamily: 'Syne, sans-serif' }}>N</div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: '#f0f4ff' }}>Nexovia</span>
        </a>

        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: '36px 32px' }}>
          {success ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: 56, marginBottom: 20 }}>🎉</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 800, color: '#f0f4ff', marginBottom: 12 }}>Workspace Created!</h2>
              <p style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 8, lineHeight: 1.7 }}>
                Your Nexovia workspace is ready. We sent your login credentials to:
              </p>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#4f8eff', marginBottom: 28 }}>{form.email}</p>
              <a href="https://crm-project-eta-beige.vercel.app/login">
                <button className="glow-btn" style={{ padding: '12px 28px', borderRadius: 10, fontSize: 14 }}>
                  Go to Login →
                </button>
              </a>
              <p style={{ marginTop: 16, fontSize: 12, color: 'var(--text3)' }}>Check your spam folder if you don't see the email.</p>
            </div>
          ) : (
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 99, background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)', fontSize: 12, fontWeight: 700, color: '#10b981', marginBottom: 20 }}>
                ✦ Free Forever — No credit card required
              </div>

              <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 26, fontWeight: 800, color: '#f0f4ff', marginBottom: 8, letterSpacing: '-0.5px' }}>
                Create your workspace
              </h1>
              <p style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 28 }}>
                Get your full CRM up and running in 30 seconds.
              </p>

              {error && (
                <div style={{ padding: '10px 14px', borderRadius: 8, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', fontSize: 13, marginBottom: 20 }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {[
                  { key: 'companyName',  label: 'Company Name',   placeholder: 'Acme Corp',       type: 'text'  },
                  { key: 'managerName',  label: 'Your Full Name', placeholder: 'John Smith',       type: 'text'  },
                  { key: 'email',        label: 'Work Email',     placeholder: 'john@acme.com',    type: 'email' },
                ].map(f => (
                  <div key={f.key} style={{ marginBottom: 18 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text2)', marginBottom: 6, letterSpacing: 0.3 }}>{f.label}</label>
                    <input
                      type={f.type}
                      value={form[f.key]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      placeholder={f.placeholder}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'var(--input-bg)', color: 'var(--text)', fontSize: 14, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s', fontFamily: 'DM Sans, sans-serif' }}
                      onFocus={e => e.target.style.borderColor = '#4f8eff'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                ))}

                <button type="submit" disabled={loading} className="glow-btn" style={{ width: '100%', padding: '13px', borderRadius: 12, fontSize: 15, marginTop: 8, opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Setting up your workspace…' : 'Create Free Workspace →'}
                </button>
              </form>

              <p style={{ marginTop: 20, fontSize: 12, color: 'var(--text3)', textAlign: 'center' }}>
                After signup you'll receive your login credentials by email.
              </p>
            </div>
          )}
        </div>

        <p style={{ marginTop: 20, textAlign: 'center', fontSize: 13, color: 'var(--text3)' }}>
          Already have an account?{' '}
          <a href="https://crm-project-eta-beige.vercel.app" style={{ color: '#4f8eff', fontWeight: 600 }}>Sign in →</a>
        </p>
      </div>
    </div>
  );
}