const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const TicketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
    <path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>
  </svg>
);
const ShoppingBagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);
const TrendingUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);
const MessageSquareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const BarChart2Icon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const features = [
  { icon: UsersIcon,         color: '#2563eb', title: 'Customer Management', desc: 'Full customer profiles with health scores, notes, and interaction history all in one place.' },
  { icon: TicketIcon,        color: '#f59e0b', title: 'Smart Ticketing',      desc: 'Track, prioritize, and resolve support tickets with auto-assignment and email notifications.' },
  { icon: ShoppingBagIcon,   color: '#10b981', title: 'Order Tracking',       desc: 'Monitor orders from creation to delivery with real-time status updates and payment tracking.' },
  { icon: TrendingUpIcon,    color: '#8b5cf6', title: 'Sales Pipeline',       desc: 'Kanban-style deal management with drag & drop stage tracking and revenue forecasting.' },
  { icon: MessageSquareIcon, color: '#ec4899', title: 'Interactions Log',     desc: 'Log every call, email, and meeting. Never lose track of a customer conversation again.' },
  { icon: BarChart2Icon,     color: '#14b8a6', title: 'Reports & Analytics',  desc: 'Beautiful dashboards with revenue trends, team performance, and customer health summaries.' },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div className="section-badge" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', color: '#60a5fa' }}>
          Features
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--text)', marginBottom: 14 }}>
          Everything your team needs
        </h2>
        <p style={{ fontSize: 17, color: 'var(--text2)', maxWidth: 460, margin: '0 auto' }}>
          One platform. All the tools. Zero complexity.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className="card-hover" style={{
              padding: '28px 24px', borderRadius: 14,
              background: 'var(--card)', border: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column',
            }}>
              {/* Icon — same style as CRM nav icons */}
              <div style={{
                width: 44, height: 44, borderRadius: 10, marginBottom: 18,
                background: f.color + '18', border: '1px solid ' + f.color + '30',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: f.color, flexShrink: 0,
              }}>
                <Icon />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7, flex: 1 }}>{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}