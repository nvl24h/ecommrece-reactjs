import Banner from "@components/Bnaner/Banner";
import MyHeader from "@components/Header/Header";
import style from "./style.module.scss";

function HomePage() {
  const {container} = style;
  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
      </div>
    </div>
  );
}

export default HomePage;
