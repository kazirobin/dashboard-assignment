const DynamicButton = ({ btnText, color, onClick,icon }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-white font-medium ${color} hover:opacity-80 transition-opacity cursor-pointer flex gap-3 items-center`}
      onClick={onClick}
    >
     {icon} {btnText}
    </button>
  );
};

export default DynamicButton;
