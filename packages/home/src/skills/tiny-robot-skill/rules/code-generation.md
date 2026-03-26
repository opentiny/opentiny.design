---
title: TinyRobot Code Generation
impact: HIGH
---

# TinyRobot Code Generation

When generating TinyRobot code, follow these rules.

## Rules

- **Prefer demos**: Use code from `demos/` as templates
- **No invented APIs**: Use only props, events, slots from docs/demos
- **Vue style**: Use `<script setup>` syntax
- **Keep simple**: Minimal, focused examples over abstractions
- **English comments**: Write all code comments in English

## Streaming

For AI streaming responses:

- Bubble components render streaming text
- Use patterns from demos in `demos/bubble/`
