---
title: TinyRobot Kit Usage
impact: HIGH
---

# TinyRobot Kit Usage

When generating code that uses TinyRobot kits (message, conversation, utils), follow this workflow.

## Workflow

1. **Classify the request**: UI-only / message state / conversation state / AI requests
2. **Read kit docs**: `tools/message.md`, `tools/conversation.md`, or `tools/utils.md`
3. **Check demos**: Find examples in `demos/` that use the same kits
4. **Generate code**: Use only documented APIs from the kit docs or demos

## Quick Reference

| Kit                    | Doc                     | For                                                                        |
| ---------------------- | ----------------------- | -------------------------------------------------------------------------- |
| `useMessage`           | `tools/message.md`      | Message state, streaming AI responses, request status, tool/function calls |
| `useConversation`      | `tools/conversation.md` | Multi-session, history, storage (LocalStorage/IndexedDB)                   |
| `sseStreamToGenerator` | `tools/utils.md`        | Convert SSE stream to AsyncGenerator                                       |
| `formatMessages`       | `tools/utils.md`        | Convert messages to standard ChatMessage format                            |
| `AIClient`             | `tools/ai-client.md`    | **Deprecated** - use `useMessage` + `responseProvider` instead             |

For MCP tools → see `tools/message.md`#toolPlugin（工具调用）

## Rules

- **Only use documented APIs** - No invented functions, fields, or parameters
- **Keep minimal** - Reuse existing helpers, avoid reimplementation
- **Separate concerns** - Components handle UI, kits handle data/state
- **Prefer useMessage** - Use `useMessage` + `responseProvider` for AI requests (AIClient is deprecated)

## Uncertain APIs

If an API is not documented:

- Explain the uncertainty
- Do not guess
- Suggest the user check the kit layer
