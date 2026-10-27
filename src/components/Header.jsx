import { useState } from 'react';
import { MapPin, ArrowLeftRight, CircleUserRound, ChevronDown, Menu } from 'lucide-react';
import { BRANCHES } from '../data/demoReportes.js';

export default function Header({ sucursal, onSucursalChange, onOpenMenu }) {
  const [branchOpen, setBranchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const sucursalNombre = sucursal === 'todas' ? 'Mall Plaza Calama' : (BRANCHES.find(b => b.id === sucursal)?.shortName || 'Mall Plaza Calama');
  return (
    <header className="topbar">
      <div className="topbar-brand">
        <button type="button" aria-label="Abrir menú" className="mobile-menu-button" onClick={onOpenMenu}><Menu size={20}/></button>
        <div className="brand-logo">Gest<span>Antonia</span></div>
        <div className="brand-sub">Centro de Estética</div>
      </div>
      <div className="topbar-right">
        <div className="branch-chip"><MapPin size={14} fill="currentColor" strokeWidth={1.8} /><span>{sucursalNombre}</span></div>
        <div className="menu-host">
          <button type="button" className="top-outline-button" onClick={() => { setBranchOpen(v => !v); setProfileOpen(false); }} aria-expanded={branchOpen}>
            <ArrowLeftRight size={16}/><span>Cambiar sucursal</span>
          </button>
          {branchOpen && (
            <div className="top-dropdown branch-list" role="menu" aria-label="Cambiar sucursal">
              <p>Ver reportes por sucursal</p>
              {BRANCHES.map(b => (
                <button key={b.id} type="button" role="menuitem" onClick={() => { onSucursalChange(b.id); setBranchOpen(false); }}>
                  {b.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="menu-host">
          <button type="button" className="profile-button" onClick={() => { setProfileOpen(v => !v); setBranchOpen(false); }} aria-expanded={profileOpen}>
            <CircleUserRound size={16}/><span>Propietaria</span><ChevronDown size={14}/>
          </button>
          {profileOpen && (
            <div className="top-dropdown profile-dropdown">
              <strong>Propietaria</strong>
              <span>Vista de demostración</span>
              <small>La autenticación real se integrará desde Django.</small>
              <button type="button" onClick={() => setProfileOpen(false)}>Entendido</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
