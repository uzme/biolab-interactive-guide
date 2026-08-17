# Contribution checklist

Use this checklist before opening a pull request for BioLab Interactive Guide.

## Scope and safety

- [ ] The change has a clear user-facing or maintenance benefit.
- [ ] The pull request is focused on one topic.
- [ ] No credentials, tokens, private data, or local environment files are included.
- [ ] Generated dependency directories and build output are not committed.

## Local validation

Run the project checks from the repository root:

```bash
pnpm check
pnpm test
pnpm build
```

If a check fails, include the relevant error and explain whether it is related to the change.

## Documentation and UI changes

- [ ] README or related documentation is updated when behavior or setup changes.
- [ ] User-facing text is clear and consistent.
- [ ] Visual changes include a screenshot or a short description of the affected screen.
- [ ] Keyboard navigation and readable labels are considered for interactive controls.
- [ ] The layout is checked at both desktop and mobile widths.

## Pull request description

A useful pull request description should explain:

1. What changed.
2. Why the change was needed.
3. How it was validated.
4. Whether screenshots or follow-up work are required.

Keep the pull request focused so reviewers can verify it efficiently.
