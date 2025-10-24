const dynamicIcon = ({ src,styles,onClick }) => {
  return(

    <img src={src} alt="" srcSet="" className={`${styles} inline`} onClick={onClick}/>
  )
};

export default dynamicIcon;
