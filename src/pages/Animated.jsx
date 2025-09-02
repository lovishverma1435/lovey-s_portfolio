import { useEffect, useRef } from "react"

const Animated = ({ theme }) => {
    const blobRefs = useRef([])
    const initialPositions = [
        { x: -4, y: 0 },
        { x: -4, y: 0 },
        { x: 20, y: -8 },
        { x: 20, y: -8 },
    ]

    useEffect(() => {
        let requestId

        const handleScroll = () => {
            const newScroll = window.pageYOffset

            blobRefs.current.forEach((blob, index) => {
                const initialPos = initialPositions[index]

                const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340
                const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40

                const x = initialPos.x + xOffset
                const y = initialPos.y + yOffset

                blob.style.transform = `translate(${x}px, ${y}px)`
                blob.style.transition = "transform 1.4s ease-out"
            })

            requestId = requestAnimationFrame(handleScroll)
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            cancelAnimationFrame(requestId)
        }
    }, [])

    return (
        <div className="fixed inset-0 -z-10">
            {/* Blobs */}
            <div className="absolute inset-0">
                {/* Orange */}
                <div
                    ref={(ref) => (blobRefs.current[0] = ref)}
                    className="absolute top-0 -left-10 md:w-[28rem] md:h-[28rem] w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-[140px] opacity-30 md:opacity-20"
                ></div>

                {/* Peachy Orange */}
                <div
                    ref={(ref) => (blobRefs.current[1] = ref)}
                    className="absolute top-10 -right-10 w-[26rem] h-[26rem] bg-orange-300 rounded-full mix-blend-multiply filter blur-[140px] opacity-30 md:opacity-20 hidden sm:block"
                ></div>

                {/* Blue */}
                <div
                    ref={(ref) => (blobRefs.current[2] = ref)}
                    className="absolute -bottom-16 left-[-30%] md:left-20 w-[28rem] h-[28rem] bg-blue-400 rounded-full mix-blend-multiply filter blur-[140px] opacity-30 md:opacity-20"
                ></div>

                {/* Pinkish */}
                <div
                    ref={(ref) => (blobRefs.current[3] = ref)}
                    className="absolute -bottom-20 right-20 w-[26rem] h-[26rem] bg-pink-400 rounded-full mix-blend-multiply filter blur-[140px] opacity-25 md:opacity-15 hidden sm:block"
                ></div>
            </div>

            {/* Grid Overlay */}
          <div
  className={`absolute inset-0 ${
    theme === "dark"
      ? "bg-[linear-gradient(to_right,rgba(200,200,200,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,200,200,0.25)_1px,transparent_1px)]"
      : "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]"
  } bg-[size:40px_40px]`}
/>


        </div>
    )
}

export default Animated
