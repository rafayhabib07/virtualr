import { resourcesLinks, platformLinks, communityLinks,virtualrealityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {virtualrealityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
