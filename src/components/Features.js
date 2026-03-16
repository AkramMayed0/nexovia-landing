const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const TicketIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
    <path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>
  </svg>
);
const ShoppingBagIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);
const TrendingUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);
const MessageSquareIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const BarChart2Icon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const features = [
  { icon: UsersIcon,        color: '#4f8eff', title: 'Customer Management', desc: 'Full customer profiles with health scores, notes, and interaction history all in one place.' },
  { icon: TicketIcon,       color: '#f59e0b', title: 'Smart Ticketing',      desc: 'Track, prioritize, and resolve support tickets with auto-assignment and email notifications.' },
  { icon: ShoppingBagIcon,  color: '#10b981', title: 'Order Tracking',       desc: 'Monitor orders from creation to delivery with real-time status updates and payment tracking.' },
  { icon: TrendingUpIcon,   color: '#8b5cf6', title: 'Sales Pipeline',       desc: 'Kanban-style deal management with stage tracking and revenue forecasting.' },
  { icon: MessageSquareIcon,color: '#ec4899', title: 'Interactions Log',     desc: 'Log every call, email, and meeting. Never lose track of a customer conversation again.' },
  { icon: BarChart2Icon,    color: '#14b8a6', title: 'Reports & Analytics',  desc: 'Beautiful dashboards with revenue trends, team performance, and customer health summaries.' },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 72 }}>
        <div style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 99, background: 'rgba(79,142,255,0.1)', border: '1px solid rgba(79,142,255,0.2)', fontSize: 12, fontWeight: 700, color: '#4f8eff', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Features</div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#f0f4ff', marginBottom: 16 }}>Everything your team needs</h2>
        <p style={{ fontSize: 18, color: 'var(--text2)', maxWidth: 500, margin: '0 auto' }}>One platform. All the tools. Zero complexity.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, alignItems: 'stretch' }}>
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className="card-hover" style={{ padding: '32px 28px', borderRadius: 16, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, marginBottom: 20, background: f.color + '18', border: '1px solid ' + f.color + '33', display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, flexShrink: 0 }}><Icon /></div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, color: '#f0f4ff', marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, flex: 1 }}>{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}