import { Grid, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';

import Briefcase from '@/assets/svg/Briefcase.svg';
import ChatBubble from '@/assets/svg/ChatBubble.svg';

import ROUTES from '@/constants/routes';

import styles from './styles';

import { chatRegex, homeRegex, historyRegex } from '@/regex/routes';
import { MenuBook } from '@mui/icons-material';

const PAGES = [
  {
    name: 'Kai Tools',
    link: ROUTES.HOME,
    icon: <Briefcase />,
    id: 'page_1',
  },
  {
    name: 'Kai Chat',
    link: ROUTES.CHAT,
    icon: <ChatBubble />,
    id: 'page_2',
  },
  {
    name: 'History',
    link: ROUTES.HISTORY,
    icon: <MenuBook />,
    id: 'page_3',
  }
];

/**
 * Returns a navigation menu component that displays a list of links.
 *
 * @return {JSX.Element} A React component that renders a navigation menu.
 */
const NavMenu = () => {
  const router = useRouter();
  const { pathname } = router;

  const setActive = (id) => {
    const isNotHomePage = [chatRegex.test(pathname) && historyRegex.test(pathname)].includes(true);

    if (id === 'page_1')
      return isNotHomePage ? false : homeRegex.test(pathname);

    return chatRegex.test(pathname) && historyRegex.test(pathname);
  };

  const handleRoute = (link, id) => {
    router.push(link);
    setActive(id);
  };

  return (
    <Grid {...styles.mainGridProps}>
      {PAGES.map((page) => (
        <MenuItem
          key={page.id}
          onClick={() => handleRoute(page.link, page.id)}
          {...styles.menuItemProps(setActive(page.id))}
        >
          <Grid {...styles.innerMenuGridProps}>
            <Grid {...styles.menuIconGridProps}>{page.icon}</Grid>
            <Grid {...styles.menuTitleGridProps}>{page.name}</Grid>
          </Grid>
        </MenuItem>
      ))}
    </Grid>
  );
};

export default NavMenu;
