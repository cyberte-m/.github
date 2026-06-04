<div align="center">

# ⚡ cyberte@m

**Offensive Engineering · Defensive Mindset · Repeatable Exploitation**

![org](https://img.shields.io/badge/cyberte%40m-CTF_Engineering-00ff41?style=for-the-badge)
![focus](https://img.shields.io/badge/Focus-Exploit_Standardization-ff00ff?style=for-the-badge)
![domain](https://img.shields.io/badge/Domain-PWN_RE_Web-00ffff?style=for-the-badge)
<a id="readme-top"></a>

<br />
<div align="center">

<h3 align="center">CyberTe@m</h3>
  <p align="center">
     <b>Chaos is the default. We standardize the rest.</b>
    <br />
  </p>
</div>

---

## 🎯 Mission

Build the **missing standardization layer** for CTF exploitation — the reusable primitives, shared abstractions, and team-wide conventions that transform a group of individuals into a coordinated exploit pipeline.

## 🔭 Vision

A world where CTF teams don't waste 80% of competition time rewriting the same `leak_libc()` and `build_rop()` helpers — where **speed doesn't come at the cost of quality**, and where institutional knowledge survives between competitions.

## 🧬 Core Belief

```
┌──────────────────────────────────────────────────────────────┐
│  CTF performance is not limited by technical knowledge —     │
│  it is limited by STANDARDIZATION in execution.              │
│                                                              │
│  A team of 5 individuals writing incompatible scripts        │
│  will always lose to a team of 5 using the same primitives.  │
└──────────────────────────────────────────────────────────────┘
```

---

## 🔬 Core Idea

Most CTF teams fail not because they lack talent — they fail because they lack **structure**:

| Missing Piece | Why It Matters | What We Do About It |
|---|---|---|
| 🧱 **Shared primitives** | Everyone rewrites the same helpers | `ctf-core` — a "libc" for our team's exploitation needs |
| ⚡ **Speed of assembly** | Understanding a vuln is useless if the exploit takes 2h | Reduce "idea → exploit" time from hours to minutes |
| 🔄 **Cross-member compatibility** | Alice's scripts don't work in Bob's environment | Standardized APIs, shared abstractions, same conventions |
| 🏛️ **Institutional memory** | Knowledge walks out the door after every CTF | Core evolves with the team; nothing is lost |
| 🌱 **Onboarding & mentorship** | Newcomers are isolated without structure | Documented primitives, beginner-friendly issues, pair-debug sessions |
| 🎯 **Debugging velocity** | Can't debug what you can't reproduce | Shared tooling, reproducible exploit scaffolding |

> **ctf-core** is our answer to the entropy of ad-hoc CTF scripting.

---

## 🧱 Engineering Philosophy

| Principle | Meaning | In Practice |
|---|---|---|
| ⚡ **Primitives over Solutions** | Build reusable blocks, not one-shot exploits | `ctf-core` contains *how* things work, not *what* we broke |
| 🔬 **Standardization by Default** | Every member uses the same foundations | Single import path: `from pwn.core import ...` |
| 📊 **Separation of Concerns** | Core ≠ Pwn ≠ Writeups | `ctf-core` = framework, `ctf-pwn` = exploits, writeups = docs |
| 🎛️ **Extract After Action** | Don't build for tomorrow — extract from yesterday | Post-CTF ritual: identify patterns → promote to core |
| 🌱 **Newcomers First** | A team that doesn't onboard will not scale | Beginner-friendly issues, documented workflows, mentorship > gatekeeping |

---

## 🌱 Open Source & Knowledge Sharing

We believe CTF and cybersecurity are crafts that grow **through sharing, not hoarding**.

### 🧠 Our Philosophy on Newcomers

Everyone was a beginner once. The difference between someone who stays and someone who thrives is **the quality of the foundation they're given**.

```
┌───────────────────────────────────────────────────────┐
│  A team that refuses to teach will eventually have    │
│  nothing left to learn.                               │
│                                                       │
│  Strong teams are not built by excluding the weak,    │
│  they are built by raising the floor for everyone.    │
└───────────────────────────────────────────────────────┘
```

### 📖 How We Practice It

| Practice | Why | How |
|---|---|---|
| 📝 **Writeups are first-class** | Solving a challenge is half the work — explaining it is the other half | Every challenge solved = a writeup expected, no matter how "easy" |
| 🧑‍🏫 **Pair debugging** | Two pairs of eyes always see more than one | Regular pair-debug sessions on tough challenges; knowledge transfer happens naturally |
| 🎯 **Beginner-friendly issues** | The best way to learn core is to contribute to it | Tagged issues with clear scope, mentorship, and no stupid questions |
| 📚 **Documented conventions** | Tribal knowledge is the enemy of scale | `ctf-core` comes with docs, examples, and a style guide — not just code |
| 🔓 **Open source by default** | Our tools are public unless there's a reason to keep them private | We give back to the community that taught us |
| 🗣️ **No gatekeeping** | "RTFM" is not an answer | Questions are welcomed, ignorance is temporary, curiosity is celebrated |

### 🏴‍☠️ But Seriously

We compete to win. But we win **together** — and "together" includes the person who just ran their first `checksec` yesterday. The strength of a team isn't measured by its strongest member. It's measured by how fast the weakest member improves.

---

## 🧭 What We Build

| Domain | Repo | Contents | Purpose |
|---|---|---|---|
| 🧱 **Core Framework** | `ctf-core` | Leak primitives, ROP builders, heap helpers, ELF parsers, remote wrappers | The "standard library" — shared foundation for all exploitation |
| 💥 **Exploit Arsenal** | `ctf-pwn` | Challenge-specific exploits, solve scripts, writeups | Battlefield — what we actually use in competition |
| 🔧 **Tooling & Utils** | `ctf-toolbox` | Experimental helpers, niche scripts, automation | Sandbox for ideas that might graduate to core |
| ⚙️ **Infrastructure** | `ctf-infra` | Docker setups, vulnerable services, deployment configs | Reproducible environments for practice and testing |

---

## 🛠️ Tech Stack

```
  Python / pwntools
  C / x86-64 / ARM / MIPS
  GDB / Ghidra / IDA / Binary Ninja
  Docker
  Linux (Kali / Arch / NixOS)
```

**Driving principle:** Same foundations, shared conventions, maximum velocity.

---

## 🧭 Ethical Charter

cyberte@m operates under a strict ethical framework:

| Principle | Rule |
|---|---|
| ✅ **CTF & Legal Grounds Only** | We operate exclusively on CTF platforms, authorized pentesting labs, and our own infrastructure |
| 🔒 **Responsible Disclosure** | Any real-world vulnerability discovered incidentally is reported privately and responsibly — never weaponized |
| 🚫 **No Malicious Action** | Our skills exist for learning, competition, and defense — never for unauthorized access or harm |
| 📚 **Knowledge Sharing & Mentorship** | What we learn, we share — through writeups, open-source tooling, and community engagement. Beginners are welcomed, not filtered. |
| 🏴‍☠️ **No Black Hat Activity** | This is a team of engineers and learners, not threat actors. Period. |

---

## 📬 Get In Touch

<div align="center">

**Discord** — main hub [(join us)](https://discord.gg/bWHPfZfV5)

---

**cyberte@m — CTF Engineering Collective**

*Standardizing the art of exploitation.*

</div>

---

<div align="center">

<sub>📍 Offensive · Defensive · Repeatable</sub>

</div>
