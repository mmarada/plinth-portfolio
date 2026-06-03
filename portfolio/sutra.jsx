// sutra.jsx — "Sūtra": a guided lesson on reading Madhubani — content-design led.
const { useState } = React;
const SA = 'assets/art/';

const SNOTES = [
  { stage: 'Start', n: '01', title: 'Promise the smallest next step',
    body: 'One lesson, five minutes, one idea. Learners begin when the cost looks tiny — so the entry point is a single tap, never a syllabus.' },
  { stage: 'Teach', n: '02', title: 'One idea per screen',
    body: 'Chunking plus dual coding — image beside words — respects working memory. A key term is named and defined in plain language; no wall of text to wade through.' },
  { stage: 'Do', n: '03', title: 'Make them act, not just read',
    body: 'Tap-to-reveal is active recall in disguise. Doing beats reading for retention, and discovering a motif yourself is stickier than being told it.' },
  { stage: 'Check', n: '04', title: 'Test to teach, not to grade',
    body: 'A low-stakes check with instant, kind feedback turns recall into the lesson itself — the testing effect. Wrong answers explain, never punish.' },
  { stage: 'Consolidate', n: '05', title: 'Name the gain, queue the next',
    body: 'A short recap consolidates memory while the streak motivates return. The loop closes by making progress visible and the next lesson feel inevitable.' },
];

// ── 0 · Course intro ──
function SIntro({ next }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--indigo)', display: 'flex', flexDirection: 'column', color: 'var(--cream)' }} className="rise">
      <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <img src={SA + 'mandala-vermillion.png'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(27,42,107,.1), var(--indigo) 97%)' }} />
      </div>
      <div style={{ flex: 1, padding: '0 30px 38px', display: 'flex', flexDirection: 'column', marginTop: -26 }}>
        <Stamp color="var(--marigold)">Course · Reading Madhubani</Stamp>
        <h1 className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.06, letterSpacing: '-.02em', margin: '10px 0 12px' }}>The grammar of a <span style={{ fontStyle: 'italic', color: 'var(--marigold)' }}>painted line</span></h1>
        <p style={{ fontSize: 15.5, lineHeight: 1.55, color: 'rgba(251,244,230,.7)', margin: '0 0 auto', maxWidth: 320 }}>Six short lessons on the motifs of Mithila painting — what the fish, the lotus and the sun have always meant. Five minutes a day.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '20px 0' }}>
          <div style={{ flex: 1, height: 6, borderRadius: 99, background: 'rgba(251,244,230,.18)', overflow: 'hidden' }}><div style={{ width: '0%', height: '100%', background: 'var(--marigold)' }} /></div>
          <span className="mono-label tabnum" style={{ color: 'rgba(251,244,230,.6)' }}>Lesson 1 / 6</span>
        </div>
        <AppButton onClick={next} bg="var(--marigold)" color="var(--indigo)">Begin lesson 1</AppButton>
      </div>
    </div>
  );
}

// ── 1 · Teach ──
function STeach({ next }) {
  const [more, setMore] = useState(false);
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--cream)', padding: '74px 28px 32px', display: 'flex', flexDirection: 'column' }} className="rise">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <Stamp color="var(--terracotta)">Lesson 1 · The filled style</Stamp>
        <span className="mono-label tabnum" style={{ color: 'rgba(26,20,16,.4)' }}>1/3</span>
      </div>
      <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 12px 30px rgba(110,30,42,.16)', marginBottom: 18, aspectRatio: '16/11' }}><img src={SA + 'lotus-maroon.png'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
      <h2 className="serif" style={{ fontSize: 26, fontWeight: 500, color: 'var(--ink)', margin: '0 0 8px', lineHeight: 1.12 }}>No empty space</h2>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--maroon)', margin: '0 0 14px' }}>In <i>bharni</i> — the filled style — every gap holds something: a leaf, a dot, a fish. The eye is never allowed to rest on blank ground.</p>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start', background: 'var(--cream-2)', borderRadius: 99, padding: '7px 14px', marginBottom: 12 }}>
        <span className="mono-label" style={{ color: 'var(--terracotta)' }}>Key term</span>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Bharni · भरनी</span>
      </div>
      {more && <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--maroon)', opacity: .8, margin: '0 0 6px', animation: 'fadeIn .3s both' }}>The horror of the void is practical too: dense fill protected the mud wall it was painted on, and gave the pigment something to hold.</p>}
      {!more && <button onClick={() => setMore(true)} className="mono-label" style={{ color: 'var(--vermillion)', alignSelf: 'flex-start' }}>Why? ↓</button>}
      <div style={{ flex: 1 }} />
      <AppButton onClick={next} bg="var(--ink)" color="var(--cream)">Next</AppButton>
    </div>
  );
}

