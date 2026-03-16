import { useState } from 'react';

const API = 'https://crm-project-figk.onrender.com';

const plans = [
  {
    key: 'starter',
    name: 'Starter',
    price: { monthly: 0, yearly: 0 },
    desc: 'Perfect for small teams just getting started.',
    color: '#4f8eff',
    features: ['Up to 3 staff members', '500 customers', 'Tickets & Orders', 'Basic reports', 'Email notifications', 'Community support'],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    key: 'pro',
    name: 'Pro',
    price: { monthly: 29, yearly: 23 },
    desc: 'For growing teams that need more power.',
    color: '#7c3aed',
    features: ['Up to 15 staff members', 'Unlimited customers', 'Everything in Starter', 'Sales Pipeline', 'Priority support', 'Advanced analytics', 'CSV import/export'],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    price: { monthly: 99, yearly: 79 },
    desc: 'For large organizations with advanced needs.',
    color: '#10b981',
    features: ['Unlimited staff', 'Unlimited everything', 'Everything in Pro', 'Custom integrations', 'Dedicated account manager', 'SLA guarantee', 'Custom branding', 'API access'],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [yearly,  setYearly]  = useState(false);
  const [loading, setLoading] = useState(null);

  const handlePlan = async (plan) => {
    setLoading(plan.key);
    try {
      const res = await fetch(API + '/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: plan.key }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (e) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="pricing" style={{ padding: '100px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 99, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', fontSize: 12, fontWeight: 700, color: '#10b981', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Pricing</div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#f0f4ff', marginBottom: 16 }}>Simple, transparent pricing</h2>
        <p style={{ fontSize: 18, color: 'var(--text2)', marginBottom: 36 }}>No hidden fees. Cancel anytime.</p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '6px 8px', borderRadius: 99, background: 'var(--card)', border: '1px solid var(--border)' }}>
          <button onClick={() => setYearly(false)} style={{ padding: '6px 18px', borderRadius: 99, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'DM Sans, sans-serif', background: !yearly ? 'linear-gradient(135deg, #4f8eff, #7c3aed)' : 'transparent', color: !yearly ? '#fff' : 'var(--text2)', transition: 'all 0.2s' }}>Monthly</button>
          <button onClick={() => setYearly(true)} style={{ padding: '6px 18px', borderRadius: 99, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'DM Sans, sans-serif', background: yearly ? 'linear-gradient(135deg, #4f8eff, #7c3aed)' : 'transparent', color: yearly ? '#fff' : 'var(--text2)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8 }}>
            Yearly <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 99, background: 'rgba(16,185,129,0.2)', color: '#10b981', fontWeight: 700 }}>-20%</span>
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, alignItems: 'stretch' }}>
        {plans.map((plan) => (
          <div key={plan.key} style={{
            padding: '36px 32px', borderRadius: 20, display: 'flex', flexDirection: 'column',
            background: plan.popular ? 'linear-gradient(145deg, rgba(124,58,237,0.15), rgba(79,142,255,0.1))' : 'var(--card)',
            border: plan.popular ? '1px solid rgba(124,58,237,0.5)' : '1px solid var(--border)',
            position: 'relative',
            boxShadow: plan.popular ? '0 0 60px rgba(124,58,237,0.2)' : 'none',
          }}>
            {plan.popular && (
              <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', borderRadius: 99, background: 'linear-gradient(135deg, #4f8eff, #7c3aed)', fontSize: 11, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>✦ Most Popular</div>
            )}

            <div style={{ fontSize: 12, fontWeight: 700, color: plan.color, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{plan.name}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 52, fontWeight: 600, color: '#f0f4ff', letterSpacing: '-2px' }}>
                ${yearly ? plan.price.yearly : plan.price.monthly}
              </span>
              {plan.price.monthly > 0 && <span style={{ color: 'var(--text3)', fontSize: 14 }}>/month</span>}
            </div>
            <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 28, lineHeight: 1.6 }}>{plan.desc}</p>

            <button
              onClick={() => handlePlan(plan)}
              disabled={loading === plan.key}
              className="glow-btn"
              style={{
                width: '100%', padding: '13px', borderRadius: 12, fontSize: 15,
                background: plan.popular ? 'linear-gradient(135deg, #4f8eff, #7c3aed)' : 'rgba(255,255,255,0.06)',
                color: '#fff', border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.12)',
                marginBottom: 28, opacity: loading === plan.key ? 0.7 : 1,
              }}>
              {loading === plan.key ? 'Loading...' : plan.cta}
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
              {plan.features.map((f, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text2)' }}>
                  <span style={{ color: plan.color, fontSize: 16, flexShrink: 0 }}>✓</span>{f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}