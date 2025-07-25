import Navbar from '@/features/navbar/components/navbar';

export const AlumniNavigation = () => {
  return (
    <Navbar
      variant="sticky"
      right={
        <div className="flex items-center space-x-8 mr-4">
          <a href="https://alumnicard.netlify.app/" className="nav-link">
            Alumni Card
          </a>
          <a href="#benefits" className="nav-link">
            Benefits
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
        </div>
      }
      drawer={
        <>
          <a href="#benefits" className="nav-link">
            Benefits
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
        </>
      }
    />
  );
};
