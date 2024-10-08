
'use client';

import { ModeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 border-b-[1px] bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
    <div class="flex justify-center gap-5">
        <div>About Me</div>
        <div>Skills</div>
        <div>Project</div>
    </div>
      <div class="flex justify-center"><ModeToggle /></div>
    </nav>
  )
}

export default Navbar
