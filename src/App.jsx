import styled, { StyleSheetManager } from "styled-components";
import { ReactComponent as IconArrowDown } from "./assets/icons/icon-arrow-down.svg";
import GlobalStyles from "./components/GlobalStyles";
import Picture from "./components/Picture";
import ReviewsBanner from "./components/ReviewsBanner";
import { colors } from "./costants.js";
import textPresets from "./textPresets";

function App() {
  return (
    <StyleSheetManager enableVendorPrefixes>
      <Wrapper>
        <Main>
          <Logo src="assets/images/logo.svg" />
          <Card>
            <CardContent>
              <MainHeading>Join the ultimate tech book club</MainHeading>
              <p style={textPresets[5]}>
                Turn your reading time into learning time with fellow tech
                enthusiasts. Get curated recommendations, join vibrant
                discussions, and level up your skills one chapter at a time.
              </p>
              <Button>
                REVIEW MEMBERSHIP OPTIONS
                <IconArrowDown />
              </Button>
              <ReviewsBanner />
            </CardContent>
            <Image nome="hero" />
          </Card>
        </Main>
        <Card>
          <Image nome="not-average" />
          <CardContent>test</CardContent>
        </Card>
        <Card>
          <CardContent>test</CardContent>
          <Image nome="read-together" />
          <TechnologiesLogos />
        </Card>
        <ReadingJourney />
        <MembershipOptions />
        <TestimonialsWrapper>
          <Testimonial />
        </TestimonialsWrapper>
        <Footer />
        <GlobalStyles />
      </Wrapper>
    </StyleSheetManager>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
`;

const Main = styled.main`
  width: 100%;
  background: url("assets/images/pattern-light-bg.svg") no-repeat center center;
  background-size: cover;
  background-color: #faf5f3;
  background-position: center calc(50% - 50px);
  padding: 0 0 80px 0;
  /* Add your main styles here */
`;

const Logo = styled.img`
  margin: 32px 0 80px 135px;
`;

const Card = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 135px;
  gap: 60px;
  &:first-of-type {
    gap: 64px;
  }
  /* Add your card styles here */
`;

const Image = styled(Picture)`
  height: 520px;
  border-radius: 20px;
  overflow: hidden;

  ${Card}:first-of-type & {
    min-width: 540px;
    height: auto;
    border-radius: 8px;
  }
  /* Add your hero image styles here */
`;

const CardContent = styled.div`
  /* Add your card content styles here */
`;

const MainHeading = styled.h1`
  ${textPresets[1]};
  background: linear-gradient(
    107deg,
    var(--colors-light-salmon-500, #fea36f) -11.37%,
    var(--colors-neutral-900, #062630) 61.84%
  );
  background-clip: text;
  color: transparent;
  margin-bottom: 24px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  margin-top: 32px;
  background-color: ${colors.lightSalmon50};
  border-radius: 8px;
  border: solid 2px ${colors.neutral900};
  ${textPresets[6]};
`;

const TechnologiesLogos = styled.div`
  /* Add your technologies logos styles here */
`;

const ReadingJourney = styled.section`
  /* Add your reading journey section styles here */
`;

const MembershipOptions = styled.section`
  /* Add your membership options styles here */
`;

const TestimonialsWrapper = styled.section`
  /* Add your testimonials wrapper styles here */
`;

const Testimonial = styled.div`
  /* Add your testimonial styles here */
`;

const Footer = styled.footer`
  /* Add your footer styles here */
`;

export default App;
