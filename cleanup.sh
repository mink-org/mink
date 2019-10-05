cd packages || return;
find . -type f -name '*.js' -exec rm "{}" +
find . -type f -name '*.d.ts.map' -exec rm "{}" +
find . -type f -name '*.d.ts.map' -exec rm "{}" +
find . -type f -name '*.tsbuildinfo' -exec rm "{}" +
