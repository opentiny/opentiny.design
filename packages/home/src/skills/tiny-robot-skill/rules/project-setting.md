---
title: TinyRobot Project Setup
impact: HIGH
---

# TinyRobot Project Setup

This document explains the TinyRobot documentation project structure.

## Documentation Structure

- `guide/` - Setup guides (quick-start.md, theme-config.md, update-log.md)
- `examples/` - Complete UI examples (assistant.md, etc.)
- `tools/` - Helper utilities (message.md, conversation.md, utils.md)
- `components/` - Component documentation
- `demos/` - Component demo implementations
- `migration/` - Version migration notes when relevant

## User Projects

The docs project uses VitePress. When helping users integrate TinyRobot:

- Read `guide/quick-start.md` and adapt to their framework
- Do not assume their project is VitePress

## Quick Reference

- Installation → `guide/quick-start.md`
- Theming → `guide/theme-config.md`
- Message/Conversation → `tools/message.md`, `tools/conversation.md`
- AI calls → patterns in `tools/message.md` (useMessage + responseProvider)
