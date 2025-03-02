import {svgData} from '@/utils/data'
import {Svg} from '@/components/ui/svg'
import {Tooltip} from '@/components/ui/tooltip'
import {buttonVariants} from '@/components/ui/button'

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
