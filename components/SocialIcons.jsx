import {SVG} from './ui/Svg'
import {Tooltip} from './ui/Tooltip'
import {svgData} from '@/utils/data'
import {buttonVariants} from './ui/Button'

const SocialIcons = () => {
  return (
    <>
      {Object.keys(svgData).map((key) => (
        <Tooltip key={key} text={key}>
          <SVG
            path={svgData[key].path}
            href={svgData[key].href}
            className={`${buttonVariants({variant: 'social', size: 'icon'})} transition-all ease-in 3xl:size-[3rem]`}
          />
        </Tooltip>
      ))}
    </>
  )
}

export default SocialIcons
