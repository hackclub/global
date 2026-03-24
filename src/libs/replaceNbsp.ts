const replaceNbsp = (obj: Record<string, unknown>) => {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].replace(/&nbsp;/g, "\u00A0");
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      replaceNbsp(obj[key] as Record<string, unknown>);
    }
  }
};

export default replaceNbsp;
