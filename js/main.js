(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const MAX_SHIFT = 40;
    const MAX_ANGLE = 3;
    const MIN_ANGLE = 0.5;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        const h = e.target.offsetHeight;
        if (!h) continue;
        let deg = Math.atan(MAX_SHIFT / h) * 180 / Math.PI;
        deg = Math.min(MAX_ANGLE, Math.max(MIN_ANGLE, deg));
        e.target.style.setProperty("--flare-angle", `${deg.toFixed(2)}deg`);
      }
    });
    document.querySelectorAll(".content").forEach((el) => ro.observe(el));
  });
})();
//# sourceMappingURL=main.js.map
