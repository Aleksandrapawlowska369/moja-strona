import Script from 'next/script';

export function WebivioWidget() {
  return (
    <div className="w-full" id="webinar-widget">
      <style>{`
        /* Fix Webivio dropdown readability in dark mode */
        #webinar-widget select,
        #webinar-widget option,
        #webinar-widget .vw-select,
        #webinar-widget .vw-option {
          color: #1A1A1A !important;
          background-color: #FFFFFF !important;
        }
      `}</style>
      <Script
        src="https://www.webivio.com/api/widget/6ed5f16f-b287-4465-96d1-05038b6a2e4a/embed?lang=pl"
        strategy="lazyOnload"
        crossOrigin="anonymous"
        data-target-id="webinar-widget"
      />
    </div>
  );
}
