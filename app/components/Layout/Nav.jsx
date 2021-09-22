import {
  UserCircleIcon,
  PuzzleIcon,
  HomeIcon,
  TemplateIcon,
} from '@heroicons/react/solid'

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <HomeIcon width={50} className={classes.icon} />
      <PuzzleIcon width={50} className={classes.icon} />
      <TemplateIcon width={50} className={classes.icon} />
      <UserCircleIcon width={50} className={classes.icon} />
    </nav>
  )
}

const classes = {
  nav: 'absolute flex  bg-red-800 w-screen items-center justify-around bottom-0 left-0 h-20 rounded-t-2xl sm:flex-col sm:w-20 sm:h-screen sm:rounded-r-xl sm:rounded-tl-none sm:justify-center sm:space-y-10',
  icon: 'text-gray-100 p-2 rounded-lg hover:shadow-white cursor-pointer',
}
