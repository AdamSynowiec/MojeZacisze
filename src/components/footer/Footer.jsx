import logo_white from '../../assets/images/logo_white.png'

const sections = [
    {
      title: 'Product',
      links: [
        { name: 'Overview', href: '#' },

      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },

      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help', href: '#' },

      ],
    },
    {
      title: 'Social',
      links: [
        { name: 'Twitter', href: '#' },

      ],
    },
  ];
  
  const Footer = () => {
    return (
      <section className="py-32 bg-neutral-900 text-white">
        <div className="container mx-auto">
          <footer>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2 mb-8 lg:mb-0">
                <img
                  src={logo_white}
                  alt="logo"
                  className="mb-4 h-48"
                />
              </div>
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t border-neutral-600 pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
              <p>© 2025 Mojezacisze.pl</p>
              <ul className="flex gap-4">
                <li className="underline hover:text-primary">
                  <a href="#">Polityka prywatności</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </section>
    );
  };
  
  export default Footer;
  