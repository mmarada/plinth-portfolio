// cascade.jsx — "Cascade Contemporary": a museum membership signup flow.
const { useState, useEffect } = React;
const CA = 'assets/art/';

const CNOTES = [
  { stage: 'Earn the ask', n: '01', title: 'Show the place before the form',
    body: 'Nobody signs up for a form. We lead with the museum and one clear promise, so the email feels like a small price for something already wanted.' },
  { stage: 'Reduce friction', n: '02', title: 'Make the fast path obvious',
    body: 'Social auth sits first and largest; email is the fallback. One decision per screen keeps momentum — the enemy of every signup is a second of doubt.' },
  { stage: 'Personalize, lightly', n: '03', title: 'Ask only what tailors',
    body: 'Name and a few taps — nothing that doesn’t shape the experience. Every field must earn its place; the rest can wait until the value is felt.' },
  { stage: 'Frame the choice', n: '04', title: 'Price the free option too',
    body: 'Spelling out what Visitor includes makes the paid tiers legible. The middle plan is pre-selected as an anchor — a gentle, honest default.' },
  { stage: 'Lower the caution', n: '05', title: 'A form that feels safe',
    body: 'Trust signals, a clear total, and a visible free path keep checkout from reading as a wall. Caution is a cost; good content design pays it down.' },
  { stage: 'Belonging', n: '06', title: 'Close with identity, not a receipt',
    body: 'The membership card turns a transaction into belonging. People keep what feels like theirs — the last screen is the first day of the relationship.' },
];

const TIERS = [
  { k: 'visitor', name: 'Visitor', price: 'Free', sub: 'forever', perks: ['Browse every exhibition', 'Save works & build lists', 'Members’ newsletter'] },
  { k: 'member', name: 'Member', price: '$12', sub: '/month', perks: ['Unlimited entry, no lines', 'Member previews & talks', '10% in the shop & café'], pop: true },
  { k: 'patron', name: 'Patron', price: '$35', sub: '/month', perks: ['Everything in Member', 'Two guest passes monthly', 'The Patron lounge'] },
];
const INTERESTS = ['Painting', 'Sculpture', 'New media', 'Textiles', 'Photography', 'Works on paper'];

// ── 0 · Intro ──
function CIntro({ next }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--charcoal)', display: 'flex', flexDirection: 'column', color: 'var(--off-white)' }} className="rise">
      <div style={{ position: 'relative', height: 420, overflow: 'hidden' }}>
        <img src={CA + 'cont-3.png'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(31,33,36,.2), var(--charcoal) 96%)' }} />
        <div style={{ position: 'absolute', top: 64, left: 30 }} className="mono-label">Cascade Contemporary · Seattle</div>
      </div>
      <div style={{ flex: 1, padding: '0 30px 40px', display: 'flex', flexDirection: 'column' }}>
        <h1 className="serif" style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.04, letterSpacing: '-.02em', margin: '-40px 0 16px' }}>Membership that <span style={{ fontStyle: 'italic', color: 'var(--marigold)' }}>moves with you</span></h1>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: 'rgba(244,243,240,.66)', margin: '0 0 auto', maxWidth: 320 }}>Unlimited entry, member previews, and a collection that spans a Madhubani doorway to last week’s new media. Join in a minute.</p>
        <AppButton onClick={next} bg="var(--off-white)" color="var(--charcoal)" style={{ marginTop: 28 }}>Become a member</AppButton>
        <div style={{ textAlign: 'center', marginTop: 14, fontSize: 13.5, color: 'rgba(244,243,240,.5)' }}>Member already? <span style={{ color: 'var(--off-white)', textDecoration: 'underline' }}>Sign in</span></div>
      </div>
    </div>
  );
}

