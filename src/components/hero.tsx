import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

import { data } from '@/constants';

export function Hero() {
  const { avatar, about, links } = data;

  return (
    <>
      <div className='flex flex-row'>
        <Link
          href='https://github.com/gonzalojparra'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full'
        >
          <Avatar className='size-28 shadow border'>
            <AvatarImage alt={avatar.name} src='https://avatars.githubusercontent.com/u/93682630?v=4' />
            <AvatarFallback className='font-mono font-bold'>{avatar.initials}</AvatarFallback>
          </Avatar>
        </Link>
      </div>

      <div className='flex items-center flex-row gap-4'>
        <h1 className='flex dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance'>Gonzalo Parra</h1>
        <Link
          href='https://www.linkedin.com/in/gonzalojparra/'
          target='_blank'
          rel='noopener noreferrer'
          className='hidden md:flex rounded-full'
        >
          <Badge
            variant='default'
            className='font-mono font-bold text-xs bg-primary hover:scale-105 transition-all ease-in-out duration-300'
          >
            Open to work
          </Badge>
        </Link>
      </div>

      <div className='flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty'>
        <h2>{about.title}</h2>
        <p>{about.description}</p>
      </div>

      <nav className='flex gap-x-4 pt-4'>
        {links.map((link) => (
          <Button
            variant='secondary'
            size='default'
            key={link.title}
            className='px-2 shadow rounded-lg'
            asChild
          >
            <Link
              key={link.title}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={link.title}
              className='flex justify-center items-center md:gap-2'
            >
              <link.icon className='size-6' />
              <p className='hidden md:block'>{link.title}</p>
            </Link>
          </Button>
        ))}
      </nav>

    </>
  )
}