import Header from "./components/Header";
import SearchFormSection from "./components/SearchFormSection";
import SearchResultsSection from "./components/SearchResultsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <SearchFormSection />
        <SearchResultsSection />
      </main>
      <Footer />
    </>
  );
}
