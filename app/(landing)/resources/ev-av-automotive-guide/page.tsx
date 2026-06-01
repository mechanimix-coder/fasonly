import ServicesHero from "@/component/landing/ServicesHero";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-10 pb-20 bg-white">
      <ServicesHero
        title="Charging Toward an Electric (Vehicle) Future"
        desc="Automakers and tech firms drive acceleration of electric vehicle development while autonomous innovation has a longer journey"
        simple
      />
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* Image at the top */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/Assets/Images/resources/ev-av-automotive-guide/tesla-s-570-x-308.jpg"
                alt="Tesla electric vehicle - EV market expected to soar to $5 trillion by 2030"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2 text-center">
              The EV market is expected to soar to $5 trillion by 2030, some
              analysts estimate, led by new companies like Tesla (S model
              shown), and established OEMs such as GM and Ford, and helped by
              digital manufacturers that can provide quick-turn prototyping and
              low-volume production. Photo: Tesla.com
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* First paragraph block */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                We're in an electric vehicle arms race—that's what one industry
                insider is calling it.
              </p>
              <p>
                Wedbush analyst Daniel Ives said recently General Motors (GM)
                and Ford are continually trying to outdo each other with
                announcements about investments in electric vehicles (EVs).
                "There is an EV arms race going on in Detroit with Ford and GM
                competing for market and mind share." And this arms race is also
                extending beyond our shores, with European OEM icons such as
                Volkswagen investing heavily in electric vehicles.
              </p>
              <p>
                Even though EVs accounted for less than 2% of U.S. vehicle sales
                last year, automakers are wired for an electric future. Want
                some examples? EV investments rose by 41% just between 2020 and
                2021, and will total $330 billion between 2021 and 2025. GM and
                Volkswagen will spend $35 billion and $42 billion respectively
                on electric and autonomous vehicles from 2020 to 2025. Jaguar
                plans to sell only electric cars by 2025, Volvo by 2030. Ford
                said its entire Lincoln luxury lineup would be electric or
                gas-electric hybrid by 2030, and the car company recently
                doubled its investment in EV to $22 billion by the end of 2025.
                GM hopes to be selling only electric passenger vehicles by 2035.
              </p>
              <p>
                Online car-shopping site Edmunds reported that consumers will
                see a deluge of new models entering the market in the next year:
                30 EVs from 21 brands, up from 17 models in 2020.
              </p>
              <p>
                Beyond the large automakers, a plethora of startup, tech-forward
                companies are also key players in all segments of this market:
                EVs, AVs, battery technology, charging infrastructure, and more.
                Tesla, of course, is the pioneer of these modern automakers. But
                there's also Rivian, Lordstown Motors, and Nuro. And, beyond
                carmakers, automotive technology startups abound: GhostWave,
                which makes radar sensors used in AVs; Neteera, which is also
                developing sensors for AVs; EV Safe Charge; Mighty AI, which
                produces software for AVs; and hundreds more. As several
                industry sources claim, we are in the middle of the biggest
                revolution in motoring since Henry Ford's first production line
                started back in 1913.
              </p>
            </div>

            {/* Subheading */}
            <h3 className="text-xl md:text-2xl font-bold text-[#0B1221] mt-8 mb-4">
              With the electric revolution in mind, we'll take a look at:
            </h3>

            {/* Bullet points */}
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  The shift to EVs and why electric cars will take over sooner
                  than we think
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  The struggle this segment currently finds itself in as
                  companies try to sustain major development work that's
                  required without profitability in the short term
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  Innovation emerging from tech and car companies collaborating
                  with each other
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  Battery technology and a needed, new EV infrastructure that
                  will be pivotal to this segment's success
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  How the EV trend is influencing industrial and commercial
                  vehicles
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#96E92A] font-bold text-lg leading-tight">
                  •
                </span>
                <span>
                  The various levels of autonomous vehicles and how AV
                  innovation needs more R&D time.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4 text-center">
              An EV Future: Investment, Development in High Gear
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            {/* Row 1 - Image Left, Text Right */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
              {/* Left Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/ev-av-automotive-guide/ford-f150-lightning-2-0-570-x-308.jpg"
                    alt="Ford F-150 Lightning electric vehicle"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  The Ford F-150 Lightning is among the automaker's growing
                  electric vehicle offerings. Ford recently doubled its
                  investment in EV to $22 billion by the end of 2025. Photo:
                  Ford.com
                </p>
              </div>

              {/* Right Column - Text */}
              <div className="md:w-3/5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A striking factor in GM's major investment in an all-electric
                  future isn't only the large dollar amount—it's the timing.
                  GM's foot is firmly on the accelerator toward an EV future.
                </p>
                <p>
                  "We are making these investments so we can move faster and
                  grow in ways that deliver value to our shareholders and our
                  stakeholders," GM Chair and CEO Mary Barra said recently. "Our
                  strategy to pursue an inclusive, all-electric future is the
                  right thing to do, the necessary thing to do, and critical to
                  the growth and long-term viability of our business as the
                  world transforms."
                </p>
                <p>
                  In fact, global sales of EVs raced ahead in 2020, rising by
                  43% to a total of 3.2 million, despite overall car sales
                  slumping by a fifth during the pandemic.
                </p>
              </div>
            </div>

            {/* Row 2 - Full width text continuation */}
            <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
              <p>
                By 2025, 20% of all new cars sold globally will be electric,
                according to a forecast by the investment bank UBS. And by 2040,
                virtually every new car sold globally will be electric, UBS
                predicts. That's fast considering the EV market share in 2020
                was just 2%.
              </p>
              <p>
                Why this acceleration? Credit engineers' learning curve. BBC
                News: "The more we make something, the better we get at making
                it and the cheaper it gets to make." That's why computers,
                kitchen appliances, and oil- and gas-powered cars became so
                affordable.
              </p>
            </div>

            {/* Quote Box */}
            <div className="bg-[#E8F4FD] rounded-xl p-8 text-center border-l-8 border-[#96E92A]">
              <p className="text-xl md:text-2xl text-[#0B1221] font-medium italic">
                "The more we make something, the better we get at making it and
                the cheaper it gets to make."
                <span className="block text-base text-gray-500 font-normal not-italic mt-3">
                  — BBC News
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4 text-center">
              A Speed Bump for EVs? Development Without Profit—For Now
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            {/* Text Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                EVs are bolting into the future, thanks in part to that learning
                curve, but that education requires research and development. A
                lot of it. Automakers are investing in electric vehicles, but at
                least for now, EVs won't generate the profits of conventional
                vehicles, according to a report by AlixPartners Consulting. "You
                have to invest now in a business that's less profitable than the
                one you're replacing."
              </p>
              <p>
                This spending on development is also taking place as automakers
                struggle with higher raw material costs and a global
                semiconductor shortage.
              </p>
              <p>
                Plus, the R&D phase may be taking longer because carmakers are,
                in a sense, starting from scratch. With standard cars, most OEMs
                are operating from an existing line, so they already have a lot
                of the components in place. When developing a new model, for
                example, they are basically just evolving their design with a
                few new features. By contrast, electric vehicles are starting
                with a clean slate.
              </p>
              <p>
                The R&D, innovation, and accelerated learning curve through
                rapid iterations that is needed in this stage can be streamlined
                through digital manufacturers such as Protolabs with{" "}
                <a
                  href="https://www.fasonly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  quick-turn prototyping
                </a>{" "}
                and{" "}
                <a
                  href="https://www.lowvolumedesign.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0099ff] hover:text-[#96E92A] transition-colors">
                  low-volume production
                </a>{" "}
                — benefits that are well-suited for R&D's iterative development
                process. Digital suppliers can help with a broad portfolio of
                components, from connectors, terminals, and charging inlets to
                sensors, wireless solutions, and power distribution units, to
                name a few applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4 text-center">
              Car and Tech Companies Connect
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            {/* Image Right, Text Left */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
              {/* Left Column - Text */}
              <div className="md:w-3/5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  As automakers move to EVs and autonomous vehicles (AVs), tech
                  companies are now playing larger roles in this segment.{" "}
                  <span className="font-semibold text-[#0B1221]">
                    Investors have long viewed electric-car pioneer Tesla as a
                    technology company
                  </span>
                  , and its stock price has been supported by its continued
                  superiority in battery costs, software, and the profitability
                  of its electric cars.
                </p>
                <p>
                  Examples of big tech's presence in cars abound:
                  voice-activated navigation, live-streaming media, heads-up
                  displays, rear cameras, lane and parking assist, and other
                  tech that makes our driving experience better and safer.
                </p>
                <p>
                  Carmakers are also teaming up with tech companies, in some
                  cases taking on the role of contract manufacturer. In 2019,
                  Fiat Chrysler partnered with Google spinoff Waymo to produce
                  up to 62,000 self-driving, electric hybrid minivans. Waymo
                  also partnered with Renault and Nissan for a fleet of
                  robo-taxis in France and Japan.
                </p>
                <p>
                  Software giant Autodesk has collaborated with GM on design
                  innovations and works closely with other OEMs on design
                  simulation, virtual and augmented reality tools, advanced
                  software systems for vehicles, and more.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/ev-av-automotive-guide/ev-av-redo-570-308.jpg"
                    alt="Connected car technology and automotive tech integration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Full width text continuation */}
            <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
              <p>
                You see this trend everywhere—even car commercials. A recent
                spot for Nissan boasted that, "The most exciting tech you own is
                in your driveway." Even the big, showy, annual CES trade show in
                Las Vegas, which typically hosts the latest in new consumer
                electronics and technology, has been dominated in recent years
                by the automotive industry.
              </p>
              <p>
                A prime example of what tech companies are bringing to the
                automotive sector is the concept of the connected car. This will
                likely prove to be a game-changing innovation. Recently, Tesla
                was having some issues with the brakes on one of its models.
                Accordingly, Tesla sent out a software upgrade—a software fix—to
                all of the affected cars, and the issue was fixed literally
                overnight. Compare that to the amount of time and money it would
                take for a recall of a standard, internal combustion engine car:
                email and regular-mail notifications to hundreds of thousands of
                car owners, vehicles brought back to dealerships worldwide, and
                on and on.
              </p>
              <p>
                This type of revolutionary technology, whether it's for EVs and
                AVs themselves, or related products such as batteries and
                charging stations, is accelerated to market with the help of{" "}
                <span className="font-semibold text-[#0B1221]">
                  digital manufacturing
                </span>
                . Whether the companies are major automotive OEMs, tech-driven
                startups, or trusted Tier 1 automotive suppliers, they all find
                support from responsive, agile manufacturers that provide rapid
                iteration, quick-turn low-volume production, quality assurance
                systems, and more.
              </p>
            </div>

            {/* Brand Logos Strip */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8 pt-6 border-t border-gray-200">
              <span className="text-xl md:text-2xl font-bold text-[#0B1221] opacity-70">
                Tesla
              </span>
              <span className="text-xl md:text-2xl font-bold text-[#0B1221] opacity-70">
                RIVIAN
              </span>
              <span className="text-xl md:text-2xl font-bold text-[#0B1221] opacity-70 lowercase">
                gm
              </span>
              <span className="text-xl md:text-2xl font-bold text-[#0B1221] opacity-70">
                CHEVROLET
              </span>
              <span className="text-xl md:text-2xl font-bold text-[#0B1221] opacity-70">
                KIA
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4 text-center">
              An Appetite for Infrastructure
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            {/* Image Left, Text Right */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
              {/* Left Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/ev-av-automotive-guide/infrastructure-570-308.jpg"
                    alt="EV charging station infrastructure for electric vehicles"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="md:w-3/5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lost in all of the talk about EVs and the future of mobility,
                  is a much-needed discussion about the infrastructure that's
                  required to make the widespread adoption of EVs a reality.
                  Residential vehicle chargers are needed. A vast network of
                  commercial charging stations, like gas stations, throughout
                  the country are needed. This is not unlike how Ford Motor
                  Company figured out in the early days of its vehicles that gas
                  and service stations were needed to keep those early Model Ts
                  rolling down the roads—such as they were at the time.
                </p>
                <p>
                  Again, digital manufacturers are poised to supply needed
                  components for things like battery packs, energy
                  storage/charging stations, and light detection/range/lighting
                  (LIDAR) cameras for AVs as well as more traditional automotive
                  parts like seals, gaskets, and sound dampening technology.
                  Just as the price of EVs is a concern with some consumers,
                  batteries and the mileage range of a charge are also
                  challenges.
                </p>
              </div>
            </div>

            {/* Full width text continuation */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                "Cost is still a factor and range anxiety will be partly
                addressed by education," Stephanie Brinley, an industry expert
                at IHS Markit, said recently. "There's no reason a consumer
                can't adjust to an electric vehicle." True, but it would sure
                help if readily available charging stations were around, too.
              </p>
              <p>
                As a result, this infrastructure need is spawning hundreds of
                startup companies that see opportunities in this segment.
              </p>
              <p>
                Additionally, the big OEMs themselves are getting into the act.
                GM recently announced two new Ultium Cells LLC battery plants in
                the U.S. (locations not disclosed) in addition to two plants
                already under construction in Ohio and Tennessee. Volkswagen is
                adding six battery-making "gigafactories" in Europe that will
                open by 2030. In fact, the only true differentiators in this
                brave new EV marketplace may end up being batteries and software
                (see earlier Tesla example).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4 text-center">
              An Emissions-Free Future, A New Automotive Landscape
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full mb-10"></div>

            {/* Image Left, Text Right */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
              {/* Left Column - Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src="/Assets/Images/resources/ev-av-automotive-guide/ev-infrastructure-future-570-308.jpg"
                    alt="Electric vehicle charging - emissions free future"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="md:w-3/5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ultimately, this EV/AV trend means a greener future. As
                  mentioned, GM's Barra referenced this in her recent LinkedIn
                  article when she said an all-electric future is "the right
                  thing to do, the necessary thing to do." Emissions-free
                  vehicles mean a cleaner planet and a more sustainable energy
                  source.
                </p>
                <p>
                  What will happen to the oil and gas industry? It remains to be
                  seen. For now, traditional gas-powered cars still dominate.
                  Remember, EVs only own 2% of the marketplace. Elon Musk, the
                  well-known founder of Tesla, recognizes this situation: he is
                  actually competing against the oil and gas industry, not
                  against fellow EV manufacturers. That's part of the reason he
                  has made his patents and other proprietary information
                  available to EV startups. To move the needle on EV market
                  share, he believes the industry needs to shift away from
                  fossil fuel.
                </p>
              </div>
            </div>

            {/* Full width text continuation */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                There are skeptics. As outlined in this report, a shift to an
                all-electric future is a giant disruption, complete with
                building a whole new infrastructure. Some experts have said
                better fuel economy and more advancements in electric hybrid
                technology are more realistic answers to the industry's future.
              </p>

              {/* Quote Block */}
              <div className="bg-[#E8F4FD] rounded-xl p-6 md:p-8 mt-6 border-l-8 border-[#96E92A]">
                <p className="text-lg md:text-xl text-[#0B1221] font-medium italic">
                  "If I had asked people what they wanted, they would have said
                  faster horses."
                  <span className="block text-base text-gray-500 font-normal not-italic mt-3">
                    — Henry Ford
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
