export const Footer = () => {
  return (
    <footer className="bg-accent text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </div>
          <div className="text-sm">
            <a href="https://example.com/terms" className="hover:underline">
              Terms of Service
            </a>
            &nbsp;|&nbsp;
            <a href="https://example.com/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
