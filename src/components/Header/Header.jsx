import BoxIcon from "./BoxIcon/BoxIcon";
import {dataBoxIcon, dataMenu} from "./constants";
import Menu from "./Menu/Menu";
import styles from "./style.module.scss";
import logo from "@icons/images/logo.svg";
import cart from "@icons/svgs/cart.svg";
import heart from "@icons/svgs/heart.svg";
import reLoad from "@icons/svgs/reload.svg";

function MyHeader() {
  const {containerBoxIcon, containerMenu, containerHeader, containerBox, container} = styles;

  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item, index) => {
              return <BoxIcon key={index} type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, index) => {
              return <Menu key={index} content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img src={logo} alt="" style={{width: "153px", height: "53px"}} />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item, index) => {
              return <Menu key={index} content={item.content} href={item.href} />;
            })}
          </div>
          <div className={containerBoxIcon}>
            <img width={20} height={20} src={reLoad} alt="" />
            <img width={20} height={20} src={heart} alt="" />
            <img width={20} height={20} src={cart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
``;
