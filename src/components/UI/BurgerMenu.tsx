import { DropdownMenu,DropdownMenuLabel,
DropdownMenuSeparator, 
DropdownMenuItem,
DropdownMenuContent,
DropdownMenuTrigger} from '~/components/UI/DropDownMenu';
import Link from 'next/link';
import {Button }from '~/components/UI/Button';
import Image from 'next/image';


export default function BurgerMenu(){
  return(
<main>
<DropdownMenu > 
    <DropdownMenuTrigger className='md:hidden'> <Image
    src='/Icons/Navmenu.svg' alt=''
    width={40}
    height={40}></Image></DropdownMenuTrigger>
    <DropdownMenuContent>
<DropdownMenuLabel>Menu</DropdownMenuLabel>
<DropdownMenuSeparator />
<DropdownMenuItem><Link href='/audit'>Auditer</Link></DropdownMenuItem>
<DropdownMenuItem><Link href='/accompagner'>Accompagner</Link></DropdownMenuItem>
<DropdownMenuItem><Link href='/developpement'>Developper</Link></DropdownMenuItem>
<DropdownMenuItem><Link href='/Former'>Formations</Link></DropdownMenuItem>
<DropdownMenuItem><Link href='/ABout'>A propos</Link></DropdownMenuItem>
<DropdownMenuItem><Link href='/blog'>Blog</Link></DropdownMenuItem>
<DropdownMenuItem><Link href='/contact'><Button variant='buttonNoir'> Nous contacter</Button> </Link></DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu> 
</main>)
}