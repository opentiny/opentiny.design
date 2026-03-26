---
name: tiny-robot-skill
description: Guides TinyRobot Vue AI chat UI implementation, setup, and code generation. Use when the user mentions TinyRobot, OpenTiny TinyRobot, Bubble, Sender, Prompts, chat container, message list, conversation tools, or asks to build chat interfaces with TinyRobot components.
license: MIT
metadata:
  author: opentiny
  version: '1.0.0'
---

# TinyRobot Component Library Assistant

Use this skill to produce accurate TinyRobot guidance and code with the smallest necessary context.

TinyRobot is a Vue-oriented component library for AI chat interfaces.

## When to use this skill

Use this skill when the user:

- explicitly mentions TinyRobot or OpenTiny TinyRobot
- asks about `Bubble`, `Sender`, `Prompts`, chat containers, or similar TinyRobot components
- asks for TinyRobot component usage or examples
- wants to build an AI chat UI with TinyRobot
- needs TinyRobot setup, import, or theme guidance
- asks about TinyRobot message, conversation, or AI request integration

Example requests:

- "Create a chat UI using TinyRobot"
- "How do I use the Bubble component?"
- "Show a Sender example"
- "How do I configure TinyRobot theme?"
- "How should I manage conversation state with TinyRobot?"

## Quick Routing

Start by classifying the request, then read only the relevant rule file.

| Request type                               | Read first                 | Use for                                                                |
| ------------------------------------------ | -------------------------- | ---------------------------------------------------------------------- |
| Component usage or page composition        | `rules/component-use.md`   | Component lookup, composition, demos, missing component handling       |
| Project setup or theme configuration       | `rules/project-setting.md` | Installation, integration, theme, adapting docs setup to user projects |
| Code generation                            | `rules/code-generation.md` | Output style, Vue SFC conventions, simplicity, comment language        |
| Message, conversation, or AI request logic | `rules/kit-use.md`         | Safe tool usage, state separation, API uncertainty handling            |

For most implementation tasks, read `rules/code-generation.md` after the task-specific rule file.

## Resources in This Skill

This skill is organized around these resource layers:

- `components/` for component documentation
- `demos/` for working component demos
- `examples/` for full page or multi-component usage
- `guide/` for setup and configuration guidance
- `tools/` for message, conversation, and helper utilities
- `migration/` for version migration notes when relevant
- `rules/component-use.md`
- `rules/project-setting.md`
- `rules/code-generation.md`
- `rules/kit-use.md`

Use the smallest relevant layer first, then expand only when the task needs more context.
