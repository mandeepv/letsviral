import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import TwoColContactUsWithIllustrationFullForm from "components/forms/TwoColContactUsWithIllustrationFullForm";
import shopIconImageSrc from "images/shop-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import chefIconImageSrc from "images/chef-icon.svg";  
import ThreeColCenteredStatsPrimaryBackground from "components/features/ThreeColCenteredStatsPrimaryBackground";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  const defaultSteps = [
    {
      heading: "Register",
      description: "Input your business' details to get started."
    },
    {
      heading: "Contact",
      description: "Our team will reach out to you to understand your needs better."
    },
    {
      heading: "Select Influencer Package",
      description: "Choose a nano-influencer package that suits your needs."
    },
    {
        heading: "Watch letsviral.in make you go viral",
        description: "Once you have selected a package, we will take care of the rest."
    }

    ];

  return (
    <AnimationRevealPage>
      <Hero />
      <Features
          heading={
            <>
              Amazing <HighlightedText>Services.</HighlightedText>
            </>
          }
          cards={[
            {
              imageSrc: shopIconImageSrc,
              title: "Highly Targeted Ads",
              description: "We give you the best assortment of nano-influencers for your business' needs, based on geography, demographics, and interests.",
              url: "https://google.com"
            },
            {
              imageSrc: chefIconImageSrc,
              title: "Nano Influencers over Celebrities",
              description: "Smaller influencers have consistently shown to better increase engagement for your brand compared to traditional marketing methods.",
              url: "https://timerse.com"
            },
            {
              imageSrc: celebrationIconImageSrc,
              title: "Instant Results",
              description: "Our Dashboard gives  real-time analytics of your campaign. And you can stop anytime.",
              url: "https://reddit.com"
            }
          ]}
  
          imageContainerCss={tw`p-2!`}
          imageCss={tw`w-20! h-20!`}
        />
      <FeatureWithSteps
          subheading={<Subheading>STEPS</Subheading>}
          heading={
            <>
              Easy to <HighlightedText>Get Started. </HighlightedText>
            </>
          }
          steps={defaultSteps}
          textOnLeft={false}
          imageSrc={macHeroScreenshotImageSrc}
          imageDecoratorBlob={true}
          decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
        />
     
     <ThreeColCenteredStatsPrimaryBackground
      heading={
        <>
         Start your campaign for as low as ₹ 10,000
        </>
      }
      description="No matter what your budget is, we have a plan that's right for you."
     />
            
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        
        faqs={[
          {
            question: "What is influencer marketing?",
            answer:
              "Influencer marketing is a type of marketing that involves partnering with social media influencers to promote your brand or product to their followers."
          },
          {
            question: "How do I know which influencers to work with?",
            answer:
              "Our platform uses data analytics and insights to help you identify the right influencers for your brand based on factors such as audience demographics, engagement rates, and past performance."
          },
          {
            question: "What are nano-influencers?",
            answer:
              "Nano-influencers are social media users with a following of 1,000 to 10,000 followers. They are the most cost-effective influencers to work with and have a higher engagement rate than micro-influencers."
          },
          {
            question: "What is the cost of working with influencers?",
            answer:
              "The cost of working with influencers can vary depending on factors such as their following size, engagement rates, and type of content. Focusing on nano-influencers provides our clients with a never before reached audience to sell to, with a higher conversion rate."
          },
          {
            question: "Can I track the performance of my campaigns?",
            answer:
              "Yes, our platform provides real-time analytics and reporting so you can track the performance of your campaigns and make data-driven decisions to optimize your results."
          },
          {
            question: "How do I get started with influencer marketing?",
            answer:
              "Simply sign up for our platform, create a campaign brief outlining your objectives and target audience, and we'll help you connect with the right influencers to achieve your goals."
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
