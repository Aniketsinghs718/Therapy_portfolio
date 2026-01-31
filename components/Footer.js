const Footer = () => {
  return (
    <footer className="bg-beige-50 px-6 py-16 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Contact Info */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-display font-medium text-darkGreen mb-6">
              Lilac Template
            </h3>
            <div className="space-y-3 text-darkGreen font-body">
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
              <p className="mt-6">
                <a href="mailto:email@example.com" className="underline hover:text-darkGreen-light transition-colors">
                  email@example.com
                </a>
              </p>
              <p>
                <a href="tel:5555555555" className="underline hover:text-darkGreen-light transition-colors">
                  (555) 555-5555
                </a>
              </p>
            </div>
          </div>

          {/* Column 2 - Hours */}
          <div>
            <h3 className="text-xl lg:text-2xl font-display font-medium text-darkGreen mb-6">
              Hours
            </h3>
            <div className="space-y-2 text-darkGreen font-body">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Column 3 - Find */}
          <div>
            <h3 className="text-xl lg:text-2xl font-display font-medium text-darkGreen mb-6">
              Find
            </h3>
            <nav className="space-y-3">
              <div>
                <a href="#home" className="text-darkGreen font-body hover:text-darkGreen-light transition-colors">
                  Home
                </a>
              </div>
              <div>
                <a href="#contact" className="text-darkGreen font-body underline hover:text-darkGreen-light transition-colors">
                  Contact
                </a>
              </div>
              <div>
                <a href="#blog" className="text-darkGreen font-body underline hover:text-darkGreen-light transition-colors">
                  Blog
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-darkGreen/20 my-8"></div>

        {/* Bottom Footer - Legal Links */}
        <div className="space-y-4 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-darkGreen font-body">
            <a href="#privacy" className="underline hover:text-darkGreen-light transition-colors">
              Privacy & Cookies Policy
            </a>
            <a href="#estimate" className="underline hover:text-darkGreen-light transition-colors">
              Good Faith Estimate
            </a>
            <a href="#terms" className="underline hover:text-darkGreen-light transition-colors">
              Website Terms & Conditions
            </a>
            <a href="#disclaimer" className="underline hover:text-darkGreen-light transition-colors">
              Disclaimer
            </a>
          </div>

          <p className="text-sm text-darkGreen font-body">
            Website Template Credits:{' '}
            <a href="https://gobloomcreative.com" className="underline hover:text-darkGreen-light transition-colors" target="_blank" rel="noopener noreferrer">
              Go Bloom Creative
            </a>
          </p>

          <p className="text-sm text-darkGreen font-body mt-6">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
