
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
  baseSize: number;
  type: 'circle' | 'triangle';
  angle: number;
  rotationSpeed: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -2000, y: -2000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Performance optimization
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const colors = [
      'rgba(147, 51, 234, 0.5)',  // Deep Purple
      'rgba(192, 132, 252, 0.4)', // Light Purple
      'rgba(234, 179, 8, 0.4)',   // Gold/Yellow
      'rgba(59, 130, 246, 0.4)',  // Neural Blue
      'rgba(236, 72, 153, 0.3)',  // Pink Highlight
      'rgba(255, 255, 255, 0.4)'  // Synaptic Spark
    ];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    /**
     * Generates a point within a sophisticated brain silhouette.
     */
    const getAnatomicalBrainPoint = () => {
      const angle = Math.random() * Math.PI * 2;
      const isRightLobe = Math.random() > 0.45;
      
      const baseRX = width * 0.22;
      const baseRY = height * 0.32;

      const foldIntensity = 0.12;
      const folds = 1 + foldIntensity * (
        Math.sin(angle * 6) * 0.5 + 
        Math.sin(angle * 12) * 0.3 + 
        Math.cos(angle * 3) * 0.2
      );

      const r = Math.sqrt(Math.random()) * folds;
      
      let x, y;
      const section = Math.random();
      
      if (section > 0.15) {
        const rx = baseRX * r;
        const ry = baseRY * r;
        const offsetX = isRightLobe ? width * 0.05 : -width * 0.05;
        const tilt = Math.cos(angle) * 0.1;
        x = width / 2 + offsetX + Math.cos(angle) * rx;
        y = height / 2 + (Math.sin(angle) * ry) - (height * 0.05) + tilt;
      } else if (section > 0.05) {
        const rx = baseRX * 0.45 * r;
        const ry = baseRY * 0.35 * r;
        x = width / 2 - (width * 0.12) + Math.cos(angle) * rx;
        y = height / 2 + (height * 0.25) + Math.sin(angle) * ry;
      } else {
        const stemWidth = width * 0.03 * r;
        const stemHeight = height * 0.15 * r;
        x = width / 2 - (width * 0.05) + (Math.random() - 0.5) * stemWidth;
        y = height / 2 + (height * 0.3) + (Math.random()) * stemHeight;
      }

      return { x, y };
    };

    const initParticles = () => {
      particles = [];
      const count = 2200; // Slightly reduced count to accommodate larger particle area
      for (let i = 0; i < count; i++) {
        const pt = getAnatomicalBrainPoint();
        const startX = Math.random() * width;
        const startY = Math.random() * height;
        // SIGNIFICANTLY INCREASED SIZE: from (0.4-2.2) to (1.5-6.5)
        const baseSize = Math.random() * 5 + 1.5;
        
        particles.push({
          x: startX,
          y: startY,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          targetX: pt.x,
          targetY: pt.y,
          size: baseSize,
          baseSize: baseSize,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: Math.random() > 0.8 ? 'triangle' : 'circle',
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.04
        });
      }
    };

    const drawParticle = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      
      if (p.type === 'triangle') {
        ctx.beginPath();
        const s = p.size * 2.5; // Increased multiplier for triangles
        ctx.moveTo(0, -s);
        ctx.lineTo(s, s);
        ctx.lineTo(-s, s);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.fillStyle = '#0a0a0a'; // Use solid background for cleaner trails
      ctx.globalAlpha = 0.18;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1.0;

      const time = Date.now() * 0.001;

      particles.forEach((p, i) => {
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        
        p.x += dx * 0.035;
        p.y += dy * 0.035;
        
        p.x += Math.sin(time * 0.4 + i * 0.2) * 0.5;
        p.y += Math.cos(time * 0.4 + i * 0.2) * 0.5;
        
        p.angle += p.rotationSpeed;

        const mdx = p.x - mouseRef.current.x;
        const mdy = p.y - mouseRef.current.y;
        const mDistSq = mdx * mdx + mdy * mdy;
        const repelRadius = 220; // Increased interaction radius
        
        if (mDistSq < repelRadius * repelRadius) {
          const mDist = Math.sqrt(mDistSq);
          const force = (repelRadius - mDist) / repelRadius;
          p.x += (mdx / mDist) * force * 12;
          p.y += (mdy / mDist) * force * 12;
          p.size = p.baseSize * (1 + force * 2.8); // More dramatic expansion
        } else {
          p.size = p.baseSize;
        }

        drawParticle(p);

        // Connections logic
        if (i % 35 === 0) {
          for (let j = i + 1; j < particles.length; j += 180) {
            const p2 = particles[j];
            const distSq = (p.x - p2.x)**2 + (p.y - p2.y)**2;
            if (distSq < 5000) { // Increased connection distance
              const alpha = 0.15 * (1 - distSq / 5000);
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.85, mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleBackground;
