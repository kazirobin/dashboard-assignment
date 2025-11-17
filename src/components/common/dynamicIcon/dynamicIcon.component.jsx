const DynamicIcon = ({ src,styles,onClick }) => {
  return(

    <img src={src} alt="" srcSet="" className={`${styles} inline`} onClick={onClick}/>
  )
};

export default DynamicIcon;