// ── 2 · Interactive: tap the motif ──
const HOT = [
  { x: 50, y: 50, term: 'Bindu · the centre', text: 'The still point. Every mandala grows outward from this single seed.' },
  { x: 50, y: 20, term: 'Lotus ring', text: 'Petals for purity — beauty that rises, unstained, from muddy water.' },
  { x: 16, y: 62, term: 'Dotted border', text: 'Nothing is left open. The edge keeps the world in and the eye circling.' },
];
function SInteract({ next }) {
  const [found, setFound] = useState([]);
  const [active, setActive] = useState(null);
  const tap = i => { setActive(i); setFound(f => f.includes(i) ? f : [...f, i]); };
  const all = found.length === HOT.length;
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--maroon)', padding: '74px 28px 32px', display: 'flex', flexDirection: 'column', color: 'var(--cream)' }} className="rise">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <Stamp color="var(--marigold)">Find the three motifs</Stamp>
        <span className="mono-label tabnum" style={{ color: 'var(--marigold)' }}>{found.length}/3</span>
      </div>
      <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '1', boxShadow: '0 14px 34px rgba(0,0,0,.3)' }}>
        <img src={SA + 'mandala-jade.png'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {HOT.map((h, i) => { const on = active === i, seen = found.includes(i); return (
          <button key={i} onClick={() => tap(i)} style={{ position: 'absolute', left: h.x + '%', top: h.y + '%', transform: 'translate(-50%,-50%)', width: on ? 34 : 28, height: on ? 34 : 28, borderRadius: '50%', background: seen ? 'var(--marigold)' : 'rgba(251,244,230,.92)', border: '2px solid #fff', boxShadow: on ? '0 0 0 6px rgba(232,161,28,.4)' : '0 2px 8px rgba(0,0,0,.4)', transition: 'all .2s var(--ease)', display: 'grid', placeItems: 'center' }}>
            {seen ? <svg width="13" height="13" viewBox="0 0 13 13"><path d="M2 7l3 3 6-7" stroke="var(--maroon)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg> : <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--maroon)' }} />}
          </button>
        ); })}
      </div>
      <div style={{ minHeight: 92, marginTop: 14 }}>
        {active === null ? (
          <p style={{ fontSize: 14.5, color: 'rgba(251,244,230,.6)', textAlign: 'center', margin: '20px 0 0' }}>Tap a glowing point to learn its meaning.</p>
        ) : (
          <div style={{ background: 'rgba(0,0,0,.22)', borderRadius: 14, padding: '14px 16px', animation: 'fadeIn .3s both' }}>
            <div className="mono-label" style={{ color: 'var(--marigold)', marginBottom: 5 }}>{HOT[active].term}</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--cream)', margin: 0 }}>{HOT[active].text}</p>
          </div>
        )}
      </div>
      <div style={{ flex: 1 }} />
      <AppButton onClick={next} bg="var(--marigold)" color="var(--maroon)" disabled={!all}>{all ? 'Continue' : `Find ${3 - found.length} more`}</AppButton>
    </div>
  );
}

