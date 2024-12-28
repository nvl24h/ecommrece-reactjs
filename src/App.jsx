import MyFooter from "@components/Footer/Footer";
import MyHeader from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";

function App() {
  return (
    <>
      <MainLayout>
        <MyHeader />
        <MyFooter />
      </MainLayout>
    </>
  );
}

export default App;
