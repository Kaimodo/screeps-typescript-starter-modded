module.exports = {
    entryPoints: [
      'src',
    ],
    entryPointStrategy: `expand`,
    tsconfig: 'tsconfig.json',
    out: './docs',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    readme: 'README.md',
    name: 'screeps-typescript-starter-modded',
    includeVersion: true,
    listInvalidSymbolLinks: true,
    theme: 'markdown',
    hideGenerator: true
  };
