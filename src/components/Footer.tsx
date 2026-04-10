export default function Footer() {
  return (
    <footer className="bg-brand-black py-20 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <a href="/" className="text-3xl font-display font-extrabold tracking-tighter uppercase">
              Dick Clark <span className="font-light">Productions</span>
            </a>
            <p className="mt-6 text-gray-500 max-w-sm">
              The world's largest producer and proprietor of televised live event entertainment programming.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-400">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-gray-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Our History</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-400">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Dick Clark Productions. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">X / Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
