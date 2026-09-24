export function PostWebinarStatusBar() {
  return (
    <div className="bg-[#C29B57] text-[#1E293B] py-3 px-4 text-center z-50 relative font-medium">
      <div className="text-sm md:text-base tracking-wide flex flex-col md:flex-row justify-center items-center gap-2">
        <span>Specjalne warunki po webinarze są dostępne jeszcze przez:</span>
        <div className="ddio_countdown_wrap"></div>
      </div>
    </div>
  );
}
