// import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full pt-3 mb-10">
        <h1 className="head_text">Text.io</h1>

        <button
          type="button"
          onClick={() => window.open("https://github.com.Ify01")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className=" head_text orange_gradient">
        Shorten Your Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Text-io</span>
      </h1>
      <h2 className="desc">
        Use text-io, an open-source article summarizer, to make reading easier
        by turning large articles into succinct summaries.
      </h2>
    </header>
  );
};

export default Hero;
