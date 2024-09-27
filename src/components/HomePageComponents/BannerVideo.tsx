
function BannerVideo() {
    return (
        <section className="container-fluid relative -mt-24 sm:-mt-40 -z-40">
            {/* Banner image */}
            {/* <img className="w-full" src={banner} alt="LORD'S ACADEMY Banner" /> */}

            <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                {/* Responsive YouTube iframe container */}
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/YKtMErhDpm0?enablejsapi=1&controls=0&autoplay=1&mute=1&loop=1&playlist=YKtMErhDpm0&showinfo=0&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                />
                {/* static video banner */}
                {/* <div className="absolute top-0 left-0 w-full h-full">
                        <video className="video 3xl:mx-auto" src={videoBanner} autoPlay muted loop controls style={{ width: '100%' }} >
                            *Your browser does not support playing video.
                        </video>
                    </div> */}
            </div>
        </section>
    )
}

export default BannerVideo