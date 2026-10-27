import { useState } from 'react';
import { Info, X } from 'lucide-react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Reportes from './pages/Reportes.jsx';

export default function App() {
  const [sucursal, setSucursal] = useState('todas');
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [aviso, setAviso] = useState('');
  return (
    <div className="app-shell">
      <Header sucursal={sucursal} onSucursalChange={setSucursal} onOpenMenu={() => setMenuAbierto(true)} />
      <Sidebar abierto={menuAbierto} onClose={() => setMenuAbierto(false)} onPendingModule={(nombre) => { setMenuAbierto(false); setAviso(`${nombre}: este módulo se integrará cuando el equipo lo entregue.`); }} />
      <div className="app-content"><Reportes selectedSucursal={sucursal} setSelectedSucursal={setSucursal} mostrarAviso={setAviso}/></div>
      {aviso && <div className="toast-demo" role="status"><Info size={18}/><span>{aviso}</span><button onClick={() => setAviso('')} aria-label="Cerrar aviso"><X size={16}/></button></div>}
    </div>
  );
}
