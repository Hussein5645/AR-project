export class QueryArgs {
  static getBool(name, defaultVal = false) {
    const params = new URLSearchParams(window.location.search);
    if (!params.has(name)) return defaultVal;
    const v = params.get(name);
    return v === '1' || v === 'true';
  }

  static get(name) {
    return new URLSearchParams(window.location.search).get(name);
  }
}
