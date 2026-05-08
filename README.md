# TestPlaywright

A comprehensive Playwright test automation project demonstrating various testing techniques and patterns.

## Project Overview

This project contains test suites for practicing and demonstrating Playwright automation capabilities, including:
- Web table interactions and data extraction
- Form filling and submission
- Checkbox selection and validation
- Multi-context and multi-page scenarios
- Browser context management
- XPath and CSS selector strategies

## Project Structure

```
TestPlaywright/
├── Tests/
│   ├── 01_Basics/              # Basic Playwright test examples
│   ├── 02_first_tests/         # First set of test scenarios
│   ├── Projects/               # Project-based test suites
│   └── example.spec.ts         # Example test file
├── Chapter_3_Xpath/            # XPath-specific test examples
├── Playwright/                 # Additional Playwright test files
├── playwright-report/          # Generated test reports
├── test-results/               # Test result artifacts
├── playwright.config.ts        # Playwright configuration
└── package.json               # Project dependencies

```

## Key Test Files

- **Project6_Webtables.spec.ts** - Web table interaction tests including search, checkbox selection, and row validation
- **212_Browser_Context_Pages.spec.ts** - Browser context and page management tests
- **213_Multiple_Context.spec.ts** - Multiple context scenario tests
- **214_Multiple_Pages.spec.ts** - Multi-page interaction tests

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/FatimaJ83/TestPlaywright.git
cd TestPlaywright
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run specific test file:
```bash
npx playwright test Tests/Projects/Project6_Webtables.spec.ts
```

### Run tests in headed mode (with browser UI):
```bash
npx playwright test --headed
```

### Run tests with debug mode:
```bash
npx playwright test --debug
```

### View test report:
```bash
npx playwright show-report
```

## Test Examples

### Web Table Test Example
The `Project6_Webtables.spec.ts` test demonstrates:
- Navigating to a web page
- Waiting for elements to be visible
- Filling search inputs
- Clicking buttons
- Locating specific table rows
- Selecting checkboxes
- Validating element states

```typescript
test('Verify name is available and click the checkbox', async ({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/webtable', { waitUntil: 'networkidle' });
    
    await page.getByLabel('Search employee table').fill('Kabir');
    await page.getByRole('button', {name: 'Select Cloud QA'}).click();
    
    const usernameRow = page.locator("tr[data-username='Kabir.Khan']");
    await expect(usernameRow.locator('td', { hasText: 'Kabir.Khan' })).toBeVisible();
    
    await usernameRow.locator("input[type='checkbox']").click();
    await expect(usernameRow.locator("input[type='checkbox']")).toBeChecked();
});
```

## Configuration

The project uses `playwright.config.ts` for configuration. Key settings include:
- Test timeout settings
- Browser configurations
- Report generation
- Test retries

## Debugging

For debugging tests, use:
```bash
npx playwright test --debug
```

This will open the Playwright Inspector where you can:
- Step through test execution
- Inspect DOM elements
- View locators
- Execute commands

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Commit with clear messages
5. Push and create a pull request

## Best Practices Used

- Clear test naming conventions
- Proper wait strategies
- Robust element locators using Playwright's best practices
- Meaningful assertions
- Organized test structure

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [The Testing Academy](https://app.thetestingacademy.com)

## License

ISC

## Author

Fatima J

---

For more information on how to run and maintain these tests, refer to the official Playwright documentation.
