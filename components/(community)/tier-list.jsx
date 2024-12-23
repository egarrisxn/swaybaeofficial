'use client'
import {Card} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {ScrollArea} from '@/components/ui/scroll-area'
import {Crown, Skull, Ghost, Moon, Star, Flame} from 'lucide-react'

const tierIcons = {
  'TRICK OR TREATER 2024': Ghost,
  'ACOLYTE OF THE SPECTER': Skull,
  'WARDEN OF THE WICKED': Moon,
  'KEEPER OF SOULS': Star,
  'THE HAUNTED MONARCH': Crown,
  'THE ETERNAL NIGHTMARE': Flame,
}

const tierData = [
  {
    tier: 'TRICK OR TREATER 2024',
    buy: 15,
    buyers: [
      'adinsxytoje',
      'alistair_covax',
      'alpha_pt_',
      'biscotti',
      'chillestialhs',
      'devtron25',
      'IteukkaI',
      'orbitalsky210',
      'owlicioushs',
      'proffaridoon',
      'sinkdb_',
      'tatsumasa',
      'twiztid_c',
    ],
  },
  {
    tier: 'ACOLYTE OF THE SPECTER',
    buy: 40,
    buyers: ['darthkek69'],
  },
  {
    tier: 'WARDEN OF THE WICKED',
    buy: 50,
    buyers: ['aelund_', 'ggsutton', 'phyrelight', 'sinkdb_', 'yahli27tv', 'yaltus'],
  },
  {
    tier: 'KEEPER OF SOULS',
    buy: 75,
    buyers: ['alistair_covax', 'darkmek131', 'momoretta', 'nexusshade', 'owlicioushs', 'tatsumasa'],
  },
  {
    tier: 'THE HAUNTED MONARCH',
    buy: 100,
    buyers: ['owlicioushs', 'proffaridoon'],
  },
  {
    tier: 'THE ETERNAL NIGHTMARE',
    buy: 150,
    buyers: [
      'biscotti',
      'chillestialhs',
      'comiclzz',
      'ericshinss',
      'jawbonetheclown',
      'momoretta',
      'twiztid_c',
      'worldofhaganation',
    ],
  },
]

export default function TierList() {
  return (
    <div className='space-y-8'>
      {tierData.map((tier, index) => {
        const Icon = tierIcons[tier.tier]
        return (
          <div key={index}>
            <Card className='bg-white dark:bg-black overflow-hidden backdrop-blur-lg transition-all hover:shadow-lg'>
              <div className='border-purple-100 from-purple-500/10 to-pink-500/10 dark:border-purple-900 border-b bg-gradient-to-r p-6'>
                <div className='flex items-center gap-2 sm:gap-3'>
                  <Icon className='text-purple-600 dark:text-purple-400 size-5 sm:size-6' />
                  <h2 className='text-purple-900 dark:text-purple-100 font-bold tracking-tight sm:text-lg'>
                    {tier.tier}
                  </h2>
                  <Badge
                    variant='secondary'
                    className='bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100 ml-auto'
                  >
                    Buy: {tier.buy}
                  </Badge>
                </div>
              </div>
              <ScrollArea className='h-full p-6'>
                <div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3'>
                  {tier.buyers.map((buyer, idx) => (
                    <div
                      key={idx}
                      className='bg-purple-50 text-purple-900 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-100 dark:hover:bg-purple-800/50 flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors'
                    >
                      <div className='size-2 rounded-full bg-primary' />
                      {buyer}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
