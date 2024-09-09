import SVG from '../ui/svg'
import Tooltip from '../ui/tooltip'
import {svgData} from '@/utils/data'
import {buttonVariants} from '../ui/button'

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
