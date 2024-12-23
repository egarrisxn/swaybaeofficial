import {Svg} from './ui/svg'
import {Tooltip} from './ui/tooltip'
import {buttonVariants} from './ui/button'
import {svgData} from '@/utils/data'

const SocialIcons = () => {
  return (
    <>
      {Object.keys(svgData).map((key) => (
        <Tooltip key={key} text={key}>
          <Svg
            path={svgData[key].path}
            href={svgData[key].href}
            name={svgData[key].title}
            className={`${buttonVariants({variant: 'social', size: 'icon'})} transition-all ease-in 3xl:size-[3rem]`}
          />
        </Tooltip>
      ))}
    </>
  )
}

export default SocialIcons
