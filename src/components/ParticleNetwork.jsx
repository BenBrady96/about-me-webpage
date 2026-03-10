import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './ParticleNetwork.css';

export default function ParticleNetwork() {
    const canvasRef = useRef(null);
    const { palettes, palette } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };

        const currentPalette = palettes[palette] || palettes.teal;

        // Convert hex to rgb for opacity control
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '100, 255, 218';
        };
        const particleColorRgb = currentPalette.accentRgb || hexToRgb(currentPalette.accent);

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            constructor(x, y, dx, dy, size) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.size = size;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = `rgba(${particleColorRgb}, 0.8)`;
                ctx.fill();
            }

            update() {
                // Interactive mouse repulsion
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let maxDistance = mouse.radius;
                    let force = (maxDistance - distance) / maxDistance;
                    let directionX = forceDirectionX * force * this.density;
                    let directionY = forceDirectionY * force * this.density;

                    if (distance < mouse.radius) {
                        this.x -= directionX;
                        this.y -= directionY;
                    } else {
                        if (this.x !== this.baseX) {
                            let dx = this.x - this.baseX;
                            this.x -= dx / 10;
                        }
                        if (this.y !== this.baseY) {
                            let dy = this.y - this.baseY;
                            this.y -= dy / 10;
                        }
                    }
                }

                // Natural movement
                this.baseX += this.dx;
                this.baseY += this.dy;

                // Bounce off edges
                if (this.baseX > canvas.width || this.baseX < 0) this.dx = -this.dx;
                if (this.baseY > canvas.height || this.baseY < 0) this.dy = -this.dy;

                this.draw();
            }
        }

        const initParticles = () => {
            particles = [];

            const area = canvas.width * canvas.height;

            const count = Math.min(Math.floor(area / 5000), 500);

            for (let i = 0; i < count; i++) {
                let size = (Math.random() * 2) + 1;
                let x = Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2;
                let y = Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2;
                let dx = (Math.random() - 0.5) * 1;
                let dy = (Math.random() - 0.5) * 1;
                particles.push(new Particle(x, y, dx, dy, size));
            }
        };

        const connectParticles = () => {
            let opacityValue = 1;
            const maxDistance = (canvas.width / 10) * (canvas.height / 10);

            // Spatial partitioning optimization: divide screen into grid cells
            const cellSize = Math.sqrt(maxDistance);
            const cols = Math.floor(canvas.width / cellSize) + 1;
            const rows = Math.floor(canvas.height / cellSize) + 1;

            // Create empty grid
            const grid = Array(cols * rows).fill().map(() => []);

            // Assign particles to grid cells
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const col = Math.floor(p.x / cellSize);
                const row = Math.floor(p.y / cellSize);
                if (col >= 0 && col < cols && row >= 0 && row < rows) {
                    const idx = row * cols + col;
                    grid[idx].push(p);
                }
            }

            ctx.lineWidth = 1;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const currentIdx = r * cols + c;
                    const cellParticles = grid[currentIdx];

                    if (!cellParticles || cellParticles.length === 0) continue;

                    for (let i = 0; i < cellParticles.length; i++) {
                        const p1 = cellParticles[i];

                        const neighbors = [
                            [0, 0], [1, 0], [-1, 1], [0, 1], [1, 1]
                        ];

                        for (const [dc, dr] of neighbors) {
                            const nc = c + dc;
                            const nr = r + dr;

                            if (nc >= 0 && nc < cols && nr >= 0 && nr < rows) {
                                const nIdx = nr * cols + nc;
                                const neighborParticles = grid[nIdx];

                                if (!neighborParticles) continue;

                                const startJ = (dc === 0 && dr === 0) ? i + 1 : 0;

                                for (let j = startJ; j < neighborParticles.length; j++) {
                                    const p2 = neighborParticles[j];

                                    const dx = p1.x - p2.x;
                                    const dy = p1.y - p2.y;
                                    const distance = dx * dx + dy * dy;

                                    if (distance < maxDistance) {
                                        opacityValue = 1 - (distance / 10000);

                                        if (opacityValue > 0.05) {
                                            ctx.strokeStyle = `rgba(${particleColorRgb}, ${opacityValue * 0.2})`;
                                            ctx.beginPath();
                                            ctx.moveTo(p1.x, p1.y);
                                            ctx.lineTo(p2.x, p2.y);
                                            ctx.stroke();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connectParticles();
        };

        window.addEventListener('resize', resizeCanvas);

        const isHoverDevice = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseOut = () => {
            mouse.x = undefined;
            mouse.y = undefined;
        };

        if (isHoverDevice) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseout', handleMouseOut);
        }

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (isHoverDevice) {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseout', handleMouseOut);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, [palette, palettes]);

    return <canvas ref={canvasRef} className="particle-network" />;
}