// ── 1 · Auth ──
function CAuth({ next }) {
  const [email, setEmail] = useState('');
  const social = (label, mark) => (
    <button onClick={next} style={{ width: '100%', height: 54, borderRadius: 14, border: '1.5px solid var(--concrete-2)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 15.5, fontWeight: 600, color: 'var(--charcoal)' }}>
      {mark}{label}
    </button>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--off-white)', padding: '78px 30px 40px', display: 'flex', flexDirection: 'column' }} className="rise">
      <Stamp color="var(--vermillion)">Join · 1 of 4</Stamp>
      <h2 className="serif" style={{ fontSize: 32, fontWeight: 500, color: 'var(--charcoal)', margin: '12px 0 22px', letterSpacing: '-.02em' }}>Create your account</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
        {social('Continue with Apple', <svg width="17" height="17" viewBox="0 0 17 17"><path d="M13.6 9c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7c-1.3 0-2.6.8-3.2 2-1.4 2.4-.4 6 1 8 .6 1 1.4 2 2.4 2s1.3-.6 2.5-.6 1.5.6 2.5.6 1.7-1 2.3-2c.7-1.1 1-2.2 1-2.2s-1.7-.7-1.7-2.6z" fill="#000"/></svg>)}
        {social('Continue with Google', <svg width="17" height="17" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6 1.5 7.4 2.8l5.4-5.3C33.6 3.8 29.3 2 24 2 14.6 2 6.5 7.4 3 15.3l6.6 5.1C11.3 14 17.1 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-2.8-.4-4H24v7.6h12.4c-.3 2-1.6 5-4.6 7l6.4 4.9c3.8-3.5 6-8.7 6-15.5z"/><path fill="#FBBC05" d="M9.6 28.4c-.4-1.3-.7-2.6-.7-4s.3-2.7.7-4l-6.6-5.1C1.6 18.5 1 21.2 1 24s.6 5.5 2 7.7z"/><path fill="#34A853" d="M24 46c5.3 0 9.7-1.7 13-4.8l-6.4-4.9c-1.7 1.2-4 2-6.6 2-6.9 0-12.7-4.5-14.4-10.9l-6.6 5.1C6.5 40.6 14.6 46 24 46z"/></svg>)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--concrete-2)' }} /><span className="mono-label" style={{ color: 'rgba(31,33,36,.4)' }}>or</span><div style={{ flex: 1, height: 1, background: 'var(--concrete-2)' }} />
      </div>
      <label className="mono-label" style={{ color: 'rgba(31,33,36,.55)', marginBottom: 7 }}>Email</label>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" autoFocus style={{ height: 54, borderRadius: 14, border: '1.5px solid var(--concrete-2)', background: '#fff', padding: '0 16px', fontSize: 16, fontFamily: 'var(--font-sans)', color: 'var(--charcoal)', outline: 'none' }} onFocus={e => e.target.style.borderColor = 'var(--vermillion)'} onBlur={e => e.target.style.borderColor = 'var(--concrete-2)'} />
      <div style={{ flex: 1 }} />
      <AppButton onClick={next} bg="var(--vermillion)" color="#fff" disabled={!email.includes('@')}>Continue</AppButton>
      <p style={{ fontSize: 12, color: 'rgba(31,33,36,.45)', textAlign: 'center', margin: '12px 0 0', lineHeight: 1.5 }}>By continuing you agree to our Terms & Privacy Policy.</p>
    </div>
  );
}

// ── 2 · Profile ──
function CProfile({ next, name, setName, ints, setInts }) {
  const toggle = k => setInts(s => s.includes(k) ? s.filter(x => x !== k) : [...s, k]);
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--off-white)', padding: '78px 30px 40px', display: 'flex', flexDirection: 'column' }} className="rise">
      <Stamp color="var(--vermillion)">Join · 2 of 4</Stamp>
      <h2 className="serif" style={{ fontSize: 32, fontWeight: 500, color: 'var(--charcoal)', margin: '12px 0 4px', letterSpacing: '-.02em' }}>A little about you</h2>
      <p style={{ fontSize: 14.5, color: 'rgba(31,33,36,.6)', margin: '0 0 20px' }}>So your previews and recommendations land right.</p>
      <label className="mono-label" style={{ color: 'rgba(31,33,36,.55)', marginBottom: 7 }}>Your name</label>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Aria Mehta" autoFocus style={{ height: 54, borderRadius: 14, border: '1.5px solid var(--concrete-2)', background: '#fff', padding: '0 16px', fontSize: 16, fontFamily: 'var(--font-sans)', color: 'var(--charcoal)', outline: 'none', marginBottom: 20 }} onFocus={e => e.target.style.borderColor = 'var(--vermillion)'} onBlur={e => e.target.style.borderColor = 'var(--concrete-2)'} />
      <label className="mono-label" style={{ color: 'rgba(31,33,36,.55)', marginBottom: 10 }}>What pulls you in?</label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
        {INTERESTS.map(t => { const on = ints.includes(t); return (
          <button key={t} onClick={() => toggle(t)} style={{ padding: '9px 15px', borderRadius: 99, fontSize: 14, fontWeight: 500, border: '1.5px solid ' + (on ? 'var(--charcoal)' : 'var(--concrete-2)'), background: on ? 'var(--charcoal)' : '#fff', color: on ? 'var(--off-white)' : 'var(--slate)', transition: 'all .18s var(--ease)' }}>{t}</button>
        ); })}
      </div>
      <div style={{ flex: 1 }} />
      <AppButton onClick={next} bg="var(--vermillion)" color="#fff" disabled={name.trim().length < 2}>Continue</AppButton>
    </div>
  );
}

// ── 3 · Tier ──
function CTier({ next, tier, setTier }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--off-white)', padding: '78px 26px 40px', display: 'flex', flexDirection: 'column' }} className="rise">
      <Stamp color="var(--vermillion)">Join · 3 of 4</Stamp>
      <h2 className="serif" style={{ fontSize: 30, fontWeight: 500, color: 'var(--charcoal)', margin: '12px 0 16px', letterSpacing: '-.02em' }}>Choose your membership</h2>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 11, overflow: 'auto' }}>
        {TIERS.map(t => { const on = tier === t.k; return (
          <button key={t.k} onClick={() => setTier(t.k)} style={{ textAlign: 'left', borderRadius: 16, padding: '16px 18px', background: on ? 'var(--charcoal)' : '#fff', color: on ? 'var(--off-white)' : 'var(--charcoal)', border: '1.5px solid ' + (on ? 'var(--charcoal)' : 'var(--concrete-2)'), boxShadow: on ? '0 14px 30px rgba(31,33,36,.2)' : 'none', transition: 'all .22s var(--ease)', position: 'relative' }}>
            {t.pop && <span className="mono-label" style={{ position: 'absolute', top: 16, right: 16, color: on ? 'var(--marigold)' : 'var(--vermillion)' }}>Most chosen</span>}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 18 }}>{t.name}</span>
            </div>
            <div style={{ margin: '4px 0 10px' }}><span className="serif" style={{ fontSize: 30, fontWeight: 500 }}>{t.price}</span><span style={{ fontSize: 13, opacity: .6, marginLeft: 4 }}>{t.sub}</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {t.perks.map(p => <div key={p} style={{ display: 'flex', gap: 8, fontSize: 13.5, opacity: on ? .9 : .7 }}><span style={{ color: on ? 'var(--marigold)' : 'var(--vermillion)' }}>—</span>{p}</div>)}
            </div>
          </button>
        ); })}
      </div>
      <AppButton onClick={next} bg="var(--vermillion)" color="#fff" style={{ marginTop: 12 }}>{tier === 'visitor' ? 'Join free' : 'Continue to payment'}</AppButton>
    </div>
  );
}

