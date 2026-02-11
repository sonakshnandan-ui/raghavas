const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-xl font-bold text-background mb-2">
          RAGHAVAS
        </p>
        <p className="font-body text-sm text-background/60">
          Pillar No. 71, Opp. Uppal Bus Depot, Mallikarjuna Nagar, Uppal, Hyderabad, Telangana 500092
        </p>
        <p className="font-body text-xs text-background/40 mt-4">
          © {new Date().getFullYear()} Raghavas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
