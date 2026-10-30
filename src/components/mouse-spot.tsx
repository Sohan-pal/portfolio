import { useEffect, useRef } from "react";

/**
 * MouseSpot: soft radial sky-blue glow that follows the cursor.
 * Re-enabled for the light sketchbook theme.
 */
export function MouseSpot() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;

    let raf = 0;
    let tx = -200,
      ty = -200;
    let cx = -200,
      cy = -200;

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function loop() {
      cx = lerp(cx, tx, 0.1);
      cy = lerp(cy, ty, 0.1);
      el!.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    }

    function onMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] select-none"
      aria-hidden="true"
      style={{
        width: 380,
        height: 380,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(169,214,250,0.22) 0%, rgba(169,214,250,0.07) 45%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
