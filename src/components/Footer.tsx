import footerImage from "../assets/img/footer_img.png";

function Footer() {
  return (
    <div>
      <img src={footerImage} alt="" />
    </div>
  );
}

export default Footer;

// interface FooterProps {
//   links?: { label: string; href: string }[];
//   socialLinks?: { icon: React.ReactNode; href: string }[];
//   copyright?: string;
// }

// const Footer: React.FC<FooterProps> = ({
//   links = [],
//   socialLinks = [],
//   copyright = "© 2025 Your Company. All rights reserved.",
// }) => {
//   return (
//     <footer className="bg-[#F2F2F2] text-[#424242] w-full p-4 sm:p-6 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {/* Navigation Links */}
//         <div>
//           <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
//           <ul className="space-y-1">
//             {links.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-sm hover:underline transition-colors duration-200"
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Social Links */}
//         <div>
//           <h3 className="text-sm font-semibold mb-2">Follow Us</h3>
//           <div className="flex space-x-4">
//             {socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.href}
//                 className="text-[#424242] hover:text-gray-600 transition-colors duration-200"
//               >
//                 {social.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Copyright */}
//         <div>
//           <p className="text-sm">{copyright}</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
