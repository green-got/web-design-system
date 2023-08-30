/**
 * This script will build the documentation with Ladle
 * and publish it as a static website to
 * https://green-got.github.io/web-design-system/
 *
 * This is a Github page.
 */

import fs from 'fs';
import child_process from 'child_process';

/**
 * We check that the repo is clean
 */
const gitStatusMessage = child_process.execSync('git status').toString();
if (!gitStatusMessage.includes('working tree clean')) {
  console.error(
    '\u001b[41m\u001b[37mClean your repository before building the documentation.\u001b[0m',
  );
  process.exit(0);
}

/**
 * To avoid rendundancy in the repo,
 * we remove old version of the documentation
 * from the history
 */
console.log('Cleaning history.');
child_process.execSync('git filter-branch -f --tree-filter "rm -rf docs" HEAD');
console.log('\u001b[42m\u001b[97mHistory cleaned.\u001b[0m');

/**
 * Build the documentation
 */
console.log('Building documentation.');
child_process.execSync('pnpm build', { stdio: 'inherit' });

const indexPath = 'docs/index.html';
const indexContents = fs.readFileSync(indexPath, 'utf8');
const newContent = indexContents.replace(
  /\"\/assets\//g,
  '"/web-design-system/assets/',
);
fs.writeFileSync(indexPath, newContent, 'utf8');

console.log('\u001b[42m\u001b[97mDocumentation build.\u001b[0m');

/**
 * Git tasks
 */
const formatDate = (date) => {
  const yyyy = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');

  return `${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}`;
};
child_process.execSync('git add .');
child_process.execSync(
  `git commit -m "docs(build): build the static documentation ${formatDate(
    new Date(),
  )}"`,
);

/**
 * Summary
 */
console.log(`\u001b[42m\u001b[97m
  **********************************************************
  🤖  Your documentation is build and ready to be published.
  👀  Your can run "pnpm preview-build" to check your build.
  ⚠️   You need to run "git push --force" to finish the
      process since we re-wrote the history.
  **********************************************************\u001b[0m`);
