(() => {
  const sourceOrigin = "https://creative-assets-orshikhbadi.replit.app";
  const nativeFetch = window.fetch.bind(window);

  // Preserve the public site's existing content and form behavior during migration.
  window.fetch = (input, init) => {
    try {
      const requestUrl = typeof input === "string" ? input : input?.url;
      if (requestUrl === "/api" || requestUrl?.startsWith("/api/")) {
        const targetUrl = new URL(requestUrl, sourceOrigin).toString();
        if (typeof Request !== "undefined" && input instanceof Request) {
          return nativeFetch(new Request(targetUrl, input), init);
        }
        return nativeFetch(targetUrl, init);
      }
    } catch {
      // Let the original request surface its normal error if the bridge fails.
    }
    return nativeFetch(input, init);
  };
})();
