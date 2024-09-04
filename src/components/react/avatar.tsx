import { useEffect, useRef, type PropsWithChildren } from "react";

export const Avatar = ({ children }: PropsWithChildren) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = canvasRef.current?.getContext("2d");

        if (!containerRef.current || !canvasRef.current || !ctx) return;

        canvasRef.current.width = containerRef.current.clientWidth;
        canvasRef.current.height = containerRef.current.clientHeight;

        ctx.strokeStyle = "rgba(83, 221, 108, 1)";
        ctx.lineWidth = 2;

        const longDash = 60;
        const shortDash = 15;
        const gap = 40;

        let offset = 0;

        let animationId: number;

        const animate = () => {
            if (!containerRef.current || !canvasRef.current || !ctx) return;

            ctx.lineDashOffset = -offset;

            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

            ctx.beginPath();
            ctx.arc(
                canvasRef.current.width / 2,
                canvasRef.current.height / 2,
                canvasRef.current.width / 2 - 4,
                0,
                Math.PI * 2,
            );
            ctx.setLineDash([longDash, gap, shortDash, gap]);
            ctx.stroke();

            offset += 0.7;

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [containerRef.current, canvasRef.current]);

    return (
        <div
            ref={containerRef}
            className="relative flex size-[198px] flex-col items-center justify-center max-md:mb-10 sm:size-[298px] md:size-[348px] xl:size-[398px]"
        >
            <canvas ref={canvasRef} className="absolute size-full"></canvas>
            {children}
        </div>
    );
};
