// script by @cryiograhy

const path = require('path');
const fs = require('fs');

/** @const {string} Main components path */
const COMPONENTS_DIR = path.resolve('./src/components/');

/**
 * capture a list of all directory names in given path
 * @param   {string}    sourcePath    Path to scan
 * @returns {string[]}                List of dir names corresponding to component names
 */
const getComponentNamesFromDirectories = sourcePath =>
  fs
    .readdirSync(sourcePath)
    .reduce((aggregated, maybeComponent) => {
      // OS-absolute path to a suspected component root
      const maybeComponentPath = path.join(sourcePath, maybeComponent);

      if (
        !matchesBlacklist(maybeComponent) &&
        isDirectory(maybeComponentPath)
      ) {
        const readme = getReadmeMdCell(maybeComponentPath);
        const sources = getSourceMdCells({
          name: maybeComponent,
          path: maybeComponentPath,
        });

        return [
          ...aggregated,
          `| ${maybeComponent} | ${readme} | ${sources} |`,
        ];
      }

      return aggregated;
    }, [])
    .sort();

/**
 * Generate MD table cell for README.md
 * @param   {string}  componentPath   Absolute path to the component
 * @returns {string}                  Markdown fragment
 */
const getReadmeMdCell = componentPath => {
  const readme = getReadmeMeta(componentPath);
  const label = readme.isTodo ? 'ADD ME 👈' : 'DOCS';

  return readme.path ? `[${label}](${readme.path})` : 'N/A';
};

/**
 * Generate MD table cell for the main component file
 * @param   {object}  component       Component meta
 * @param   {string}  component.name  Component name (=== dirname)
 * @param   {string}  component.path  Absolute path to the component
 * @returns {string}                  Markdown fragment
 */
const getSourceMdCells = component => {
  const index = getIndexPath({
    name: component.name,
    path: component.path,
  });

  return index
    ? `[source dir](${path.dirname(index)}) | [index](${index})`
    : 'N/A | N/A';
};

/**
 * Does given directory name match any blacklist entries?
 * The blacklist is here to ensure no unwanted js files are considered,
 * e.g. internal components, tests, etc.
 * @param   {string}  dirname   Directory name
 * @returns {boolean}           True if directory is blacklisted
 */
const matchesBlacklist = dirname => ['__tests__', 'assets'].includes(dirname);

/**
 * Is given path pointing to a directory?
 * @param   {string}  srcPath   Absolute path
 * @returns {boolean}           True if given path is a directory
 */
const isDirectory = srcPath => fs.statSync(srcPath).isDirectory();

/**
 * Get a relative path from the project root
 * @param   {string}  srcPath   Absolute path
 * @returns {string}            Relative path
 */
const getRelativePath = srcPath => path.relative(process.cwd(), srcPath);

/**
 * Try establishing component's README.md path and
 * see if its contents are pending
 * @param   {string}      componentDir    Absolute path to the component
 * @returns {object}                      Object with maybe path and completeness status {path, isTodo}
 */
const getReadmeMeta = componentDir => {
  const maybeReadmePath = path.resolve(componentDir, './README.md');
  const meta = {
    path: null,
    isTodo: true,
  };

  if (fs.existsSync(maybeReadmePath)) {
    const fileContents = fs.readFileSync(maybeReadmePath, 'utf8');

    meta.path = getRelativePath(maybeReadmePath);
    meta.isTodo =
      /^---[\s\S]*?^storyOf:/m.test(fileContents) ||
      fileContents.includes('TBC...') ||
      fileContents.replace(/\s/g, '').length === 0;
  }

  return meta;
};

/**
 * Try establishing component's main JS file path
 * @param   {object}      component       Component meta
 * @param   {string}      component.name  Component name (=== dirname)
 * @param   {string}      component.path  Absolute path to the component
 * @returns {string|null}                 Path if file present
 */
const getIndexPath = component => {
  let output = null;

  const maybeComponentNamedFile = path.resolve(
    component.path,
    `./${component.name}.js`
  );

  if (fs.existsSync(maybeComponentNamedFile)) {
    output = getRelativePath(maybeComponentNamedFile);
  } else {
    const maybeComponentIndex = path.resolve(component.path, './index.js');
    if (maybeComponentIndex) {
      output = getRelativePath(maybeComponentIndex);
    }
  }
  return output;
};

/**
 * Retrieve main README.md, and replace the listing with new data.
 * @returns {void}
 */
const regenerateReadme = () => {
  try {
    const mainReadme = path.resolve(process.cwd(), './README.md');
    const componentRows = getComponentNamesFromDirectories(COMPONENTS_DIR)
      .sort()
      .join('\n')
      .trim();
    const newTable = `
| Name  | Docs  | Dir  | Source |
|---|---|---|---|
${componentRows}
`;

    // read and update the README's content
    const newFileContents = fs
      .readFileSync(mainReadme, 'utf8')
      .replace(
        /(<!--- INJECTION:START -->)[\s\S]*?(<!--- INJECTION:END -->)/m,
        `$1\n${newTable}\n$2`
      );

    // save back
    fs.writeFileSync(mainReadme, newFileContents);

    console.log('\x1b[32m%s\x1b[0m', '╔══════════════════════════╗');
    console.log('\x1b[32m%s\x1b[0m', '║ README.md regenerated 🎉 ║');
    console.log('\x1b[32m%s\x1b[0m', '╚══════════════════════════╝');
  } catch (err) {
    throw new Error(err);
  }
};

regenerateReadme();
