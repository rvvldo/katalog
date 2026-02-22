import React, { useEffect, useRef } from 'react';

const Stars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        let shootingStars = [];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create stars with random movement
        class Star {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height;
                this.history = [];
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2.5 + 0.5;

                // Random speed with variation
                this.speedX = (Math.random() - 0.5) * 0.8;
                this.speedY = (Math.random() - 0.5) * 0.8;

                // Random variation for more organic movement
                this.vx = Math.random() * 0.3 - 0.15;
                this.vy = Math.random() * 0.3 - 0.15;

                this.opacity = Math.random() * 0.5 + 0.5;
                this.twinkleSpeed = Math.random() * 0.04 + 0.01;

                // Random rotation for movement pattern
                this.angle = Math.random() * Math.PI * 2;
                this.angleSpeed = (Math.random() - 0.5) * 0.02;
            }

            update() {
                // Update angle for circular/random movement
                this.angle += this.angleSpeed;

                // Apply random fluctuation
                this.vx += (Math.random() - 0.5) * 0.1;
                this.vy += (Math.random() - 0.5) * 0.1;

                // Dampen the variation to keep it smooth
                this.vx *= 0.95;
                this.vy *= 0.95;

                // Move with base speed + variation + circular component
                this.x += this.speedX + this.vx + Math.cos(this.angle) * 0.5;
                this.y += this.speedY + this.vy + Math.sin(this.angle) * 0.5;

                // Wrap around screen
                if (this.x < -10) this.x = canvas.width + 10;
                if (this.x > canvas.width + 10) this.x = -10;
                if (this.y < -10) this.y = canvas.height + 10;
                if (this.y > canvas.height + 10) this.y = -10;

                // Twinkling effect
                this.opacity += this.twinkleSpeed;
                if (this.opacity > 1 || this.opacity < 0.3) {
                    this.twinkleSpeed = -this.twinkleSpeed;
                }
            }

            draw() {
                // Draw main star
                ctx.save();
                ctx.globalAlpha = this.opacity;

                // Glow effect
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
                gradient.addColorStop(0.5, 'rgba(200, 230, 255, 0.5)');
                gradient.addColorStop(1, 'rgba(200, 230, 255, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
                ctx.fill();

                // Core star
                ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        // Enhanced shooting stars with random trajectories
        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                // Random starting position
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height / 3;

                // Random length and speed
                this.length = Math.random() * 120 + 60;
                this.speed = Math.random() * 15 + 8;

                // Random angle for more varied trajectories
                this.angle = Math.random() * Math.PI / 4 + Math.PI / 6; // 30-75 degrees
                this.speedX = Math.cos(this.angle) * this.speed;
                this.speedY = Math.sin(this.angle) * this.speed;

                this.opacity = 1;
                this.fadeSpeed = 0.015;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.opacity -= this.fadeSpeed;

                if (this.opacity <= 0 || this.x > canvas.width + 100 || this.y > canvas.height + 100) {
                    // Respawn after random delay
                    if (Math.random() < 0.01) {
                        this.reset();
                    }
                }
            }

            draw() {
                if (this.opacity <= 0) return;

                ctx.save();

                // Calculate tail end position
                const tailX = this.x - Math.cos(this.angle) * this.length;
                const tailY = this.y - Math.sin(this.angle) * this.length;

                // Gradient for trail
                const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(0.3, `rgba(150, 200, 255, ${this.opacity * 0.7})`);
                gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 3;
                ctx.lineCap = 'round';

                // Glow effect
                ctx.shadowBlur = 15;
                ctx.shadowColor = `rgba(200, 230, 255, ${this.opacity * 0.8})`;

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(tailX, tailY);
                ctx.stroke();

                ctx.restore();
            }
        }

        // Initialize stars
        const starCount = Math.min(Math.floor(window.innerWidth / 2), 600);
        for (let i = 0; i < starCount; i++) {
            stars.push(new Star());
        }

        // Initialize shooting stars
        for (let i = 0; i < 8; i++) {
            shootingStars.push(new ShootingStar());
        }

        // Animation loop
        const animate = () => {
            // Clear with trail effect
            ctx.fillStyle = 'rgba(5, 5, 16, 0.25)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw stars
            stars.forEach(star => {
                star.update();
                star.draw();
            });

            // Update and draw shooting stars
            shootingStars.forEach(star => {
                star.update();
                star.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{
                zIndex: 1,
                background: 'linear-gradient(180deg, #050510 0%, #0a0520 50%, #050510 100%)',
            }}
        />
    );
};

export default Stars;
