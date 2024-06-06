import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { CarouselProps } from '@/types'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LoaderSpinner from '../LoaderSpinner'


const EmblaCarousel = ({ fansLikeDetail }: any) => {

  const router = useRouter();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay || !("stopOnInteraction" in autoplay.options)) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? (autoplay.reset as () => void)
        : (autoplay.stop as () => void)

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const slides = fansLikeDetail && fansLikeDetail?.filter((item: any) => item.totalPodcasts > 0)
if (slides && slides.length > 0) {
  console.log(slides[0].podcast.imageUrl);
} else {
  console.log('Slides is undefined or empty');
}

  if(!slides) return <LoaderSpinner />

  return (
    <section className="flex w-full flex-col gap-4 overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.slice(0, 5).map((item:any) => (
          <figure
            key={item._id}
            className="carousel_box"
            onClick={() => router.push(`/podcasts/${item.podcast[0]?.podcastId}`)}
          >
            <Image 
            src={item.podcast[0]?.imageUrl}
            alt="card"
            fill
            className="absolute size-full rounded-xl border-none"
            />
            <div className="glassmorphism-black relative z-10 flex flex-col rounded-b-xl p-1">
              <h2 className="text-xs font-semibold text-white-1">{item.podcast[0]?.podcastTitle}</h2>
             
            </div>
          </figure>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            selected={index === selectedIndex}
            />
          ))}
      </div>
    </section>
  )
}

export default EmblaCarousel
