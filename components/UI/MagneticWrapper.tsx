import { motion } from "framer-motion";
import { useRef, useState } from "react";

function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={moveMouse}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
    >
      {children}
    </motion.div>
  );
}

export default MagneticWrapper;
