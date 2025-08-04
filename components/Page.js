import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <Header />
    <main>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
    <Footer />
  </div>
);

export default Page;
