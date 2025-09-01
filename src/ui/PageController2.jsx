import { useRef, useState } from "react";
import { cn } from "./AllDataInput";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";
import { Link, useLocation } from "react-router-dom";

export const FloatingDock2 = ({ items, desktopClassName }) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
        </>
    );
};


const FloatingDockDesktop = ({ items, className }) => {
    let mouseX = useMotionValue(Infinity);

    return (
        <motion.div

            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "flex fixed bottom-0 left-0 w-full h-16 items-center justify-center gap-4 rounded-t-[20px] bg-transparent md:bg-black px-4",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({ mouseX, title, icon, href }) {
    let ref = useRef(null);
    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

    let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    let widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
    let heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

    const [hovered, setHovered] = useState(false);


    return (
        <Link to={href}>
            <motion.div
                ref={ref}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`relative w-[40px] h-[40px] flex aspect-square items-center justify-center rounded-full bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 shadow-lg`}>
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="bg-customTeal text-gray-200 absolute -top-8 left-1/2 w-fit rounded-md 
                   font-poppins font-semibold px-2 py-1 text-xs whitespace-pre "
                        >
                            {/* {title} */}
                       </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    className={`flex text-white items-center justify-center `}  // 👈 text ko white kiya taki gradient pe visible ho
                >
                    {icon}
                </motion.div>
            </motion.div>

        </Link>
    );
}