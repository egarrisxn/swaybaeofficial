import {InfiniteMovingCards} from './InfiniteMovingCards'

export function InfiniteScroll() {
  const icons = [
    {src: '/svg/hellofresh-svg.svg', alt: 'Icon 1'},
    {src: '/svg/1df-svg.svg', alt: 'Icon 2'},
    {src: '/svg/blizzard-svg.svg', alt: 'Icon 3'},
    {src: '/svg/youtube-svg.svg', alt: 'Icon 4'},
    {src: '/svg/twitch-svg.svg', alt: 'Icon 5'},
    {src: '/svg/sggp-svg.svg', alt: 'Icon 6'},
    {src: '/svg/dreamhack-svg.svg', alt: 'Icon 7'},
    {src: '/svg/gcx-svg.svg', alt: 'Icon 8'},
  ]

  return (
    <div className='relative flex h-[20rem] flex-col items-center justify-center overflow-hidden bg-dark-fade'>
      <InfiniteMovingCards items={icons} direction='right' speed='slow' />
    </div>
  )
}