// ── 3 · Quiz ──
const Q = { q: 'In Mithila painting, the fish (matsya) traditionally stands for —', opts: ['Fertility & good fortune', 'Mourning', 'The harvest moon', 'A coming storm'], correct: 0, why: 'Right. Fish move in shoals and multiply — across Mithila they signal fertility, abundance and good luck, which is why they crowd wedding paintings.' };
function SQuiz({ next }) {
  const [pick, setPick] = useState(null);
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--cream)', padding: '74px 28px 32px', display: 'flex', flexDirection: 'column' }} className="rise">
      <Stamp color="var(--terracotta)">Quick check</Stamp>
      <h2 className="serif" style={{ fontSize: 25, fontWeight: 500, color: 'var(--ink)', margin: '12px 0 20px', lineHeight: 1.18 }}>{Q.q}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {Q.opts.map((o, i) => {
          const chosen = pick === i, isC = i === Q.correct, reveal = pick !== null;
          let bd = 'var(--cream-2)', bg = '#fff', col = 'var(--ink)';
          if (reveal && isC) { bd = 'var(--success,#3E7D5A)'; bg = '#EAF2EC'; }
          else if (reveal && chosen && !isC) { bd = 'var(--vermillion)'; bg = '#FBE7DF'; }
          return (
            <button key={i} onClick={() => pick === null && setPick(i)} style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderRadius: 14, border: '1.5px solid ' + bd, background: bg, color: col, fontSize: 15, fontWeight: 500, transition: 'all .2s var(--ease)', cursor: pick === null ? 'pointer' : 'default' }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', border: '1.5px solid ' + (reveal && isC ? 'var(--success,#3E7D5A)' : reveal && chosen ? 'var(--vermillion)' : 'var(--cream-2)'), display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                {reveal && isC && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-6" stroke="var(--success,#3E7D5A)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                {reveal && chosen && !isC && <svg width="11" height="11" viewBox="0 0 11 11"><path d="M2 2l7 7M9 2l-7 7" stroke="var(--vermillion)" strokeWidth="2" strokeLinecap="round"/></svg>}
              </span>
              {o}
            </button>
          );
        })}
      </div>
      {pick !== null && (
        <div style={{ marginTop: 16, padding: '14px 16px', borderRadius: 14, background: 'var(--jade-soft,#E2ECE7)', animation: 'fadeIn .3s both' }}>
          <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--jade)', margin: 0 }}>{pick === Q.correct ? Q.why : 'Not quite — the fish stands for fertility and good fortune, which is why it crowds wedding paintings. Keep it in mind.'}</p>
        </div>
      )}
      <div style={{ flex: 1 }} />
      <AppButton onClick={next} bg="var(--ink)" color="var(--cream)" disabled={pick === null}>Finish lesson</AppButton>
    </div>
  );
}

