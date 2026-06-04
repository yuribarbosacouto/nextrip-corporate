# Contributing

Thanks for taking a look at NextTrip Corporate. This is a portfolio project, so contributions should preserve the goal: a credible corporate travel/events site with clear metrics, polished responsive UI, and a simple financial simulator.

## Local Setup

```powershell
npm.cmd install
npm.cmd run dev
```

## Quality Checklist

Run the full local gate before opening a pull request:

```powershell
npm.cmd run quality
```

For UI changes, include desktop and mobile screenshots in the pull request.

## Pull Request Guidelines

- Keep changes focused on one section, interaction, or technical improvement.
- Explain the business or user-facing reason for the change.
- Update README when setup, scripts, deployment, or scope changes.
- Do not commit secrets, tokens, real client data, or generated build folders.
- Keep copy specific and avoid unsupported business claims.

## Commit Style

Use short imperative commit messages, for example:

```text
fix: keep simulator totals in sync
docs: add pages deployment notes
feat: add event metric card
```
