export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="top">
        <div className="nav-inner">
          <a className="logo" href="#">
            <span>Dream</span>
            <span className="o-acc">e</span>
            <span>o</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#" className="btn-pill orange">
              Download<span style={{ opacity: 0.7, fontWeight: 500 }}>— iOS</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="orb h" />
        <div className="hero-fade" />
        <div
          className="wrap hero-grid"
          style={{
            gridTemplateColumns: "1fr",
            textAlign: "center",
            justifyItems: "center",
            gap: 72,
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow">
              <span className="dot" />
              <span className="mono">v1.4 · for iOS</span>
            </div>
            <h1 className="hero-h">
              Catch a dream
              <br />
              before it <em>fades.</em>
            </h1>
            <p className="hero-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
              Dreameo is a half-asleep-friendly journal for your dreams. Open it
              the second you wake up, dump the dream in your own voice, and let
              AI surface the patterns later.
            </p>
            <div className="cta-row" style={{ justifyContent: "center" }}>
              <a className="app-store" href="#">
                <span className="ap-mark"></span>
                <span className="ap-stack">
                  <small>Download on the</small>
                  <b>App Store</b>
                </span>
              </a>
              <a className="btn-ghost" href="#how">
                See how it works →
              </a>
            </div>
            <div className="meta-row">
              <div>
                <strong>4.9★</strong>
                <span>App Store rating</span>
              </div>
              <div>
                <strong>12s</strong>
                <span>Avg. capture time</span>
              </div>
              <div>
                <strong>BYO key</strong>
                <span>Your AI, your data</span>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div
            className="phone-stage"
            style={{ marginBottom: -220, zIndex: 2 }}
          >
            <div className="phone">
              <div className="screen">
                <div className="status">
                  <span>7:14</span>
                  <div className="ic">
                    <span className="signal">
                      <i /><i /><i /><i />
                    </span>
                    <span className="wifi">●</span>
                    <span className="battery">
                      <i />
                    </span>
                  </div>
                </div>
                <div className="toast">
                  <span className="check">✓</span>
                  <span>Dream saved</span>
                </div>
                <div className="top-zone">
                  <div className="row-bar">
                    <div
                      style={{
                        fontSize: 24,
                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                      }}
                    >
                      Dream<span style={{ color: "var(--orange)" }}>e</span>o
                    </div>
                    <div className="gear" title="settings">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <circle cx={12} cy={12} r={3} />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.18l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.13.34.34.65.61.91" />
                      </svg>
                    </div>
                  </div>
                  <div className="dream-input">
                    I was walking through a forest at dawn. The trees were made
                    of glass and someone was calling my name from far away…
                  </div>
                </div>
                <div className="save-pill">
                  Save dream <span style={{ fontSize: 16 }}>↗</span>
                </div>
                <div className="mic rec">
                  <div className="wave">
                    <i /><i /><i />
                  </div>
                </div>
                <div className="sheet">
                  <div className="handle" />
                  <div className="week">
                    <div className="day"><div className="num">15</div><div className="lbl">Mon</div></div>
                    <div className="day"><div className="num">16</div><div className="lbl">Tue</div></div>
                    <div className="day"><div className="num">17</div><div className="lbl">Wed</div></div>
                    <div className="day sel"><div className="num">18</div><div className="lbl">Thu</div></div>
                    <div className="day"><div className="num">19</div><div className="lbl">Fri</div></div>
                    <div className="day"><div className="num">20</div><div className="lbl">Sat</div></div>
                    <div className="day"><div className="num">21</div><div className="lbl">Sun</div></div>
                  </div>
                  <div className="sep" />
                  <div className="dream-row">
                    <div className="t">The glass forest</div>
                    <div className="s">
                      Recurring symbol: transparency. Possible link to feeling
                      exposed at work.
                    </div>
                  </div>
                  <div className="sep" />
                  <div className="dream-row">
                    <div className="t">Late for an exam</div>
                    <div className="s">
                      Classic anxiety motif. Time pressure as analog for…
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO-TONE */}
      <section style={{ position: "relative", zIndex: 3, background: "var(--bg)" }}>
        <div className="wrap">
          <div className="mono kicker">Two-tone by design</div>
          <h2 className="section-h">
            Warm dark to capture. Crisp white to <em>look back.</em>
          </h2>
          <p className="section-sub">
            The screen splits the moment your brain does: a calm dark surface
            for the half-conscious dump, a bright clean sheet underneath where
            yesterday's dreams already live.
          </p>
          <div className="twotone">
            <div className="tt-half tt-dark">
              <div className="tt-art">
                capture <span className="ac">·</span>
              </div>
              <div>
                <h3>Eyes barely open</h3>
                <p>
                  One tap to record. The mic does the work. No login screen, no
                  toolbars, no notifications — just a dark surface and your
                  voice.
                </p>
              </div>
              <div className="tt-mock">
                ▮ recording · 00:11
                <br />
                "…and then the door wouldn't close…"
              </div>
            </div>
            <div className="tt-half tt-light">
              <div className="tt-art">browse</div>
              <div>
                <h3>Coffee in hand</h3>
                <p>
                  Pull up the sheet to scrub through the week. Each day shows
                  what your subconscious was up to. Tap any dream for the full
                  read.
                </p>
              </div>
              <div className="tt-mock">
                THU 18 · 2 dreams · 1 recurring symbol detected
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="wrap">
          <div className="mono kicker">Features</div>
          <h2 className="section-h">
            Built for the 90 seconds between <em>awake</em> and <em>gone.</em>
          </h2>
          <p className="section-sub">
            Dreams evaporate fast. Every choice in Dreameo trims the time
            between thinking the thought and it being safely on disk.
          </p>
          <div className="features">
            <div className="card c-6">
              <div className="mono" style={{ color: "var(--orange)" }}>
                01 · One-tap voice
              </div>
              <h4>Speak it. We'll write it.</h4>
              <p>
                The mic floats between the two zones, always one thumb away.
                Speech-to-text runs on-device so the words show up as you
                mumble them — even at 6:42am.
              </p>
              <div className="art-mic ix">
                <i /><i /><i /><i /><i /><i /><i /><i /><i />
              </div>
            </div>
            <div className="card c-6">
              <div className="mono" style={{ color: "var(--orange)" }}>
                02 · AI analysis
              </div>
              <h4>Patterns you'd never notice.</h4>
              <p>
                Bring your own OpenAI or Anthropic key. Each dream gets a short
                read; the calendar surfaces recurring symbols, emotional tone,
                and time-of-month patterns over weeks.
              </p>
              <div className="art-ai ix">
                <span className="label">Analysis · Thu 18</span>
                <div>
                  <span className="chip o">glass</span>
                  <span className="chip o">forest</span>
                  <span className="chip">calling</span>
                  <span className="chip">distance</span>
                </div>
                <div style={{ color: "var(--ink-50)" }}>
                  "You're processing visibility — being seen vs. being heard.
                  Compare to{" "}
                  <span style={{ color: "#fff" }}>Mar 4</span>."
                </div>
              </div>
            </div>
            <div className="card c-6">
              <div className="mono" style={{ color: "var(--orange)" }}>
                03 · Week strip
              </div>
              <h4>Scrub the week.</h4>
              <p>
                Seven days, large numerals, one orange beat for today. Drag up
                to expand into the full calendar.
              </p>
              <div className="art-cal ix">
                <div className="cell has">11</div>
                <div className="cell">12</div>
                <div className="cell has">13</div>
                <div className="cell">14</div>
                <div className="cell has">15</div>
                <div className="cell">16</div>
                <div className="cell has">17</div>
                <div className="cell has">18</div>
                <div className="cell today">19</div>
                <div className="cell">20</div>
                <div className="cell has">21</div>
                <div className="cell">22</div>
                <div className="cell has">23</div>
                <div className="cell">24</div>
              </div>
            </div>
            <div className="card c-6">
              <div className="mono" style={{ color: "var(--orange)" }}>
                04 · Toast &amp; save
              </div>
              <h4>Saved before you blink.</h4>
              <p>
                A black capsule slides in with a spring. A green check confirms.
                By the time you've stretched, it's already filed under today.
              </p>
              <div
                className="ix"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    background: "#000",
                    color: "#fff",
                    borderRadius: 99,
                    padding: "9px 16px",
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  Save dream ↗
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid var(--ink-10)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "7px 12px 7px 8px",
                    borderRadius: 99,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 99,
                      background: "#34C759",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 9,
                      color: "#fff",
                      fontWeight: 800,
                    }}
                  >
                    ✓
                  </span>
                  Dream saved
                </div>
              </div>
            </div>
            <div className="card c-12">
              <div className="mono" style={{ color: "var(--orange)" }}>
                05 · Your keys. Your dreams.
              </div>
              <h4>Local first. Cloud only when you say so.</h4>
              <p style={{ maxWidth: 680 }}>
                Dreameo stores every dream on your device. AI analysis runs
                against your own API key — Dreameo never sees the prompt, the
                response, or the contents of your night.
              </p>
              <div
                className="ix"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <div className="art-key">
                  <span>sk-ant-***************************</span>
                  <span className="dot-row">
                    <i /><i /><i />
                  </span>
                </div>
                <div className="art-key">
                  <span>sk-***********************************</span>
                  <span className="dot-row">
                    <i /><i /><i />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="wrap">
          <div className="mono kicker">How it works</div>
          <h2 className="section-h">
            Three steps. <em>Eyes optional.</em>
          </h2>
          <div className="steps">
            <div className="step">
              <div className="n">01</div>
              <h5>Open. Tap mic.</h5>
              <p>
                The app opens to the capture screen. The mic is the only button
                big enough to find with one eye closed.
              </p>
            </div>
            <div className="step">
              <div className="n">02</div>
              <h5>Mumble the dream.</h5>
              <p>
                Speak in any order. Backtrack, repeat, trail off. Dreameo
                transcribes live and saves the audio as a backup.
              </p>
            </div>
            <div className="step">
              <div className="n">03</div>
              <h5>Read it with coffee.</h5>
              <p>
                Later, pull up the sheet. Tap any day to see the AI's read —
                symbols, themes, callbacks to dreams from months ago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SETTINGS PREVIEW */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="settings-band">
            <div>
              <div className="mono kicker">Settings</div>
              <h2 className="section-h" style={{ fontSize: 42 }}>
                Your keys. Your model. Your <em>rules.</em>
              </h2>
              <p className="section-sub">
                Plug in your OpenAI or Gemini API key, pick your model, and
                Dreameo never touches your dream content. All analysis happens
                through your own account.
              </p>
            </div>
            <div className="settings-mock">
              <div className="sm-pad">
                <div className="sm-logo">
                  Dream<span className="o-acc">e</span>o
                </div>
                <div className="sm-title">Settings</div>
                <div className="sm-count">47 dreams logged</div>
              </div>
              <div className="sm-section">Notifications</div>
              <div className="sm-row">
                <span className="lbl">Morning Reminder</span>
                <div className="toggle" />
              </div>
              <div className="sm-row">
                <span className="lbl">Reminder Time</span>
                <span className="v">07:00</span>
              </div>
              <div className="sm-section">AI Analysis</div>
              <div className="sm-row">
                <span className="lbl">Provider</span>
                <span className="v">OpenAI</span>
              </div>
              <div className="sm-key">sk-proj-••••••••••••••••••••••••</div>
              <div className="sm-section">Dream Logging</div>
              <div className="sm-row">
                <span className="lbl">Voice Recording</span>
                <div className="toggle" />
              </div>
              <div className="sm-row">
                <span className="lbl">Haptic Feedback</span>
                <div className="toggle off" />
              </div>
              <div className="sm-actions">
                <div className="b1">Save API Key</div>
                <div className="b2">Clear</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: 0, paddingBottom: 120 }}>
        <div className="final">
          <div className="mono" style={{ color: "var(--orange)" }}>
            Available on the App Store
          </div>
          <h2>
            Tonight you'll <em>dream.</em>
            <br />
            Tomorrow you'll <em>remember.</em>
          </h2>
          <p>
            Free to download. Three free analyses per month. Bring your own key
            for unlimited.
          </p>
          <div className="cta-row" style={{ marginTop: 8 }}>
            <a
              className="app-store"
              href="#"
              style={{ background: "#000", color: "#fff" }}
            >
              <span className="ap-mark"></span>
              <span className="ap-stack">
                <small>Download on the</small>
                <b>App Store</b>
              </span>
            </a>
            <a
              className="btn-ghost"
              href="#"
              style={{ borderColor: "rgba(0,0,0,.15)", color: "#111" }}
            >
              TestFlight beta →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="f-grid">
            <div>
              <div className="logo" style={{ fontSize: 24 }}>
                Dream<span className="o-acc">e</span>o
              </div>
              <p
                style={{
                  color: "var(--ink-50)",
                  marginTop: 14,
                  maxWidth: 280,
                  lineHeight: 1.5,
                }}
              >
                A dream journal designed for the 60 seconds after your alarm
                goes off.
              </p>
            </div>
            <div>
              <h6>Product</h6>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how">How it works</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h6>Resources</h6>
              <ul>
                <li><a href="#">Symbol library</a></li>
                <li><a href="#">Dream science</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Press kit</a></li>
              </ul>
            </div>
            <div>
              <h6>Company</h6>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="mailto:hi@dreameo.app">hi@dreameo.app</a></li>
              </ul>
            </div>
          </div>
          <div className="f-bottom">
            <div>© 2026 Dreameo · Made for sleepy thumbs.</div>
            <div className="mono">v1.4 · build 2207</div>
          </div>
        </div>
      </footer>
    </>
  );
}
