import Image from "next/image";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1B360F] text-white py-12 text-center rounded-t-3xl">
      <h2 className="text-[#90c645] text-2xl font-semibold">Contact Us</h2>
      <p className="text-sm mt-2">
        For any questions, reach out to our team directly at{" "}
        <a href="mailto:bridge@yuvabe.com" className="underline">
          bridge@yuvabe.com
        </a>{" "}
        / +91 9677604467
      </p>

      {/* Social Media Icons */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Follow us on Social Media</h3>
        <div className="flex justify-center gap-6 mt-3 text-[#90c645] text-2xl">
          <a href="#" aria-label="Twitter">
            <FaXTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Logos */}
      <div className="flex justify-center gap-6 mt-8">
        <Image src="/img/yb.png" alt="Yuvabe Logo" width={100} height={40} />
        <Image src="/img/ye.png" alt="Yuvabe Education" width={120} height={40} />
      </div>
    </footer>
  );
};

export default Footer;
