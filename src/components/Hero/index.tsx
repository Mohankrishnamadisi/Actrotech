import Button from "@/components/Common/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-br from-slate-950 via-indigo-900 to-cyan-700 text-white pt-28 pb-36 md:pt-32 md:pb-44"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-cyan-400/30 blur-3xl animate-float" />
        <div className="absolute right-2/4 top-32 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-2/4 h-44 w-44 rounded-full bg-violet-500/25 blur-3xl animate-float" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl animate-fade-in">
            Build Future-ready Software & IT Talent with ActroTech
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl animate-slide-up">
            Transform your business with premium software engineering, cloud migration, and flexible staffing solutions built for scale, security, and speed.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
            <Button href="/contact" variant="primary" className="w-full max-w-55 animate-slide-up">
              Find Talent
            </Button>
            <Button href="/about" variant="secondary" className="w-full max-w-55 animate-slide-up">
              Our Solutions
            </Button>
          </div>
        </div>
      </div>

      <div className="container relative mt-16 min-h-80 px-4">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8 animate-fade-in">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-lg font-semibold">Enterprise Design</h3>
              <p className="mt-2 text-sm text-slate-100">Modern UI/UX systems, low-friction end-user journeys, responsive data dashboards.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-lg font-semibold">Scalable Engineering</h3>
              <p className="mt-2 text-sm text-slate-100">Microservices, APIs, cloud-native architecture with Continuous Deployment and monitoring.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-lg font-semibold">Global Staffing</h3>
              <p className="mt-2 text-sm text-slate-100">Top-tier remote talent, hiring on demand, assessment-led placements for rapid project ramp-up.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
