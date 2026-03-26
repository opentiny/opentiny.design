---
title: TinyRobot Component Lookup
impact: HIGH
---

# TinyRobot Component Lookup

When generating TinyRobot component code, follow this lookup workflow.

## Workflow

1. **Find component**: Component files are in `components/<name>.md`
2. **Read docs**: Each `.md` file documents one component (props, slots, usage)
3. **Check demos**: Demo implementations are in `demos/<component-name>/`
4. **Generate code**: Use only APIs from docs and demos

## Rules

- **No invented APIs** - Use only documented props, slots, events
- **Follow demos** - Reuse structure, prop order, slot usage from demos
- **Check examples**: Full layouts in `examples/`

## Missing Components

If a component doesn't exist in `components/`:

- Do not invent new components
- Tell the user it doesn't exist
- Suggest closest alternatives (bubble, sender, container, prompts)
