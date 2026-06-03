// frame.jsx — Plinth Portfolio shared device frame + UI atoms
// Exports: PhoneFrame, Dots, AppButton, Stamp, Spinner, useStep

// ── Status bar (tint controls glyph color) ──
function StatusBar({ tint = 'dark', time = '9:41' }) {
  const c = tint === 'light' ? '#fff' : 'var(--ink)';
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 54, zIndex: 40,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 30px 0', pointerEvents: 'none',
    }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 15, color: c, letterSpacing: '.02em' }}>{time}</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="18" height="11" viewBox="0 0 18 11"><rect x="0" y="7" width="3" height="4" rx=".6" fill={c}/><rect x="4.5" y="4.5" width="3" height="6.5" rx=".6" fill={c}/><rect x="9" y="2" width="3" height="9" rx=".6" fill={c}/><rect x="13.5" y="0" width="3" height="11" rx=".6" fill={c} fillOpacity=".4"/></svg>
        <svg width="16" height="11" viewBox="0 0 16 11"><path d="M8 2.8c2.1 0 4 .8 5.4 2.2l1-1C12.7 2.2 10.4 1.1 8 1.1S3.3 2.2 1.6 4l1 1C4 3.6 5.9 2.8 8 2.8z" fill={c}/><path d="M8 6.1c1.2 0 2.3.5 3.1 1.3l1-1C11 5.3 9.6 4.7 8 4.7s-3 .6-4.1 1.7l1 1C5.7 6.6 6.8 6.1 8 6.1z" fill={c}/><circle cx="8" cy="9.4" r="1.3" fill={c}/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" stroke={c} strokeOpacity=".4" fill="none"/><rect x="2" y="2" width="16" height="8" rx="1.6" fill={c}/><path d="M23 4v4c.7-.3 1.2-1 1.2-2S23.7 4.3 23 4z" fill={c} fillOpacity=".5"/></svg>
      </div>
    </div>
  );
}

function PhoneFrame({ children, tint = 'dark', bg = '#000', w = 390, h = 844, shadow = true }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: 54, position: 'relative',
      background: bg, overflow: 'hidden',
      boxShadow: shadow ? '0 50px 100px -20px rgba(40,28,12,.45), 0 0 0 10px #14110c, 0 0 0 12px #2a241a' : 'none',
      fontFamily: 'var(--font-sans)', flexShrink: 0,
    }}>
      {/* dynamic island */}
      <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 116, height: 34, borderRadius: 20, background: '#000', zIndex: 50 }} />
      <StatusBar tint={tint} />
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>{children}</div>
      {/* home indicator */}
      <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', width: 134, height: 5, borderRadius: 100, background: tint === 'light' ? 'rgba(255,255,255,.65)' : 'rgba(20,16,10,.32)', zIndex: 60, pointerEvents: 'none' }} />
    </div>
  );
}

// ── progress dots ──
function Dots({ n, i, color = 'var(--ink)', dim = 'rgba(0,0,0,.18)' }) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      {Array.from({ length: n }).map((_, k) => (
        <div key={k} style={{
          height: 6, borderRadius: 99,
          width: k === i ? 20 : 6,
          background: k === i ? color : dim,
          transition: 'all .35s var(--ease)',
        }} />
      ))}
    </div>
  );
}

// ── primary button ──
function AppButton({ children, onClick, bg = 'var(--ink)', color = 'var(--cream)', style = {}, ghost = false, disabled = false }) {
  const [press, setPress] = React.useState(false);
  const base = ghost
    ? { background: 'transparent', color: bg, border: '1.5px solid currentColor' }
    : { background: bg, color };
  return (
    <button onClick={disabled ? undefined : onClick}
      onPointerDown={() => setPress(true)} onPointerUp={() => setPress(false)} onPointerLeave={() => setPress(false)}
      style={{
        width: '100%', height: 56, borderRadius: 16, fontFamily: 'var(--font-sans)',
        fontSize: 16, fontWeight: 600, letterSpacing: '.01em',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
        transition: 'transform .12s var(--ease), opacity .2s, filter .15s',
        transform: press ? 'translateY(1px) scale(.99)' : 'none',
        filter: press ? 'brightness(.94)' : 'none',
        opacity: disabled ? .4 : 1, cursor: disabled ? 'not-allowed' : 'pointer',
        ...base, ...style,
      }}>{children}</button>
  );
}

// ── catalog stamp label ──
function Stamp({ children, color = 'var(--gold)', style = {} }) {
  return <div className="mono-label" style={{ color, ...style }}>{children}</div>;
}

function Spinner({ size = 22, color = 'currentColor' }) {
  return <div style={{ width: size, height: size, borderRadius: '50%', border: `2.5px solid ${color}`, borderTopColor: 'transparent', animation: 'spinSlow .8s linear infinite' }} />;
}

// step hook with direction tracking
function useStep(initial = 0) {
  const [i, setI] = React.useState(initial);
  const go = React.useCallback((n) => setI(n), []);
  const next = React.useCallback(() => setI(v => v + 1), []);
  const back = React.useCallback(() => setI(v => Math.max(0, v - 1)), []);
  return { i, go, next, back, setI };
}

// ── Stage: scales a fixed-size composition to fit the viewport (letterboxed) ──
function Stage({ width, height, children, bg = 'radial-gradient(120% 80% at 50% -10%, #efe9dc 0%, #e7e0d0 55%, #ddd4c0 100%)' }) {
  const [s, setS] = React.useState(1);
  React.useEffect(() => {
    const fit = () => setS(Math.min(1, (window.innerWidth - 32) / width, (window.innerHeight - 32) / height));
    fit(); window.addEventListener('resize', fit); return () => window.removeEventListener('resize', fit);
  }, [width, height]);
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg }}>
      <div style={{ width, height, transform: `scale(${s})`, transformOrigin: 'center center', position: 'relative', flexShrink: 0 }}>{children}</div>
    </div>
  );
}

Object.assign(window, { PhoneFrame, StatusBar, Dots, AppButton, Stamp, Spinner, useStep, Stage });
