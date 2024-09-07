import {useCallback} from 'react'
import {useTheme} from 'next-themes'
import {Tooltipper} from './Tooltipper'
import {Button} from './Button'
import {Sun, MoonStar} from 'lucide-react'

export default function ThemeToggle({direction}) {
  const {resolvedTheme, setTheme} = useTheme()

  const handleToggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }, [resolvedTheme, setTheme])

  return (
    <Button onClick={handleToggleTheme} variant='ghost' size='icon' aria-label='Toggle theme'>
      <Tooltipper text={resolvedTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}>
        {resolvedTheme === 'light' ? (
          <MoonStar size={36} strokeWidth={2} />
        ) : (
          <Sun size={36} strokeWidth={2} />
        )}
      </Tooltipper>
    </Button>
  )
}
