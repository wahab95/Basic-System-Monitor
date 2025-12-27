import style from './Bar.module.css';

export default function Bar({ usage = 0 }) {
    // Clamp usage between 0 and 100
    const validatedUsage = Math.min(Math.max(usage, 0), 100);
    const progressWidth = `${validatedUsage}%`;

    return (
        <div className={style.whole}>
            <div className={style.rulerTrack}>
                {/* The colored progress fill */}
                <div 
                    className={style.pro} 
                    style={{ width: progressWidth }} 
                />
            </div>
            
            {/* The Number Labels (0, 10, 20... 100) */}
            <div className={style.digitsCon}>
                {Array.from({ length: 11 }, (_, i) => (
                    <span key={i} className={style.label}>
                        {i * 10}
                    </span>
                ))}
            </div>
        </div>
    );
}