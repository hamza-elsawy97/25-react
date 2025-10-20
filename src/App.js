import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tact-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

function App() {
  return (
    <div className="App">
      <div className="section-title">
        Accordian component
      </div>
      <Accordian/>

      <div className="section-title">
        Random color component
      </div>
      <RandomColor/>

      <div className="section-title">
        Star rating component
      </div>
      <StarRating noOfStars={10}/>

      <div className="section-title">
        Image slider component
      </div>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />


      <div className="section-title">
      Load more products component
      </div>
      <LoadMoreData/>

      <div className="section-title">
      Tree view component/
      </div>
      <TreeView menus={menus} />

      <div className="section-title">
      QR code generator
      </div>
      <QRCodeGenerator/>

      <div className="section-title">
      light and dark theme switch
      </div>
      <LightDarkMode/>

      <div className="section-title">
      Scroll indicator component
      </div>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=50"} />

      <div className="section-title">
      Custom tabs component
      </div>
      <TabTest />

      <div className="section-title">
      Custom Modal Component
      </div>
      <ModalTest/>

      <div className="section-title">
      Github profile finder
      </div>
      <GithubProfileFinder/>

      <div className="section-title">
      Search Autocomplete
      </div>
      <SearchAutocomplete/>

      <div className="section-title">
      Tic tac toe
      </div>
      <TicTacToe/>

      {/* <div className="section-title">
      Feature Flag IMplementation
      </div>
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      <div className="section-title">
      useFetch - Custom Hook Test
      </div>
      <UseFetchHookTest/>

      <div className="section-title">
      Use Onclick Outside Hook Test
      </div>
      <UseOnclickOutsideTest/>

      <div className="section-title">
      Use Window Resize Hook Test
      </div>
      <UseWindowResizeTest/>

      <div className="section-title">
      Scroll to Top and Bottom
      </div>
      <ScrollToTopAndBottom/>

      <div className="section-title">
      Scroll to a Particular Section
      </div>
      <ScrollToSection/>
    </div>
  );
}

export default App;
