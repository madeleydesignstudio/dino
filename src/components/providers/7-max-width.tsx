interface MaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const MaxWidthContainer = ({
  children,
  className = "",
}: MaxWidthContainerProps) => {
  return (
    <div className="px-3 md:px-0">
      <div
        className={`md:max-w-360 mx-auto border-x border-[#D9E0C1] ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MaxWidthContainer;
