# Prettier Markdown Formatting Rules

This document describes the strict Prettier configuration for Markdown files in
the BudgetBee project.

## Configuration Overview

The project uses Prettier 3.6.2 with strict formatting rules to ensure
consistency across all Markdown files, including system prompts and instruction
files for LLM-based agents.

## Prettier Configuration

The `.prettierrc.json` file in the project root defines the following strict
rules:

### Global Settings

- **printWidth**: 80 characters
  - Lines longer than 80 characters will be wrapped
  - Ensures readability across different display sizes
- **tabWidth**: 2 spaces
  - Consistent indentation for lists and nested content
- **useTabs**: false
  - Always use spaces, never tabs
- **endOfLine**: "lf"
  - Unix-style line endings for cross-platform compatibility
- **proseWrap**: "always"
  - Prose text will be wrapped at printWidth
  - Ensures consistent line lengths in documentation

### Markdown-Specific Settings

All `.md` files use the following overrides:

```json
{
  "proseWrap": "always",
  "printWidth": 80,
  "tabWidth": 2
}
```

### Special File Overrides

The configuration includes specific overrides for:

- `.github/instructions/*.md` - Instruction files for agents
- `.github/copilot-instructions.md` - Copilot configuration

## Running Prettier

### Check Formatting

To check if all Markdown files are properly formatted:

```bash
npm run format:check
# or
npx prettier --check "**/*.md" --ignore-path .prettierignore
```

### Auto-Format Files

To automatically format all Markdown files:

```bash
npm run format
# or
npx prettier --write "**/*.md" --ignore-path .prettierignore
```

### Format Single File

To format a specific file:

```bash
npx prettier --write path/to/file.md
```

## What Gets Formatted

Prettier applies the following formatting to Markdown files:

1. **Line Wrapping**: Text wraps at 80 characters
2. **List Formatting**: Consistent indentation (2 spaces)
3. **Code Blocks**: Preserved but language-specific formatting applied
4. **Heading Spacing**: Consistent spacing around headings
5. **Link Formatting**: Normalized link and reference formatting
6. **Table Formatting**: Aligned table columns
7. **Emphasis**: Normalized bold and italic syntax

## Ignored Files

The following paths are ignored (per `.prettierignore`):

- `node_modules/`
- `dist/`
- `build/`
- `*.lock` files

## Editor Integration

### VS Code

The project is configured to work with the Prettier VS Code extension. Ensure
you have:

1. Prettier extension installed
2. "Format on Save" enabled in VS Code settings
3. Prettier set as the default formatter for Markdown files

### Other Editors

For other editors, install the appropriate Prettier plugin and configure it to
use the project's `.prettierrc.json` file.

## Best Practices

### For New Markdown Files

1. Always run Prettier after creating or editing Markdown files
2. Ensure the file passes `prettier --check` before committing
3. Use consistent heading levels and structure
4. Keep line lengths under 80 characters for readability

### For Instruction Files

Instruction files in `.github/instructions/` are especially important as they
govern LLM agent behavior:

1. Format these files before committing any changes
2. Ensure consistent wrapping for better readability
3. Use clear, concise language within the 80-character limit
4. Test that formatting doesn't break YAML frontmatter or special syntax

### For Documentation

1. Use descriptive headings
2. Keep paragraphs focused and well-wrapped
3. Use code blocks with appropriate language tags
4. Maintain consistent list formatting

## Troubleshooting

### Files Not Formatting

If files aren't formatting as expected:

1. Check that `.prettierrc.json` exists in project root
2. Verify the file isn't in `.prettierignore`
3. Try clearing Prettier cache: `npx prettier --cache-location .prettier-cache`
4. Check for syntax errors in the Markdown file

### Unexpected Formatting

If formatting seems incorrect:

1. Verify your Prettier version matches the project (3.6.2)
2. Check for conflicting editor settings
3. Ensure you're using the project's `.prettierrc.json`
4. Review the specific file for Markdown syntax issues

## Maintenance

### Updating Prettier

When updating Prettier:

1. Update version in `package.json`
2. Run `npm install`
3. Test formatting on all Markdown files
4. Review changes with `git diff` before committing
5. Update this documentation if rules change

### Adding New Rules

To add or modify formatting rules:

1. Update `.prettierrc.json`
2. Run formatting on all files
3. Review changes carefully
4. Update this documentation
5. Communicate changes to the team

## Validation

All Markdown files must pass strict Prettier validation:

```bash
npx prettier --check "**/*.md"
```

Expected output: `All matched files use Prettier code style!`

## References

- [Prettier Documentation](https://prettier.io/docs/en/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [Markdown Formatting Guide](https://prettier.io/docs/en/prose-wrap.html)
