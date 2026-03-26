# GitHub Copilot Instructions

## Project Overview

This is a Playwright end-to-end test automation project for [Practice Software Testing](https://practicesoftwaretesting.com). It uses the Page Object Model (POM) pattern and TypeScript.

## Project Structure

- `tests/` - Playwright test specs
- `pages/` - Page Object Model classes
- `helpers/` - Utility helpers (e.g., UI coverage logging)
- `ui-coverage.yaml` - Tracks which UI features are covered by tests
- `playwright.config.ts` - Playwright configuration
- `global-setup.ts` - Runs before all tests (logs UI coverage summary)

## Coding Conventions

- All page objects live in `pages/` and follow the naming convention `<pageName>Page.ts`
- Page object classes use `readonly` locators defined as class properties
- Locators use `page.getByTestId(...)` with `data-test` attributes
- Test files live in `tests/` and follow the naming convention `<feature>.spec.ts`
- Tests are organized with `test.describe` blocks and `test.beforeEach` for shared setup
- Credentials and config are stored in `.env` (not committed)

## Test Writing Guidelines

- Import page objects from `../pages/<pageName>`
- Use `async/await` for all Playwright interactions
- Prefer `getByTestId` locators over CSS selectors or XPath
- Group related tests inside a `test.describe` block
- Add a `test.beforeEach` to navigate to the starting page when applicable
- When adding new test coverage, update `ui-coverage.yaml` accordingly

## Available Page Objects

- `HomePage` - Home page with navigation (sign-in link, categories dropdown, rentals category)
- `SignInPage` - Login page (email input, password input, login button, error message)
- `MyAccountPage` - Authenticated user account page (header/page title)
- `ContactPage` - Contact form page (first name, last name, email, subject, message, attachment, send button)

## UI Coverage

After completing new tests, update `ui-coverage.yaml` to mark newly covered features as `true`.
