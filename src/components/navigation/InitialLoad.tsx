"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Animation timing constants
const INITIAL_LOAD_CONFIG = {
  SHOW_DURATION: 2800, // Show animation for 2.8 seconds
  FADE_OUT_DURATION: 600, // Fade out duration
  DELAY_BEFORE_FADE: 200, // Extra delay to let animation breathe
  PROGRESS_DURATION: 2400, // Total progress duration
} as const;

/**
 * InitialLoad component displays the DINO keyboard animation on first page load
 *
 * Features:
 * - Shows animated DINO keyboard on initial page load only
 * - Loading progress indicator from 0-100%
 * - Prevents content flash by initially hiding body content
 * - Smooth fade out transition once loading is complete
 * - Uses sessionStorage to prevent showing on subsequent navigations
 * - Integrates with existing navigation system
 */
export const InitialLoad = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const progressRef = useRef<{ value: number }>({ value: 0 });

  // Prevent content flash by hiding body initially
  useEffect(() => {
    // Check if we should show the initial load animation
    const hasShownInitialLoad = sessionStorage.getItem(
      "dino-initial-load-shown",
    );

    if (!hasShownInitialLoad) {
      // Hide content immediately and add loading class
      document.documentElement.classList.add("initial-loading");
      document.body.removeAttribute("data-initial-load-checked");

      // Mark as shown and display the animation
      sessionStorage.setItem("dino-initial-load-shown", "true");
      setIsVisible(true);

      // Prevent body scroll while loading
      document.body.style.overflow = "hidden";

      // Start progress animation
      const progressTween = gsap.to(progressRef.current, {
        value: 100,
        duration: INITIAL_LOAD_CONFIG.PROGRESS_DURATION / 1000,
        ease: "power2.out",
        onUpdate: () => {
          setLoadingProgress(Math.round(progressRef.current.value));
        },
      });

      // Set up the fade out sequence
      const fadeOutTimer = setTimeout(() => {
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: INITIAL_LOAD_CONFIG.FADE_OUT_DURATION / 1000,
            ease: "power2.inOut",
            onComplete: () => {
              setIsVisible(false);
              setShouldRender(false);

              // Show body content
              document.documentElement.classList.remove("initial-loading");
              document.body.setAttribute("data-initial-load-checked", "true");
              document.body.style.overflow = "";
            },
          });
        }
      }, INITIAL_LOAD_CONFIG.SHOW_DURATION + INITIAL_LOAD_CONFIG.DELAY_BEFORE_FADE);

      return () => {
        clearTimeout(fadeOutTimer);
        progressTween.kill();
        document.body.style.overflow = "";
        document.documentElement.classList.remove("initial-loading");
        document.body.setAttribute("data-initial-load-checked", "true");
      };
    } else {
      // Don't render if we've already shown it
      setShouldRender(false);
      document.body.setAttribute("data-initial-load-checked", "true");
    }
  }, []);

  // Don't render anything if we shouldn't show the initial load
  if (!shouldRender) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 flex flex-col items-center justify-center bg-background transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 999 }}
      role="dialog"
      aria-modal="true"
      aria-label="Loading Digital Dino"
      data-initial-loader="true"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* DINO Animation Container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        <svg
          ref={svgRef}
          width="636"
          height="470"
          viewBox="0 0 636 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[80vw] max-h-[50vh] w-auto h-auto"
        >
          <style>
            {`
              @keyframes pressD {
                0%, 100% { transform: translateY(0); }
                10%, 20% { transform: translateY(8px); }
              }

              @keyframes pressI {
                0%, 25%, 100% { transform: translateY(0); }
                35%, 45% { transform: translateY(8px); }
              }

              @keyframes pressN {
                0%, 50%, 100% { transform: translateY(0); }
                60%, 70% { transform: translateY(8px); }
              }

              @keyframes pressO {
                0%, 75%, 100% { transform: translateY(0); }
                85%, 95% { transform: translateY(8px); }
              }

              .key-d {
                animation: pressD 4s ease-in-out infinite;
                transform-origin: center;
              }
              .key-i {
                animation: pressI 4s ease-in-out infinite;
                transform-origin: center;
              }
              .key-n {
                animation: pressN 4s ease-in-out infinite;
                transform-origin: center;
              }
              .key-o {
                animation: pressO 4s ease-in-out infinite;
                transform-origin: center;
              }
            `}
          </style>

          {/* D Key */}
          <g className="key-d">
            <path
              d="M16.5078 68.5L21.0078 58.5L87.5078 6L97.0078 3H107.508L182.008 43.5L186.508 47L190.508 53L194.008 58.5L197.508 68.5L205.508 149L203.508 156L200.008 163.5L193.008 171.5L185.008 178.5L183.508 181.5L180.508 184.5L175.008 186L155.008 204.5L143.508 214.5L133.008 220.5L125.008 222.5L118.508 223.5L113.008 222.5L106.008 223.5L96.0078 220.5L87.0078 214.5L80.0078 213.5L76.5078 211H70.0078L61.5078 204.5H54.5078L48.0078 200.5L41.5078 199L1.50781 169L0.507812 156L2.50781 151.5V142L4.00781 138L5.00781 131L7.50781 125L16.5078 68.5Z"
              fill="#C64B4B"
            />
            <path
              d="M113.008 222.5V123M113.008 222.5L118.508 223.5L125.008 222.5L133.008 220.5L143.508 214.5L155.008 204.5L175.008 186L180.508 184.5L183.508 181.5L185.008 178.5L193.008 171.5L200.008 163.5L203.508 156L205.508 149L197.508 68.5L194.008 58.5L190.508 53M113.008 222.5L106.008 223.5L96.0078 220.5L87.0078 214.5L80.0078 213.5L76.5078 211H70.0078L61.5078 204.5H54.5078L48.0078 200.5L41.5078 199L1.50781 169L0.507812 156L2.50781 151.5V142L4.00781 138L5.00781 131L7.50781 125L16.5078 68.5M113.008 123H101.508L92.5078 120.5L17.5078 73.5L16.5078 68.5M113.008 123L123.508 120.5L186.508 68.5L190.508 60.5V53M16.5078 68.5L21.0078 58.5L87.5078 6L97.0078 3H107.508L182.008 43.5L186.508 47L190.508 53"
              stroke="#404040"
            />
            <path
              d="M60.3616 71.5464L103.184 20.007L121.201 34.9765C125.533 38.5757 128.75 42.4142 130.854 46.4919C133.048 50.5613 134.246 54.6773 134.449 58.8397C134.652 63.0022 134.006 67.0839 132.512 71.0849C131.109 75.0776 128.955 78.8215 126.051 82.3165C123.106 85.8608 119.759 88.7378 116.009 90.9475C112.349 93.1489 108.435 94.5559 104.265 95.1683C100.135 95.7315 95.8492 95.3322 91.4058 93.9702C87.0526 92.5998 82.7101 90.1151 78.3782 86.5159L60.3616 71.5464ZM88.5591 72.0093L89.7405 72.9909C91.2173 74.2179 92.9883 74.9405 95.0536 75.1588C97.1189 75.377 99.3267 74.9231 101.677 73.7971C104.076 72.7119 106.442 70.7664 108.773 67.9605C111.104 65.1547 112.563 62.4976 113.149 59.9892C113.785 57.5218 113.786 55.3175 113.152 53.3764C112.518 51.4352 111.463 49.8512 109.986 48.6242L108.805 47.6426L88.5591 72.0093Z"
              fill="#FAFAFA"
            />
          </g>

          {/* I Key */}
          <g className="key-i">
            <path
              d="M152.508 155.5L157.008 145.5L223.508 93L233.008 90H243.508L318.008 130.5L322.508 134L326.508 140L330.008 145.5L333.508 155.5L341.508 236L339.508 243L336.008 250.5L329.008 258.5L321.008 265.5L319.508 268.5L316.508 271.5L311.008 273L291.008 291.5L279.508 301.5L269.008 307.5L261.008 309.5L254.508 310.5L249.008 309.5L242.008 310.5L232.008 307.5L223.008 301.5L216.008 300.5L212.508 298H206.008L197.508 291.5H190.508L184.008 287.5L177.508 286L137.508 256L136.508 243L138.508 238.5V229L140.008 225L141.008 218L143.508 212L152.508 155.5Z"
              fill="#C64B4B"
            />
            <path
              d="M249.008 309.5V210M249.008 309.5L254.508 310.5L261.008 309.5L269.008 307.5L279.508 301.5L291.008 291.5L311.008 273L316.508 271.5L319.508 268.5L321.008 265.5L329.008 258.5L336.008 250.5L339.508 243L341.508 236L333.508 155.5L330.008 145.5L326.508 140M249.008 309.5L242.008 310.5L232.008 307.5L223.008 301.5L216.008 300.5L212.508 298H206.008L197.508 291.5H190.508L184.008 287.5L177.508 286L137.508 256L136.508 243L138.508 238.5V229L140.008 225L141.008 218L143.508 212L152.508 155.5M249.008 210H237.508L228.508 207.5L153.508 160.5L152.508 155.5M249.008 210L259.508 207.5L322.508 155.5L326.508 147.5V140M152.508 155.5L157.008 145.5L223.508 93L233.008 90H243.508L318.008 130.5L322.508 134L326.508 140"
              stroke="#404040"
            />
            <path
              d="M212.547 166.957L255.991 115.94L272.729 130.193L229.285 181.21L212.547 166.957ZM245.905 107.351L282.815 138.783L271.363 152.231L234.453 120.799L245.905 107.351ZM213.913 144.919L250.823 176.351L239.371 189.799L202.461 158.367L213.913 144.919Z"
              fill="#FAFAFA"
            />
          </g>

          {/* N Key */}
          <g className="key-n">
            <path
              d="M295.508 237.5L300.008 227.5L366.508 175L376.008 172H386.508L461.008 212.5L465.508 216L469.508 222L473.008 227.5L476.508 237.5L484.508 318L482.508 325L479.008 332.5L472.008 340.5L464.008 347.5L462.508 350.5L459.508 353.5L454.008 355L434.008 373.5L422.508 383.5L412.008 389.5L404.008 391.5L397.508 392.5L392.008 391.5L385.008 392.5L375.008 389.5L366.008 383.5L359.008 382.5L355.508 380H349.008L340.508 373.5H333.508L327.008 369.5L320.508 368L280.508 338L279.508 325L281.508 320.5V311L283.008 307L284.008 300L286.508 294L295.508 237.5Z"
              fill="#C64B4B"
            />
            <path
              d="M392.008 391.5V292M392.008 391.5L397.508 392.5L404.008 391.5L412.008 389.5L422.508 383.5L434.008 373.5L454.008 355L459.508 353.5L462.508 350.5L464.008 347.5L472.008 340.5L479.008 332.5L482.508 325L484.508 318L476.508 237.5L473.008 227.5L469.508 222M392.008 391.5L385.008 392.5L375.008 389.5L366.008 383.5L359.008 382.5L355.508 380H349.008L340.508 373.5H333.508L327.008 369.5L320.508 368L280.508 338L279.508 325L281.508 320.5V311L283.008 307L284.008 300L286.508 294L295.508 237.5M392.008 292H380.508L371.508 289.5L296.508 242.5L295.508 237.5M392.008 292L402.508 289.5L465.508 237.5L469.508 229.5V222M295.508 237.5L300.008 227.5L366.508 175L376.008 172H386.508L461.008 212.5L465.508 216L469.508 222"
              stroke="#404040"
            />
            <path
              d="M345.195 234.438L388.639 183.422L407.57 199.542L390.234 238.999L403.015 220.882L415.463 206.264L430.227 218.837L386.783 269.853L367.853 253.733L383.984 215.393L372.47 232.32L359.959 247.011L345.195 234.438Z"
              fill="#FAFAFA"
            />
          </g>

          {/* O Key */}
          <g className="key-o">
            <path
              d="M445.508 313.5L450.008 303.5L516.508 251L526.008 248H536.508L611.008 288.5L615.508 292L619.508 298L623.008 303.5L626.508 313.5L634.508 394L632.508 401L629.008 408.5L622.008 416.5L614.008 423.5L612.508 426.5L609.508 429.5L604.008 431L584.008 449.5L572.508 459.5L562.008 465.5L554.008 467.5L547.508 468.5L542.008 467.5L535.008 468.5L525.008 465.5L516.008 459.5L509.008 458.5L505.508 456H499.008L490.508 449.5H483.508L477.008 445.5L470.508 444L430.508 414L429.508 401L431.508 396.5V387L433.008 383L434.008 376L436.508 370L445.508 313.5Z"
              fill="#C64B4B"
            />
            <path
              d="M542.008 467.5V368M542.008 467.5L547.508 468.5L554.008 467.5L562.008 465.5L572.508 459.5L584.008 449.5L604.008 431L609.508 429.5L612.508 426.5L614.008 423.5L622.008 416.5L629.008 408.5L632.508 401L634.508 394L626.508 313.5L623.008 303.5L619.508 298M542.008 467.5L535.008 468.5L525.008 465.5L516.008 459.5L509.008 458.5L505.508 456H499.008L490.508 449.5H483.508L477.008 445.5L470.508 444L430.508 414L429.508 401L431.508 396.5V387L433.008 383L434.008 376L436.508 370L445.508 313.5M542.008 368H530.508L521.508 365.5L446.508 318.5L445.508 313.5M542.008 368L552.508 365.5L615.508 313.5L619.508 305.5V298M445.508 313.5L450.008 303.5L516.508 251L526.008 248H536.508L611.008 288.5L615.508 292L619.508 298"
              stroke="#404040"
            />
            <path
              d="M515.352 331.116C510.772 327.216 507.734 322.737 506.239 317.682C504.793 312.667 504.825 307.398 506.334 301.875C507.843 296.351 510.86 290.934 515.382 285.623C519.947 280.263 524.835 276.398 530.048 274.028C535.26 271.658 540.436 270.811 545.575 271.489C550.805 272.159 555.685 274.424 560.217 278.283C564.797 282.184 567.81 286.641 569.256 291.655C570.793 296.662 570.782 301.907 569.224 307.389C567.714 312.912 564.677 318.354 560.113 323.714C555.59 329.025 550.723 332.866 545.51 335.236C540.346 337.647 535.149 338.518 529.92 337.848C524.74 337.219 519.883 334.975 515.352 331.116ZM526.731 317.605C528.047 318.726 529.575 319.102 531.316 318.736C533.058 318.369 534.929 317.357 536.929 315.698C538.979 314.081 541.103 311.981 543.303 309.399C545.543 306.767 547.278 304.336 548.506 302.103C549.825 299.864 550.527 297.855 550.611 296.078C550.696 294.301 550.08 292.852 548.764 291.732C547.449 290.611 545.92 290.234 544.179 290.601C542.438 290.967 540.543 291.959 538.493 293.576C536.534 295.186 534.454 297.282 532.255 299.865C530.015 302.496 528.235 304.932 526.916 307.171C525.646 309.452 524.969 311.481 524.884 313.259C524.8 315.036 525.416 316.485 526.731 317.605Z"
              fill="#FAFAFA"
            />
          </g>
        </svg>

        {/* Loading Progress */}
        <div className="flex flex-col items-center space-y-4">
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-800/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-100 ease-out rounded-full"
              style={{
                width: `${loadingProgress}%`,
                backgroundColor: "#D9E0C1",
              }}
            />
          </div>

          {/* Progress Text */}
          <div className="flex items-center space-x-3">
            <span className="text-lg font-mono text-gray-400">
              {loadingProgress < 30
                ? "Initializing..."
                : loadingProgress < 60
                  ? "Loading assets..."
                  : loadingProgress < 90
                    ? "Almost ready..."
                    : loadingProgress === 100
                      ? "Complete!"
                      : "Loading..."}
            </span>
            <span className="text-2xl font-mono font-bold text-white">
              {loadingProgress}%
            </span>
          </div>
        </div>

        {/* Screen reader text */}
        <div className="sr-only" role="status" aria-live="polite">
          Loading Digital Dino website... {loadingProgress}% complete
        </div>
      </div>
    </div>
  );
};