// ── 4 · Payment ──
function CPay({ next, tier }) {
  const t = TIERS.find(x => x.k === tier);
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--off-white)', padding: '78px 30px 40px', display: 'flex', flexDirection: 'column' }} className="rise">
      <Stamp color="var(--vermillion)">Join · 4 of 4</Stamp>
      <h2 className="serif" style={{ fontSize: 30, fontWeight: 500, color: 'var(--charcoal)', margin: '12px 0 16px', letterSpacing: '-.02em' }}>Payment</h2>
      <div style={{ background: '#fff', border: '1px solid var(--concrete-2)', borderRadius: 16, padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div><div style={{ fontWeight: 600, fontSize: 15, color: 'var(--charcoal)' }}>{t.name} membership</div><div style={{ fontSize: 13, color: 'rgba(31,33,36,.55)' }}>Billed monthly · cancel anytime</div></div>
        <div className="serif" style={{ fontSize: 24, color: 'var(--charcoal)' }}>{t.price}<span style={{ fontSize: 12, opacity: .6 }}>{t.sub}</span></div>
      </div>
      <label className="mono-label" style={{ color: 'rgba(31,33,36,.55)', marginBottom: 7 }}>Card number</label>
      <div style={{ position: 'relative', marginBottom: 12 }}>
        <input defaultValue="4242 4242 4242 4242" style={{ width: '100%', height: 52, borderRadius: 14, border: '1.5px solid var(--concrete-2)', background: '#fff', padding: '0 16px', fontSize: 16, fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', outline: 'none', boxSizing: 'border-box' }} />
        <svg width="28" height="18" viewBox="0 0 28 18" style={{ position: 'absolute', right: 14, top: 17 }}><rect width="28" height="18" rx="3" fill="#E7E4DD"/><circle cx="11" cy="9" r="5" fill="var(--vermillion)" opacity=".85"/><circle cx="17" cy="9" r="5" fill="var(--marigold)" opacity=".85"/></svg>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <div style={{ flex: 1 }}><label className="mono-label" style={{ color: 'rgba(31,33,36,.55)', display: 'block', marginBottom: 7 }}>Expiry</label><input defaultValue="08 / 28" style={{ width: '100%', height: 52, borderRadius: 14, border: '1.5px solid var(--concrete-2)', background: '#fff', padding: '0 16px', fontSize: 16, fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', outline: 'none', boxSizing: 'border-box' }} /></div>
        <div style={{ flex: 1 }}><label className="mono-label" style={{ color: 'rgba(31,33,36,.55)', display: 'block', marginBottom: 7 }}>CVC</label><input defaultValue="123" style={{ width: '100%', height: 52, borderRadius: 14, border: '1.5px solid var(--concrete-2)', background: '#fff', padding: '0 16px', fontSize: 16, fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', outline: 'none', boxSizing: 'border-box' }} /></div>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 12, color: 'rgba(31,33,36,.5)' }}>
        <svg width="13" height="15" viewBox="0 0 13 15"><path d="M6.5 1l5 2v4c0 4-2.5 6-5 7-2.5-1-5-3-5-7V3z" fill="none" stroke="currentColor" strokeWidth="1.3"/></svg>
        <span style={{ fontSize: 12.5 }}>Encrypted · you won’t be charged until tomorrow</span>
      </div>
      <AppButton onClick={next} bg="var(--charcoal)" color="var(--off-white)">Confirm membership</AppButton>
    </div>
  );
}

// ── 5 · Welcome / membership card ──
function CWelcome({ restart, name, tier }) {
  const t = TIERS.find(x => x.k === tier);
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--indigo)', padding: '78px 30px 40px', display: 'flex', flexDirection: 'column', color: 'var(--off-white)' }} className="rise">
      <div style={{ textAlign: 'center', marginBottom: 26 }}>
        <Stamp color="var(--marigold)" style={{ marginBottom: 8 }}>Welcome to Cascade</Stamp>
        <h2 className="serif" style={{ fontSize: 30, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-.01em' }}>You’re in, {name.split(' ')[0] || 'friend'}.</h2>
      </div>
      <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '1.6', boxShadow: '0 24px 50px rgba(0,0,0,.4)', animation: 'scaleIn .6s var(--ease) both' }}>
        <img src={CA + 'cont-2.png'} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .9 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(31,33,36,.85), rgba(31,33,36,.35))' }} />
        <div style={{ position: 'absolute', inset: 0, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span className="mono-label" style={{ color: 'var(--marigold)' }}>Cascade · {t.name}</span>
            <span className="mono-label" style={{ color: 'rgba(255,255,255,.6)' }}>2026</span>
          </div>
          <div>
            <div className="serif" style={{ fontSize: 24, fontWeight: 500 }}>{name || 'Aria Mehta'}</div>
            <div className="mono-label tabnum" style={{ color: 'rgba(255,255,255,.7)', marginTop: 4 }}>No. 0014 · Seattle</div>
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center', fontSize: 14.5, color: 'rgba(244,243,240,.7)', margin: '22px auto 0', maxWidth: 290, lineHeight: 1.5 }}>Your card lives in your wallet. Skip the line — just tap in at the door.</p>
      <div style={{ flex: 1 }} />
      <AppButton onClick={restart} bg="var(--marigold)" color="var(--indigo)">Enter the museum</AppButton>
    </div>
  );
}

// ── shell ──
function Placard({ note, on }) {
  return (
    <div style={{ width: 340, flexShrink: 0, opacity: on ? 1 : 0, transform: on ? 'none' : 'translateX(-12px)', transition: 'opacity .4s var(--ease), transform .4s var(--ease)', pointerEvents: on ? 'auto' : 'none' }}>
      <div style={{ background: '#fff', border: '1px solid rgba(31,33,36,.12)', borderLeft: '3px solid var(--vermillion)', padding: '22px 24px', borderRadius: 4, boxShadow: '0 18px 40px rgba(40,28,12,.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <span className="mono-label" style={{ color: 'var(--vermillion)' }}>Signup · {note.stage}</span>
          <span className="mono-label tabnum" style={{ color: 'rgba(31,33,36,.4)' }}>{note.n}/06</span>
        </div>
        <h3 className="serif" style={{ fontSize: 23, fontWeight: 500, lineHeight: 1.18, color: 'var(--charcoal)', margin: '0 0 10px' }}>{note.title}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'rgba(31,33,36,.66)', margin: 0 }}>{note.body}</p>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(31,33,36,.1)', fontSize: 12.5, color: 'rgba(31,33,36,.45)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>Cascade — account signup · curator’s note</div>
      </div>
    </div>
  );
}

function CascadeApp() {
  const [step, setStep] = useState(0);
  const [notes, setNotes] = useState(true);
  const [name, setName] = useState('');
  const [ints, setInts] = useState(['Painting', 'Textiles']);
  const [tier, setTier] = useState('member');
  const next = () => setStep(s => {
    if (s === 3 && tier === 'visitor') return 5; // free skips payment
    return s + 1;
  });
  const restart = () => { setStep(0); setName(''); setTier('member'); };
  const screens = [
    <CIntro next={next} />,
    <CAuth next={next} />,
    <CProfile next={next} name={name} setName={setName} ints={ints} setInts={setInts} />,
    <CTier next={next} tier={tier} setTier={setTier} />,
    <CPay next={next} tier={tier} />,
    <CWelcome restart={restart} name={name} tier={tier} />,
  ];
  const tint = ['light', 'dark', 'dark', 'dark', 'dark', 'light'][step];
  const back = () => setStep(s => { if (s === 5 && tier === 'visitor') return 3; return Math.max(0, s - 1); });
  return (
    <Stage width={830} height={960}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <PhoneFrame tint={tint} bg="#000">{screens[step]}</PhoneFrame>
          <Placard note={CNOTES[step]} on={notes} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <Dots n={6} i={step} color="var(--vermillion)" dim="rgba(31,33,36,.2)" />
          <div style={{ width: 1, height: 18, background: 'rgba(31,33,36,.15)' }} />
          <button onClick={() => setNotes(v => !v)} className="mono-label" style={{ display: 'flex', alignItems: 'center', gap: 8, color: notes ? 'var(--vermillion)' : 'rgba(31,33,36,.45)' }}>
            <span style={{ width: 30, height: 17, borderRadius: 99, background: notes ? 'var(--vermillion)' : 'rgba(31,33,36,.2)', position: 'relative', transition: 'background .25s' }}>
              <span style={{ position: 'absolute', top: 2, left: notes ? 15 : 2, width: 13, height: 13, borderRadius: '50%', background: '#fff', transition: 'left .25s var(--ease)' }} />
            </span>
            Designer’s notes
          </button>
          {step > 0 && <button onClick={back} className="mono-label" style={{ color: 'rgba(31,33,36,.4)' }}>← Back</button>}
        </div>
      </div>
    </Stage>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CascadeApp />);
