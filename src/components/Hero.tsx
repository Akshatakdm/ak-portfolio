function Hero() {
    return (
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-10 md:pb-24 md:pt-14">
            <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-16">

                {/* Photo */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#dedbd2] dark:bg-[#292f29]">
                    <img
                        src="/akshata.webp"
                        alt="Akshata Kadam"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Introduction */}
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#687267] dark:text-[#a8aea5]">
                        Frontend Developer · Mumbai, India
                    </p>

                    <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-6xl lg:text-7xl">
                        Akshata Kadam
                    </h1>

                    <div className="mt-8 max-w-2xl text-lg leading-8 text-[#687267] dark:text-[#a8aea5] md:text-xl">
                        <p className="text-[#171a17] dark:text-[#f5f3ee]">
                            I didn&apos;t start in tech.
                            <br />
                            I just kept getting curious.
                        </p>

                        <p className="mt-4">
                            4+ years writing code, preceded by 5+ years of doing almost everything except writing code - accounts, operations and HR.
                        </p>

                        <p className="mt-4">
                            There was no master plan to become a developer. I was simply curious enough to keep learning, stubborn enough to figure things out from scratch, and eventually curious enough to see what I could build with it.
                        </p>
                        <p className="mt-4"><em>Still learning. Still building. Still breaking things occasionally.</em>
                            
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;