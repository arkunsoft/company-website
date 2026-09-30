// apps/web/src/components/home/HeroBackground.tsx
"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
};

const NODE_COUNT = 80;
const CONNECTION_DISTANCE = 150;
const MOUSE_RADIUS = 160;
const MOUSE_FORCE = 0.06;
const RETURN_FORCE = 0.02;
const GRID_CELL_SIZE = CONNECTION_DISTANCE;

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    const mouse = { x: -9999, y: -9999 };
    let nodes: Node[] = [];

    function resize() {
      const rect = canvas?.getBoundingClientRect();
      if (!rect || !canvas) return;
      width = rect.width;
      height = rect.height;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);

      nodes = Array.from({ length: NODE_COUNT }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return { x, y, baseX: x, baseY: y, vx: 0, vy: 0 };
      });
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas?.getBoundingClientRect();
      if (!rect) return;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function buildGrid(): Map<string, Node[]> {
      const grid = new Map<string, Node[]>();
      for (const node of nodes) {
        const cellX = Math.floor(node.x / GRID_CELL_SIZE);
        const cellY = Math.floor(node.y / GRID_CELL_SIZE);
        const key = `${cellX},${cellY}`;
        const bucket = grid.get(key);
        if (bucket) {
          bucket.push(node);
        } else {
          grid.set(key, [node]);
        }
      }
      return grid;
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MOUSE_RADIUS) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          node.vx += dx * force;
          node.vy += dy * force;
        }

        node.vx += (node.baseX - node.x) * RETURN_FORCE;
        node.vy += (node.baseY - node.y) * RETURN_FORCE;
        node.vx *= 0.9;
        node.vy *= 0.9;
        node.x += node.vx;
        node.y += node.vy;
      }

      const grid = buildGrid();

      for (const node of nodes) {
        const cellX = Math.floor(node.x / GRID_CELL_SIZE);
        const cellY = Math.floor(node.y / GRID_CELL_SIZE);

        for (let ox = -1; ox <= 1; ox++) {
          for (let oy = -1; oy <= 1; oy++) {
            const neighbors = grid.get(`${cellX + ox},${cellY + oy}`);
            if (!neighbors) continue;

            for (const other of neighbors) {
              if (other === node) continue;
              const dist = Math.hypot(node.x - other.x, node.y - other.y);
              if (dist < CONNECTION_DISTANCE) {
                const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.6;
                ctx.strokeStyle = `rgba(56, 163, 229, ${opacity})`;
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(other.x, other.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 163, 229, 0.95)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 163, 229, 0.15)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#0F3866] via-[#0F3866] to-[#1B75BC]" />
      <canvas
        ref={canvasRef}
        className="pointer-events-auto absolute inset-0 hidden h-full w-full sm:block"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#0F3866]/60 via-transparent to-[#0F3866]/30" />
    </div>
  );
}
