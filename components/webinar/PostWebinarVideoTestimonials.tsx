export function PostWebinarVideoTestimonials() {
  const videos = [
    { id: "qvMpmaCUk54", name: "Iwona" },
    { id: "yLvf9T7mzrA", name: "Marta" },
    { id: "3MRAS0H05Bo", name: "Marta" },
    { id: "9qaAdwhYO0w", name: "Basia" }
  ];

  return (
    <section id="opinie-video" className="py-24 md:py-32 bg-[#101010] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl text-center">

        <h2 className="font-heading text-3xl md:text-5xl font-medium text-white mb-16 md:mb-20">
          Opinie uczestniczek
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-3xl mx-auto">
          {videos.map((video, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* VIDEO WRAPPER FOR VERTICAL ASPECT RATIO (9:16) */}
              <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ paddingTop: '177.77%' /* 16:9 inverted */ }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title="Opinia uczestniczki programu TNT"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-6 flex flex-col items-center">
                <p className="text-xl md:text-2xl font-medium text-white mb-1">
                  {video.name}
                </p>
                <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-[#C29B57] opacity-80">
                  uczestniczka programu TNT
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
