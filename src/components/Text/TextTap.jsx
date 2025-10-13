import { useEffect, useState } from "react";

function TextTap({ text, speed = 100, pause = 3000, style }) {
    const [content, setContent] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        let timer;

        if (!deleting && index < text.length) {
            timer = setTimeout(() => {
                setContent((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);
        } else if (!deleting && index === text.length) {
            timer = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && index > 0) {
            timer = setTimeout(() => {
                setContent((prev) => prev.slice(0, -1));
                setIndex(index - 1);
            }, speed);
        } else if (deleting && index === 0) {
            setDeleting(false);
        }

        return () => clearTimeout(timer);
    }, [index, deleting, text, speed, pause]);

    return (
        <div style={style}>
            {content}
            <span className="cursor">|</span>
            <style>{`
        .cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
        </div>
    );
}

export default TextTap;