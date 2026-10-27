import { CalendarDays, ClipboardList, UsersRound, HandCoins, Store, Wallet, Package, ChartNoAxesColumn, LogOut, X } from 'lucide-react';

const mainNav = [
  { label: 'Agenda', icon: CalendarDays },
  { label: 'Asistencia', icon: ClipboardList },
  { label: 'Especialistas', icon: UsersRound },
  { label: 'Comisiones', icon: HandCoins },
  { label: 'Sucursales', icon: Store },
];
const secondaryNav = [
  { label: 'Ventas y caja', icon: Wallet },
  { label: 'Inventario', icon: Package },
  { label: 'Reportes', icon: ChartNoAxesColumn, current: true },
];

function NavItem({ item, onClose, onPendingModule }) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      className={`sidebar-link ${item.current ? 'active' : ''}`}
      aria-current={item.current ? 'page' : undefined}
      onClick={() => item.current ? onClose() : onPendingModule(item.label)}
      title={item.current ? 'Reportes' : `Módulo ${item.label} · Próximamente`}
    >
      <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
      <span>{item.label}</span>
    </button>
  );
}

export default function Sidebar({ abierto, onClose, onPendingModule }) {
  return (
    <>
      {abierto && <button className="mobile-overlay" aria-label="Cerrar menú" onClick={onClose} />}
      <aside className={`sidebar ${abierto ? 'sidebar-open' : ''}`} aria-label="Menú principal">
        <button className="mobile-close" onClick={onClose} aria-label="Cerrar menú"><X size={20}/></button>
        <nav className="sidebar-nav">
          {mainNav.map((item) => <NavItem key={item.label} item={item} onClose={onClose} onPendingModule={onPendingModule} />)}
          <div className="nav-section">OTROS MÓDULOS</div>
          {secondaryNav.map((item) => <NavItem key={item.label} item={item} onClose={onClose} onPendingModule={onPendingModule} />)}
        </nav>
        <button className="sidebar-logout" type="button" onClick={() => onPendingModule('Inicio de sesión')}>
          <LogOut size={17} strokeWidth={1.7} /> Cerrar sesión
        </button>
      </aside>
    </>
  );
}
