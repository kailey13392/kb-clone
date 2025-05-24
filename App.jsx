import Header from "./Header";
import MainBanner from "./MainBanner";
import TabMenu from "./TabMenu";
import NewsSection from "./NewsSection";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <MainBanner />
      <TabMenu />
      <NewsSection />
    </div>
  );
}
