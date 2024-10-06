import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-[#1e1a3f] text-white">
      <header className="bg-gradient-to-b from-[#2a2660cc] to-transparent text-white py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/assets/images/icon_new_withoutBackground.png" alt="Streamyfin Logo" className="h-10 sm:h-14 lg:h-20" />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left ml-2 sm:ml-4">
              Streamyfin
            </h1>
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-8">
            <a href="https://github.com/fredrikburmester/streamyfin" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/github.png" alt="GitHub" className="h-8 sm:h-10 lg:h-12" />
            </a>
            <a href="https://discord.gg/aJvAYeycyY" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/discord.png" alt="Discord" className="h-8 sm:h-10 lg:h-12" />
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen pt-20 pb-8 px-4 sm:px-0 lg:pt-32 lg:pb-16">
        <section id="screenshots-features" className="relative w-full max-w-3xl lg:max-w-4xl xl:max-w-6xl">
          <Carousel opts={{ loop: true }} className="relative w-full">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="flex flex-col items-center text-center">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300} // Größere Bilder für Desktops
                    height={300}
                    className="mx-auto"
                  />
                  <div className="mt-8 lg:mt-10">
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">{feature.title}</h4>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300">{feature.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-11 top-1/2 transform -translate-y-1/2 -translate-x-full bg-white text-[#1e1a3f] text-4xl p-2 rounded-full">
              ◀
            </CarouselPrevious>
            <CarouselNext className="absolute right-11 top-1/2 transform -translate-y-1/2 translate-x-full bg-white text-[#1e1a3f] text-4xl p-2 rounded-full">
              ▶
            </CarouselNext>
          </Carousel>
        </section>

        <section id="download" className="text-center py-16 lg:py-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Stream your media anywhere with Streamyfin.</h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-8">
            A Jellyfin client for iOS and Android. Access your media library seamlessly on your devices.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://apps.apple.com/app/streamyfin/id6593660679" target="_blank" rel="noopener noreferrer">
              <img src="/badges/app-store-badge.png" alt="Download on the App Store" className="h-10 sm:h-12 lg:h-14" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.fredrikburmester.streamyfin" target="_blank" rel="noopener noreferrer">
              <img src="/badges/google-play-badge.png" alt="Get it on Google Play" className="h-10 sm:h-12 lg:h-14" />
            </a>
          </div>
        </section>

        <footer className="bg-transparent text-white py-4 lg:py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Streamyfin. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://github.com/fredrikburmester/streamyfin" className="hover:underline">GitHub</a>
              <a href='https://discord.gg/aJvAYeycyY' className='hover:underline'>Discord</a>
              <a href="mailto:fredrik.burmester@gmail.com?subject=Streamyfin" className="hover:underline">Contact Us</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

const features = [
  {
    title: 'Browse Your Media Library',
    description: 'Access your media library of your Jellyfin server, including movies, TV shows, and music.',
    image: '/assets/screenshots/Screenshots_new/Iphone/Blue/streamyfin_blue (8).png',
  },
  {
    title: 'Seamless Playback',
    description: 'Enjoy smooth playback of all your media files, with support for various formats and codecs.',
    image: '/assets/screenshots/screenshot3.png',
  },
  {
    title: 'Watch wherever you are',
    description: 'fully featured downloads with background support, including transcoded downloads',
    image: '/assets/screenshots/Screenshots_new/Iphone/Blue/streamyfin_blue (3).png',
  },
];
