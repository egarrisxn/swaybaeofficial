import {
  Search,
  Mail,
  Files,
  X,
  ChevronLeft,
  ChevronRight,
  CircleArrowUp,
  Menu,
  Sun,
  MoonStar,
  Undo2,
} from 'lucide-react'

// const defaultProps = {
//   size: '1rem',
//   color: 'currentColor',
//   strokeWidth: '1.5',
// }

const thickerProps = {
  size: '1rem',
  color: 'currentColor',
  strokeWidth: '2.25',
}

const biggerProps = {
  size: '2rem',
  color: 'currentColor',
  strokeWidth: '2',
}

const Icon = {
  Search: ({className, ...props}) => (
    <Search {...thickerProps} className={className} {...props} />
  ),
  Undo2: ({className, ...props}) => (
    <Undo2
      {...thickerProps}
      className={`transition-all 3xl:size-[1.75rem] ${className}`}
      {...props}
    />
  ),
  Files: ({className, ...props}) => (
    <Files
      {...thickerProps}
      className={`transition-all 3xl:size-[1.5rem] ${className}`}
      {...props}
    />
  ),
  Mail: ({className, ...props}) => (
    <Mail
      {...thickerProps}
      className={`transition-all 3xl:size-[1.5rem] ${className}`}
      {...props}
    />
  ),
  ChevronLeft: ({className, ...props}) => (
    <ChevronLeft
      {...biggerProps}
      className={`pr-0.5 3xl:size-[2.7rem] ${className}`}
      {...props}
    />
  ),
  ChevronRight: ({className, ...props}) => (
    <ChevronRight
      {...biggerProps}
      className={`pl-0.5 3xl:size-[2.7rem] ${className}`}
      {...props}
    />
  ),
  CircleArrowUp: ({className, ...props}) => (
    <CircleArrowUp
      {...biggerProps}
      className={`xl:size-[2.25rem] 3xl:size-[2.7rem] ${className}`}
      {...props}
    />
  ),
  MoonStar: ({className, ...props}) => (
    <MoonStar
      {...biggerProps}
      className={`3xl:size-[2.7rem] ${className}`}
      {...props}
    />
  ),
  Sun: ({className, ...props}) => (
    <Sun
      {...biggerProps}
      className={`3xl:size-[2.7rem] ${className}`}
      {...props}
    />
  ),
  Menu: ({className, ...props}) => (
    <Menu {...biggerProps} className={className} {...props} />
  ),
  X: ({className, ...props}) => (
    <X {...biggerProps} className={className} {...props} />
  ),
}

export {Icon}
