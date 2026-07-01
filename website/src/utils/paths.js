export function withBase(path = "/") {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path.replace(/^\/+/, "")}`;
}

export function withoutBase(pathname = "/") {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  if (base !== "/" && pathname === base) {
    return "/";
  }

  if (base !== "/" && pathname.startsWith(`${base}/`)) {
    return pathname.slice(base.length) || "/";
  }

  return pathname;
}
