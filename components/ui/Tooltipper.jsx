import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from './Tooltip'

export function Tooltipper({children, text}) {
  return (
    <>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent>{text}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}
