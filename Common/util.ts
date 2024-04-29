export function omitTypenameDeep(obj) {
    if (Array.isArray(obj)) {
      return obj.map(item => omitTypenameDeep(item));
    } else if (obj !== null && typeof obj === 'object') {
      const { __typename, ...rest } = obj;
      Object.keys(rest).forEach(key => {
        rest[key] = omitTypenameDeep(rest[key]);
      });
      return rest;
    }
    return obj;
}
  
export function delay(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
}