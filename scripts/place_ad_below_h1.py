from __future__ import annotations

import re
from pathlib import Path

BLOG_DIRECTORIES = [
    Path("app/personal-finance"),
    Path("app/financial-solutions"),
]

PLACEHOLDER_IDS = ("us_budgetbeepro_1", "us_budgetbeepro_1", "us_budgetbeepro_3")

PLACEHOLDER_PATTERN = re.compile(
    r"\n?(?P<indent>[ \t]*)(?:\{/\*[^{}]*?(?:Placeholder|Ad Unit)[^{}]*?\*/\}\s*)?"
    r"<div[^>]*id=\"(?:us_budgetbeepro_1|us_budgetbeepro_1|us_budgetbeepro_3)\"[\s\S]*?</div>\s*\n?",
    re.MULTILINE,
)

NEWLINE_COLLAPSE = re.compile(r"\n{3,}")


def clean_placeholders(content: str) -> str:
    # Remove legacy placeholder blocks (and the preceding comment when present)
    def _replace(match: re.Match[str]) -> str:
        indent = match.group("indent") or ""
        return "\n" + indent

    cleaned = PLACEHOLDER_PATTERN.sub(_replace, content)
    return cleaned


def insert_ad_block(content: str) -> str:
    h1_start = content.find("<h1")
    if h1_start == -1:
        return content

    h1_end = content.find("</h1>", h1_start)
    if h1_end == -1:
        return content

    indent_start = content.rfind("\n", 0, h1_start)
    indent = content[indent_start + 1 : h1_start] if indent_start != -1 else ""

    snippet = (
        "\n"
        f"{indent}<div\n"
        f"{indent}  id=\"us_budgetbeepro_1\"\n"
        f"{indent}  className=\"items-center justify-center flex w-full my-8\"\n"
        f"{indent}>\n"
        f"{indent}  {{/* Empty responsive, centered div */}}\n"
        f"{indent}</div>\n\n"
    )

    insert_pos = h1_end + len("</h1>")

    # Avoid duplicate insertion if the snippet already exists immediately after <h1>
    after_h1 = content[insert_pos: insert_pos + len(snippet) + 10]
    if "id=\"us_budgetbeepro_1\"" in after_h1:
        return content

    updated = content[:insert_pos] + snippet + content[insert_pos:]
    updated = NEWLINE_COLLAPSE.sub("\n\n", updated)
    return updated


def process_file(path: Path) -> bool:
    original = path.read_text()
    cleaned = clean_placeholders(original)
    updated = insert_ad_block(cleaned)

    if updated == original:
        return False

    path.write_text(updated)
    return True


def main() -> None:
    changed_files: list[Path] = []

    for base in BLOG_DIRECTORIES:
        if not base.exists():
            continue
        for page_file in base.glob("**/page.tsx"):
            if not page_file.is_file():
                continue
            if process_file(page_file):
                changed_files.append(page_file)

    print(f"Updated {len(changed_files)} files.")
    for file_path in changed_files:
        print(f" - {file_path}")


if __name__ == "__main__":
    main()
