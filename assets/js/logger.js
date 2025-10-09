const LEVELS = { error: 0, warn: 1, info: 2, debug: 3 };

const resolveConfig = () => {
  if (typeof window === 'undefined') {
    return { enabled: false, level: LEVELS.error, categories: null };
  }

  const cfg = window.__DEBUG__;
  if (cfg === true) {
    return { enabled: true, level: LEVELS.debug, categories: null };
  }

  if (!cfg || cfg === false) {
    return { enabled: false, level: LEVELS.error, categories: null };
  }

  const levelName = typeof cfg.level === 'string' ? cfg.level.toLowerCase() : 'debug';
  const level = LEVELS[levelName] ?? LEVELS.debug;
  const enabled = cfg.enabled !== false;
  const categories = Array.isArray(cfg.categories) ? cfg.categories : null;

  return { enabled, level, categories };
};

const shouldLog = (desiredLevel, category) => {
  const cfg = resolveConfig();
  if (!cfg.enabled) return false;
  if (cfg.level < desiredLevel) return false;
  if (!category || !cfg.categories) return true;
  return cfg.categories.includes(category);
};

const logWith = (method, levelValue) => (category, ...args) => {
  if (!shouldLog(levelValue, category)) return;
  const prefix = category ? `[${category}]` : '';
  console[method](prefix, ...args);
};

export const debugLog = logWith('debug', LEVELS.debug);
export const infoLog = logWith('info', LEVELS.info);
export const warnLog = logWith('warn', LEVELS.warn);
export const errorLog = logWith('error', LEVELS.error);

export const logger = {
  debug: debugLog,
  info: infoLog,
  warn: warnLog,
  error: errorLog,
};
