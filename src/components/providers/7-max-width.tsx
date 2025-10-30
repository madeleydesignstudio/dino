interface SevenMaxWidthProps {
  children: React.ReactNode;
}

const SevenMaxWidth = ({ children }: SevenMaxWidthProps) => {
  return (
    <div className="max-w-7xl mx-auto border-x border-[#D9E0C1]">
      {children}
    </div>
  );
};

export default SevenMaxWidth;
