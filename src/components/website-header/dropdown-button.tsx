interface DropdownButtonProps {
  label: string;
  isExpanded: boolean;
  onClick: () => void;
}

export const DropdownButton = ({
  label,
  isExpanded,
  onClick,
}: DropdownButtonProps) => (
  <button
    type="button"
    aria-expanded={isExpanded}
    onClick={onClick}
    className={`group h-full w-full flex items-center justify-start hover:bg-gradient-to-b hover:from-stone-50 hover:to-stone-200 dark:hover:from-stone-900 dark:hover:to-stone-800 transition-colors duration-200 
        ${
          isExpanded
            ? "bg-gradient-to-b from-stone-50 to-stone-200 dark:from-stone-900 dark:to-stone-800"
            : ""
        }`}
  >
    <span className="text-stone-900 dark:text-stone-50 px-4">{label}</span>
    <span aria-hidden="true" className="text-stone-900 dark:text-stone-50">
      {isExpanded ? "−" : "+"}
    </span>
  </button>
);
