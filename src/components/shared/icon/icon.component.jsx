const Icon = ({ src,styles,onClick }) => {
  return(

    <img src={src} alt="" srcSet="" className={`${styles} inline`} onClick={onClick}/>
  )
};

export default Icon;
