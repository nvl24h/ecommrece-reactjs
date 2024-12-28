import style from "../style.module.scss";
import fbIcon from "@icons/svgs/fbIcon.svg";
import intaIcon from "@icons/svgs/intagram.svg";
import ytIcon from "@icons/svgs/youtube.svg";

function BoxIcon({type, href}) {
  const {boxIcon} = style;

  const handleRenderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "ins":
        return intaIcon;
      case "ytb":
        return ytIcon;
    }
  };

  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt="" />
    </div>
  );
}

export default BoxIcon;
