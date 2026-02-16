
import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Route, 
  Zap, 
  ShieldCheck, 
  Leaf, 
  Mail,
  Menu,
  X
} from 'lucide-react';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lucide icons if any are defined directly in HTML strings (though we use Lucide-React here)
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
                <Leaf className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Bioinvasion<span className="text-emerald-600">.in</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
              <a href="#species" className="hover:text-emerald-600 transition-colors">Species Highlight</a>
              <a href="#blog" className="hover:text-emerald-600 transition-colors">Insights</a>
              <a href="mailto:contact@bioinvasion.in" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-all">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1920" 
            alt="Pristine Forest Ecosystem" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" /> Science • Impact • Solutions
            </div>
            <h1 id="site-name" className="text-6xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Protecting Our <span className="text-emerald-400">Natural Heritage</span>
            </h1>
            <p id="tagline" className="text-xl md:text-2xl mb-10 text-slate-300 leading-relaxed max-w-xl">
              Unlocking deep insights into biological invasions to preserve biodiversity and strengthen ecosystem resilience.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#about" className="group bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/20">
                Learn the Science <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#blog" className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                Latest Research <Sparkles className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - What is Biological Invasion? */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase block mb-3">Foundations</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">What is Biological Invasion?</h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            A biological invasion occurs when species are introduced to new environments, establish themselves, and spread uncontrollably, causing significant harm to biodiversity. It is one of the primary drivers of global environmental change.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pathways */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-200 transition-all hover:shadow-xl hover:border-emerald-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:rotate-6 transition-all duration-300">
                <Route className="w-8 h-8 text-emerald-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Pathways</h3>
              <p className="text-slate-600 text-justify leading-relaxed flex-grow">
                Biological invasions often begin through human-mediated pathways such as global trade, transport, agriculture, and ornamental horticulture. Species may be introduced intentionally or accidentally and later escape into natural ecosystems, where they establish and spread with devastating speed.
              </p>
            </div>

            {/* Consequences */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-200 transition-all hover:shadow-xl hover:border-amber-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-600 group-hover:rotate-6 transition-all duration-300">
                <Zap className="w-8 h-8 text-amber-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Consequences</h3>
              <p className="text-slate-600 text-justify leading-relaxed flex-grow">
                Once established, invasive species can outcompete native flora and fauna, alter ecosystem processes, and reduce biodiversity. Their impacts extend beyond ecology, affecting livelihoods, food security, water resources, and local economies. The ripple effects can destabilize entire biomes.
              </p>
            </div>

            {/* Management */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-200 transition-all hover:shadow-xl hover:border-indigo-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:rotate-6 transition-all duration-300">
                <ShieldCheck className="w-8 h-8 text-indigo-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Management</h3>
              <p className="text-slate-600 text-justify leading-relaxed flex-grow">
                Effective management relies on prevention, early detection, and rapid response (EDRR). Combining rigorous scientific research, strategic policy support, and active community participation is essential to control invasive species and safeguard ecosystem resilience for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Species of the Week Section */}
      <section id="species" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
            <div className="w-full lg:w-1/2 min-h-[450px] relative">
              <img 
                src="https://images.unsplash.com/photo-1508215885820-4585e56135c8?auto=format&fit=crop&q=80&w=800" 
                alt="Wedelia trilobata" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:hidden"></div>
            </div>
            <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-emerald-950 text-white">
              <div className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 border border-emerald-500/30">
                Species Profile
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight">Wedelia trilobata</h2>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-slate-400 text-sm">Common name:</span>
                <span className="text-amber-400 font-bold text-lg">Singapore Daisy</span>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                <span className="font-semibold text-white">Wedelia trilobata</span> is a fast-spreading invasive groundcover native to Central America. It forms dense, impenetrable mats that suppress native plants, alters soil conditions, and rapidly invades gardens, wetlands, and forest edges, posing a critical threat to local biodiversity and landscape integrity.
              </p>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <img key={i} src={`https://picsum.photos/seed/${i+10}/64/64`} className="w-10 h-10 rounded-full border-2 border-emerald-900" alt="observer" />
                   ))}
                </div>
                <span className="text-sm text-slate-400 font-medium tracking-wide">Reported by 2,400+ volunteers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section id="blog" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase block mb-2">Knowledge Hub</span>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Latest Insights</h2>
            </div>
            <p className="text-slate-600 max-w-md">Explore our latest peer-reviewed research and fieldwork on invasive species management.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" id="post-grid">
            <article className="group flex flex-col cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">New</div>
              </div>
              <div className="p-8">
                <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3 block">Ecology</span>
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">The Spread of Aquatic Invasives</h3>
                <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed mb-6">Investigating how ballast water in global shipping vessels is moving species across oceans and altering marine biomes...</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="text-xs text-slate-400 font-medium">March 12, 2024</span>
                  <span className="text-emerald-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </article>

            <article className="group flex flex-col cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img src="https://images.unsplash.com/photo-1551093397-67198cfb1442?auto=format&fit=crop&q=80&w=800" alt="Post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3 block">Research</span>
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">Mapping the Spotted Lanternfly</h3>
                <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed mb-6">Advanced satellite imaging and AI modeling help scientists track the migration patterns of invasive insects in real-time...</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="text-xs text-slate-400 font-medium">March 10, 2024</span>
                  <span className="text-emerald-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </article>

            <article className="group flex flex-col cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img src="https://images.unsplash.com/photo-1500622397099-31d83b3097f0?auto=format&fit=crop&q=80&w=800" alt="Post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3 block">Management</span>
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">Restoring Native Grasslands</h3>
                <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed mb-6">Holistic strategies for removing invasive woody shrubs and reclaiming historical natural habitats for indigenous species...</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="text-xs text-slate-400 font-medium">March 05, 2024</span>
                  <span className="text-emerald-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section - Join the Fight */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none flex items-center justify-center">
          <Leaf className="w-96 h-96 rotate-45 text-emerald-100" />
        </div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-600 rounded-full blur-[120px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-10">
            <Mail className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Join the Fight Against <br/>Invasive Species</h2>
          <p className="text-xl md:text-2xl text-emerald-100/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Education is the most powerful tool we have. By understanding the science of bioinvasions, we can take meaningful steps to protect our native ecosystems and build a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:volunteer@bioinvasion.in" className="inline-block bg-white text-emerald-950 px-10 py-5 rounded-2xl font-bold hover:bg-emerald-50 transition-all hover:scale-105 shadow-xl shadow-emerald-950/40">
              Apply as Volunteer
            </a>
            <a href="mailto:support@bioinvasion.in" className="inline-block bg-emerald-800/40 backdrop-blur-sm border border-emerald-500/30 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-800 transition-all">
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
             <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center">
                <Leaf className="text-white w-3.5 h-3.5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Bioinvasion<span className="text-emerald-500">.in</span></span>
          </div>
          <p className="text-sm mb-6">© 2024 Bioinvasion.in Research Group. All rights reserved.</p>
          <div className="flex justify-center gap-8 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
