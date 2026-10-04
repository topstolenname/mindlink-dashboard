// Single source for the case studies shown on / and /work.
// Keep every claim here backed by something a reader can open.

export type WorkStatus = 'active' | 'pilot' | 'paused' | 'concept' | 'archived';

export interface WorkItem {
  title: string;
  summary: string;
  status: WorkStatus;
  href: string;
  evidence: string;
  tags: string[];
}

export const caseStudies: WorkItem[] = [
  {
    title: 'MCX: Meta-Concord reference implementation',
    summary:
      'Python reference implementation for one claim in the Meta-Concord draft 0.4 white paper: requiring assent from each authorization domain is not the same rule as a two-thirds vote over the same voters. Ed25519-signed evidence, a fail-closed enforcer, a separate verifier, and a claim-to-evidence map that says what the code does not prove.',
    status: 'active',
    href: '/work/mcx',
    evidence: 'Public repo · Apache-2.0',
    tags: ['AI governance', 'authorization', 'Python', 'pytest'],
  },
  {
    title: 'Emergent Divergence',
    summary:
      'A controlled multi-agent experiment: do identical copies of one LLM drift apart when they work together over 50 rounds, and does memory drive it? Eight falsifiable hypotheses, a null baseline, full run provenance, and pilot results reported even when they fall short of significance.',
    status: 'pilot',
    href: '/work/emergent-divergence',
    evidence: 'Public repo · pilot data',
    tags: ['multi-agent', 'evaluation', 'Ollama', 'experiment design'],
  },
  {
    title: 'Anvil: tiered agentic diagnostics',
    summary:
      'Architecture for a bench-repair assistant: a library of diagnostic skills, small language models first with escalation only when needed, and PowerShell tools behind a structured JSON contract so the model never reads raw logs. Built from day-to-day bench work.',
    status: 'paused',
    href: '/work/anvil',
    evidence: 'No public repo yet',
    tags: ['agentic AI', 'small models', 'PowerShell', 'tool use'],
  },
];

export const smallerBuilds = [
  {
    title: 'Local photo auto-tagging',
    summary:
      'A local pipeline: an Ollama vision model proposes tags, exiftool writes them into the image metadata, and the same tags are set as extended attributes so KDE Dolphin can search and display them. Everything runs on my own machine.',
    tags: ['Ollama', 'exiftool', 'xattr', 'Linux'],
  },
  {
    title: 'Home Assistant and an integration security audit',
    summary:
      'Home Assistant automation at home, plus a security audit of a third-party vehicle-integration repository for Home Assistant.',
    tags: ['Home Assistant', 'security audit'],
  },
];

export const toolchain = [
  'Linux (Kubuntu, Arch, CachyOS)',
  'Windows',
  'PowerShell',
  'Bash',
  'Python',
  'Docker',
  'Git',
  'Claude Code',
  'Cursor',
  'MCP',
  'Ollama',
  'Open-WebUI',
  'Obsidian',
];
