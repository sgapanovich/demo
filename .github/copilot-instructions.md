# GitHub Copilot Instructions

## Project Overview

This is a **Playwright E2E test automation framework** for [https://practicesoftwaretesting.com](https://practicesoftwaretesting.com).

- **Language:** TypeScript
- **Framework:** Playwright v1.57.0
- **Pattern:** Page Object Model (POM)

## Project Structure

- `pages/` — Page Object classes (one per application page)
- `tests/` — Playwright test spec files
- `helpers/` — Utility functions (e.g., UI coverage tracking)
- `ui-coverage.yaml` — Tracks which page features are covered by tests
- `playwright.config.ts` — Playwright configuration
- `global-setup.ts` — Runs before all tests

## Coding Conventions

- Use the **Page Object Model** pattern: keep locators and page interactions inside `pages/` classes, not in test files.
- Use `data-test` attributes for element selection (e.g., `page.getByTestId("email")`).
- Each page object file exports a class named after the page (e.g., `ContactPage` in `contactPage.ts`).
- Test files are named `<feature>.spec.ts` and live in the `tests/` directory.
- Use `test.describe` blocks to group related tests, and `test.beforeEach` for shared setup.

## Running Tests

```bash
npx playwright install --with-deps   # install browsers (first time)
npx playwright test                  # run all tests
npx playwright test tests/login.spec.ts  # run a specific file
```

## UI Coverage

After adding new tests, update `ui-coverage.yaml` to mark covered features as `true`.