// ── 4 · Recap / completion ──
function SDone({ restart }) {
  const learned = ['Bharni fills every gap', 'The lotus means purity', 'The fish means fortune'];
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--cream)', padding: '74px 28px 32px', display: 'flex', flexDirection: 'column' }} className="rise">
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--maroon)', display: 'grid', placeItems: 'center', margin: '0 auto 16px', animation: 'scaleIn .5s var(--ease) both' }}>
          <svg width="30" height="30" viewBox="0 0 24 24"><path d="M12 2s5 4 5 9a5 5 0 01-10 0c0-2 1-3 1-3s-1 4 2 4 2-4 1-6 1-4-2-4z" fill="var(--marigold)"/></svg>
        </div>
        <Stamp color="var(--terracotta)">Lesson 1 complete</Stamp>
        <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, color: 'var(--ink)', margin: '8px 0 0' }}>Two-day streak</h2>
      </div>
      <div style={{ background: '#fff', border: '1px solid var(--cream-2)', borderRadius: 16, padding: '16px 18px', margin: '20px 0' }}>
        <div className="mono-label" style={{ color: 'rgba(26,20,16,.5)', marginBottom: 12 }}>You learned</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {learned.map((l, i) => (
            <div key={i} style={{ display: 'flex', gap: 11, alignItems: 'center', animation: `riseIn .4s var(--ease) both`, animationDelay: `${.1 + i * .1}s` }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--jade-soft,#E2ECE7)', display: 'grid', placeItems: 'center', flexShrink: 0 }}><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-6" stroke="var(--jade)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              <span style={{ fontSize: 15, color: 'var(--ink)' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--indigo)', borderRadius: 16, padding: '14px 18px', color: 'var(--cream)' }}>
        <div style={{ width: 46, height: 46, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}><img src={SA + 'torana-day.png'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
        <div style={{ flex: 1 }}><div className="mono-label" style={{ color: 'var(--marigold)' }}>Up next</div><div style={{ fontSize: 15, fontWeight: 600 }}>Lesson 2 · The sun & the doorway</div></div>
        <span style={{ fontSize: 22, color: 'var(--marigold)' }}>→</span>
      </div>
      <div style={{ flex: 1 }} />
      <AppButton onClick={restart} bg="var(--ink)" color="var(--cream)">Replay lesson</AppButton>
    </div>
  );
}

// ── shell ──
function Placard({ note, on }) {
  return (
    <div style={{ width: 340, flexShrink: 0, opacity: on ? 1 : 0, transform: on ? 'none' : 'translateX(-12px)', transition: 'opacity .4s var(--ease), transform .4s var(--ease)', pointerEvents: on ? 'auto' : 'none' }}>
      <div style={{ background: 'var(--off-white)', border: '1px solid rgba(26,20,16,.12)', borderLeft: '3px solid var(--vermillion)', padding: '22px 24px', borderRadius: 4, boxShadow: '0 18px 40px rgba(40,28,12,.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <span className="mono-label" style={{ color: 'var(--vermillion)' }}>Education · {note.stage}</span>
          <span className="mono-label tabnum" style={{ color: 'rgba(26,20,16,.4)' }}>{note.n}/05</span>
        </div>
        <h3 className="serif" style={{ fontSize: 23, fontWeight: 500, lineHeight: 1.18, color: 'var(--ink)', margin: '0 0 10px' }}>{note.title}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'rgba(26,20,16,.66)', margin: 0 }}>{note.body}</p>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(26,20,16,.1)', fontSize: 12.5, color: 'rgba(26,20,16,.45)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>Sūtra — educational flow · curator’s note</div>
      </div>
    </div>
  );
}

function SutraApp() {
  const [step, setStep] = useState(0);
  const [notes, setNotes] = useState(true);
  const next = () => setStep(s => s + 1);
  const screens = [
    <SIntro next={next} />,
    <STeach next={next} />,
    <SInteract next={next} />,
    <SQuiz next={next} />,
    <SDone restart={() => setStep(0)} />,
  ];
  const tint = ['light', 'dark', 'light', 'dark', 'dark'][step];
  return (
    <Stage width={830} height={960}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <PhoneFrame tint={tint} bg="#000">{screens[step]}</PhoneFrame>
          <Placard note={SNOTES[step]} on={notes} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <Dots n={5} i={step} color="var(--vermillion)" dim="rgba(110,30,42,.2)" />
          <div style={{ width: 1, height: 18, background: 'rgba(26,20,16,.15)' }} />
          <button onClick={() => setNotes(v => !v)} className="mono-label" style={{ display: 'flex', alignItems: 'center', gap: 8, color: notes ? 'var(--vermillion)' : 'rgba(26,20,16,.45)' }}>
            <span style={{ width: 30, height: 17, borderRadius: 99, background: notes ? 'var(--vermillion)' : 'rgba(26,20,16,.2)', position: 'relative', transition: 'background .25s' }}>
              <span style={{ position: 'absolute', top: 2, left: notes ? 15 : 2, width: 13, height: 13, borderRadius: '50%', background: '#fff', transition: 'left .25s var(--ease)' }} />
            </span>
            Designer’s notes
          </button>
          {step > 0 && <button onClick={() => setStep(s => Math.max(0, s - 1))} className="mono-label" style={{ color: 'rgba(26,20,16,.4)' }}>← Back</button>}
        </div>
      </div>
    </Stage>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SutraApp />);
