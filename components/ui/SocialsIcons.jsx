import {socialData} from '@/utils/constants'
import {Icon} from './Icon'
import {Tooltipper} from './Tooltipper'

export default function SocialIcons() {
  return (
    <>
      {socialData.map((icon, idx) => (
        <Tooltipper key={idx} text={icon.label}>
          <Icon href={icon.href}>{icon.icon}</Icon>
        </Tooltipper>
      ))}
    </>
  )
}
