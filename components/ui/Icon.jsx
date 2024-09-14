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
} from 'lucide-react'

const defaultProps = {
  size: '1rem',
  color: 'currentColor',
  strokeWidth: '1.5',
}

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
  Search: ({className, ...props}) => <Search {...defaultProps} className={className} {...props} />,

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
    <ChevronLeft {...biggerProps} className={`3xl:size-[2.7rem] ${className}`} {...props} />
  ),
  ChevronRight: ({className, ...props}) => (
    <ChevronRight {...biggerProps} className={`3xl:size-[2.7rem] ${className}`} {...props} />
  ),
  CircleArrowUp: ({className, ...props}) => (
    <CircleArrowUp
      {...biggerProps}
      className={`xl:size-[2.25rem] 3xl:size-[2.7rem] ${className}`}
      {...props}
    />
  ),
  MoonStar: ({className, ...props}) => (
    <MoonStar {...biggerProps} className={`3xl:size-[2.7rem] ${className}`} {...props} />
  ),
  Sun: ({className, ...props}) => (
    <Sun {...biggerProps} className={`3xl:size-[2.7rem] ${className}`} {...props} />
  ),
  Menu: ({className, ...props}) => <Menu {...biggerProps} className={className} {...props} />,
  X: ({className, ...props}) => <X {...biggerProps} className={className} {...props} />,
}

export {Icon}
