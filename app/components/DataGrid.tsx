export function DataGrid({ className = "" }: { className?: string }) {
    return (
        <div
            className={`absolute inset-0 pointer-events-none z-10 opacity-30 ${className}`}
            style={{
                backgroundImage: `
          linear-gradient(to right, var(--color-neon-blue) 1px, transparent 1px),
          linear-gradient(to bottom, var(--color-neon-blue) 1px, transparent 1px)
        `,
                backgroundSize: '40px 40px',
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
            }}
        />
    );
}
