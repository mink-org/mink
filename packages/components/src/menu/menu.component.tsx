import React, { useState, FC } from 'react';
import { Box, useInput, Color } from 'ink';

// import { INavItem } from '../../nav';

type INavItem = any;

import Breadcrumbs from './breadcrumb.component';
import MenuItem from './menu-item.component';

interface IMenuProps {
  items: INavItem[];
}

const getPreviewItemsFromPath = (items: INavItem[], path: number[]) => {
  return path.reduce((acc, curr) => (acc[curr] && acc[curr].children) || [], items);
};

const getBreadcrumbsFromPath = (items: INavItem[], path: number[]) => path.reduce((acc, curr) => ({
  items: acc.items[curr].children,
  breadcrumbs: [...acc.breadcrumbs, acc.items[curr].name]
}), { items, breadcrumbs: [] }).breadcrumbs;

const Menu: FC<IMenuProps> = ({ items }) => {
  const [indexPath, setIndexPath] = useState<number[]>([]);
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const previewItems = getPreviewItemsFromPath(items, indexPath);
  const breadcrumbs = getBreadcrumbsFromPath(items, indexPath);

  useInput((input, key) => {
    // reset to home
    if (input === '§') {
      setIndexPath([]);
      setActivePreviewIndex(0);
    }

    // handle shortcut number inputs
    if (!isNaN(+input) && +input > 0 && +input <= previewItems.length) {
      setActivePreviewIndex(0);

      return setIndexPath((i) => [...i, (+input - 1)]);
    }

    // go back
    if (key.leftArrow && indexPath.length) {
      setActivePreviewIndex(indexPath[indexPath.length - 1]);

      return setIndexPath((i) => i.slice(0, i.length - 1));
    }

    if (!previewItems.length) {
      return;
    }

    // go forward!
    if (key.rightArrow) {
      setActivePreviewIndex(0);
      setIndexPath((i) => [...i, activePreviewIndex]);
    }
    // scroll up
    if (key.upArrow) {
      return setActivePreviewIndex((i) => i === 0 ? previewItems.length - 1 : i - 1);
    }

    // scroll down
    if (key.downArrow) {
      return setActivePreviewIndex((i) => i === previewItems.length - 1 ? 0 : i + 1);
    }
  });

  return (
    <Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Box flexDirection="column">
        {previewItems.map(({ name, children }, i) => (
          <MenuItem key={name} isFocused={activePreviewIndex === i} hasChildren={!!children}>
            [{i + 1}] {name}
          </MenuItem>
        ))}
      </Box>
    </Box>
  );
};

export default Menu;
