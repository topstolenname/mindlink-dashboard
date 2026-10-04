// Data for the /projects/claude-os filesystem explorer.
// Each entry is one top-level node of ~/claude-os/.

export interface FsNode {
  id: string;
  kind: 'dir' | 'file';
  name: string;
  tagline: string;
  voice: string;
  trust: string;
  note: string;
  files?: { name: string; desc: string }[];
}

export const fsNodes: FsNode[] = [
  {
    id: 'docs',
    kind: 'dir',
    name: 'docs/',
    tagline: 'The project itself — brief, pre-flight, observation framework, opening prompt.',
    voice: 'Researcher',
    trust: 'Vault-canonical',
    note: 'These are the foundational documents. Vault-canonical because they are written for publication and do not need sanitization. Edit here, push to box when material.',
    files: [
      { name: '01-project-brief.md', desc: 'premise · seven research questions · scope · ethical framing' },
      { name: '02-preflight-checklist.md', desc: 'physical / software / intent — Appendix A is the Arch install plan' },
      { name: '03-observation-framework.md', desc: 'journal schema, observation targets, cadence, sanitization' },
      { name: '04-opening-prompt.md', desc: 'the v2 system prompt Claude receives at session start' },
      { name: '05-sanitization-protocol.md', desc: 'end-of-session pipeline producing vault copies from box originals' },
      { name: '06-vault-tooling.md', desc: 'log of third-party Obsidian-side tooling evaluations' },
    ],
  },
  {
    id: 'journal',
    kind: 'dir',
    name: 'journal/',
    tagline: 'One file per session. Narrative log written during and after work.',
    voice: 'Mixed',
    trust: 'Box → Sanitized vault',
    note: 'Strictly box-upstream. Tristan writes raw on the box; the end-of-session pipeline produces sanitized vault copies. Frontmatter `vault:` controls each entry: hold (never sync), pending (default), synced.',
    files: [
      { name: '_template-session.md', desc: 'copy this for each new YYYY-MM-DD-NN.md' },
      { name: '2026-05-03-01.md', desc: 'session 1 — Arch install + foothold + NVIDIA driver + GUI→CLI substrate decision' },
    ],
  },
  {
    id: 'skills',
    kind: 'dir',
    name: 'skills/',
    tagline: 'Distilled operational knowledge specific to this system.',
    voice: 'Claude',
    trust: 'Box → Sanitized vault',
    note: 'When something is learned the hard way, it crystallizes here so the next session does not repeat the lesson. Mostly written by Claude, in Claude’s voice, for Claude’s future selves.',
    files: [
      { name: 'README.md', desc: 'when to write a skill, file shape, naming' },
      { name: 'arch-pacman.md', desc: 'package management — pacman + yay' },
      { name: 'system-recovery.md', desc: 'recovery layers: LTS kernel → snapper rollback → ISO chroot' },
      { name: 'transcript-preservation.md', desc: 'what to do as context-window pressure approaches' },
    ],
  },
  {
    id: 'artifacts',
    kind: 'dir',
    name: 'artifacts/',
    tagline: 'Reusable concrete things — scripts, configs, aliases.',
    voice: 'Claude',
    trust: 'Box-canonical',
    note: 'Shell scripts are box-canonical; the vault holds explanatory markdown wrappers. Never edit script content in the wrappers without syncing back.',
    files: [
      { name: 'README.md', desc: 'naming conventions, promotion path' },
      { name: 'scripts/bootstrap-script.md', desc: 'bootstrap.sh — idempotent tree creator + git init' },
      { name: 'scripts/foothold-script.md', desc: 'foothold.sh — fresh-Arch handoff installer' },
      { name: 'configs/', desc: 'rc-files and dotfile fragments worth keeping' },
      { name: 'aliases/', desc: 'shell aliases, organized by domain' },
    ],
  },
  {
    id: 'system-state',
    kind: 'dir',
    name: 'system-state/',
    tagline: 'Living inventory of the machine — hardware, packages, services, gotchas.',
    voice: 'Claude',
    trust: 'Box → Sanitized vault',
    note: 'Read at every session start. The cheapest defense against repeating mistakes is keeping known-gotchas current.',
    files: [
      { name: 'hardware.md', desc: 'physical inventory, peripherals, verification commands' },
      { name: 'installed-packages.md', desc: 'why and when packages were installed (not what)' },
      { name: 'services.md', desc: 'enabled systemd services, with rationale' },
      { name: 'known-gotchas.md', desc: 'session-start required reading' },
    ],
  },
  {
    id: 'mcp',
    kind: 'dir',
    name: 'mcp/',
    tagline: 'Model Context Protocol servers configured for this Claude OS instance.',
    voice: 'Mixed',
    trust: 'Box → Sanitized vault',
    note: 'Policy: full enablement day zero. Secrets handled via env, never committed. The example file is the template the box rehydrates from.',
    files: [
      { name: 'README.md', desc: 'policy · active list · secrets handling' },
      { name: 'mcp-servers-example.md', desc: 'servers.json.example template' },
    ],
  },
  {
    id: 'observations',
    kind: 'dir',
    name: 'observations/',
    tagline: 'Cross-session aggregate notes. Where individual sessions become patterns.',
    voice: 'Researcher',
    trust: 'Box → Sanitized vault',
    note: 'Token economics, failure-mode catalog, crystallized insights. Insights only get written when something has actually crystallized — not speculation.',
    files: [
      { name: 'token-economics.md', desc: 'per-session estimates, plan-constraint events' },
      { name: 'failure-modes.md', desc: 'failure mode catalog, schema, mode definitions' },
      { name: 'insights.md', desc: 'crystallized findings only' },
    ],
  },
  {
    id: 'bases',
    kind: 'dir',
    name: 'bases/',
    tagline: 'Dynamic database views over note frontmatter (Obsidian Bases).',
    voice: 'Mixed',
    trust: 'Vault-only',
    note: 'Vault-only by nature — the box has no Obsidian. Used for surfacing journal sync state at a glance.',
    files: [
      { name: 'README.md', desc: 'when to add a base · current vs. open candidates' },
      { name: 'journal-status.base', desc: 'journals grouped by sanitization state' },
    ],
  },
  {
    id: 'archive',
    kind: 'dir',
    name: 'Archive/',
    tagline: 'Superseded files kept for provenance, not active use.',
    voice: 'Mixed',
    trust: 'Vault-canonical',
    note: 'Things that were once load-bearing and no longer are. Kept so you can trace why something is the way it is.',
    files: [
      { name: 'claude-os-project-brief-archived.md', desc: 'previous root brief before the integration' },
    ],
  },
  {
    id: 'readme',
    kind: 'file',
    name: 'README.md',
    tagline: 'Project README. What lives where, first-time path, per-session path.',
    voice: 'Researcher',
    trust: 'Vault-canonical',
    note: 'The first thing a stranger reads. Mirrored from the box but vault-edited.',
  },
  {
    id: 'moc',
    kind: 'file',
    name: 'Claude OS.md',
    tagline: 'Map of contents. Open this when you want to find something fast.',
    voice: 'Researcher',
    trust: 'Vault-canonical',
    note: 'Every other note links here. Banner-image styled, status-bar header, exhaustive index of every subdir.',
  },
];
