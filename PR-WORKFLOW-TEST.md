# Testing Pull Request Workflow

## Quick Test Guide

### Step 1: Create a Feature Branch

```bash
git checkout -b feature/test-pull-request
```

### Step 2: Make a Small Change

Add a new route to `app.js`:

```javascript
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});
```

### Step 3: Add a Test for the New Route

Add to `test/test.js`:

```javascript
describe("GET /health", () => {
  it("should return health status", async () => {
    const res = await request(app).get("/health");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ status: "healthy" });
  });
});
```

### Step 4: Commit and Push

```bash
git add app.js test/test.js
git commit -m "Add health check endpoint"
git push origin feature/test-pull-request
```

### Step 5: Create Pull Request

1. Go to https://github.com/Vine168/Chim-Vine-Lab1
2. Click "Pull requests" tab
3. Click "New pull request"
4. Select `feature/test-pull-request` as compare branch
5. Click "Create pull request"
6. Add title and description
7. Click "Create pull request"

### Step 6: Watch the Workflow

1. On the PR page, you'll see "Some checks haven't completed yet"
2. Click "Details" to watch the workflow run
3. Verify all steps pass:
   - ✓ Checkout code
   - ✓ Setup Node.js
   - ✓ Install dependencies
   - ✓ Lint code
   - ✓ Run tests
   - ✓ Generate coverage
   - ✓ Upload artifacts

### Step 7: Review Coverage

1. Scroll to the bottom of the workflow run
2. Find "Artifacts" section
3. Download coverage reports
4. Verify new route is covered by tests

### Step 8: Merge PR

1. If all checks pass, click "Merge pull request"
2. Click "Confirm merge"
3. This will trigger deployment workflow on main branch

## What to Expect

### On Pull Request:

- ✅ Workflow runs automatically
- ✅ Tests must pass
- ✅ Coverage must meet thresholds
- ✅ Artifacts uploaded
- ❌ Deployment does NOT run (only on main)

### After Merge to Main:

- ✅ Workflow runs again on main
- ✅ Tests run
- ✅ Coverage generated
- ✅ **Deployment job triggers** (when configured)

## Testing Failed PR

Want to see what happens when tests fail?

### Make a Breaking Change:

```javascript
// In app.js, change the message
res.send("Different message");
```

### Without Updating Test:

```bash
git add app.js
git commit -m "Break the build intentionally"
git push origin feature/test-pull-request
```

### Result:

- ❌ Tests will fail
- ❌ PR cannot be merged (if branch protection enabled)
- ✓ You'll see exactly which test failed
- ✓ Coverage report still generated

This demonstrates the PR workflow's safety net!

## Branch Protection (Optional)

To enforce CI checks before merge:

1. Go to Settings → Branches
2. Click "Add rule" for `main` branch
3. Enable "Require status checks to pass before merging"
4. Select "build-and-test" workflow
5. Enable "Require branches to be up to date before merging"
6. Save changes

Now PRs **cannot** be merged unless all checks pass!
