import styles from "../style.module.scss";

function InfoCard({content, description, src}) {
  const {containerCard, containerContent, title, des} = styles;
  return (
    <div className={containerCard}>
      <img width={40} height={41} src={src} alt="" />

      <div className={containerContent}>
        <div className={title}>{content}</div>
        <span className={des}>{description}</span>
      </div>
    </div>
  );
}

export default InfoCard;
