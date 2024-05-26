import { 
    PopularSection, 
    BannerSection,
    HowSection,
    PartnersSection,
    WhySection,
    TestimonialsSection,
    DownloadSection,
} from '@components/index';
import './Home.scss';

const Home = () => {

    return (
        <>
            <BannerSection />
            <PopularSection />
            <HowSection />
            <PartnersSection />
            <WhySection />
            <TestimonialsSection />
            <DownloadSection />
        </>
    );
}

export default Home;
