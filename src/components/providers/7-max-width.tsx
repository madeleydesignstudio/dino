/**
 * MaxWidthContainer - A reusable container component that enforces max-width
 * and consistent border styling across the application
 */

interface MaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Container component that provides consistent max-width and border styling
 * Used throughout the application for content sections
 */
export const MaxWidthContainer = ({
  children,
  className = "",
}: MaxWidthContainerProps) => {
  return (
    <div className={`max-w-360 mx-auto border-x border-[#D9E0C1] ${className}`}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
