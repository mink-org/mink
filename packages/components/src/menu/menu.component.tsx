import React, { useState, FC } from 'react';
import { Box, useInput, Color } from 'ink';

import Breadcrumbs from './breadcrumb.component';
import MenuItem from './menu-item.component';

interface IMenuProps {
  items: any[];
  onChange: any;
}

const getPreviewItemsFromPath = (items: any[], path: number[]) => {
  return path.reduce((acc, curr) => (acc[curr] && acc[curr].children) || [], items);
};

const getBreadcrumbsFromPath = (items: any[], path: number[]) => path.reduce((acc, curr) => ({
  items: acc.items[curr].children,
  breadcrumbs: [...acc.breadcrumbs, acc.items[curr].name]
}), { items, breadcrumbs: [] }).breadcrumbs;

const Menu: FC<IMenuProps> = ({ items, onChange }) => {
  const [indexPath, setIndexPath] = useState<number[]>([]);
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const previewItems = getPreviewItemsFromPath(items, indexPath);
  const breadcrumbs = getBreadcrumbsFromPath(items, indexPath);

  const reset = () => {
    setIndexPath([]);
    setActivePreviewIndex(0);
  };

  const forward = () => {
    setActivePreviewIndex(0);
    setIndexPath((i) => [...i, activePreviewIndex]);
    onChange(indexPath);
  };

  const back = () => {
    setActivePreviewIndex(indexPath[indexPath.length - 1]);
    setIndexPath((i) => i.slice(0, i.length - 1));
  };

  const up = () => {
    setActivePreviewIndex((i) => i === 0 ? previewItems.length - 1 : i - 1);
  };

  const down = () => {
    setActivePreviewIndex((i) => i === previewItems.length - 1 ? 0 : i + 1);
  };

  useInput((input, key) => {
    // reset to home
    if (input === '§') {
      return reset();
    }

    // handle shortcut number inputs
    if (!isNaN(+input) && +input > 0 && +input <= previewItems.length) {
      setActivePreviewIndex(0);

      return setIndexPath((i) => [...i, (+input - 1)]);
    }

    // go back
    if (key.leftArrow && indexPath.length) {
      return back();
    }

    // check if cursor is on a leaf node if so, lets stop it in it's tracks
    if (!previewItems.length) {
      return;
    }

    // go forward!
    if (key.rightArrow) {
      return forward();
    }

    // scroll up
    if (key.upArrow) {
      return up();
    }

    // scroll down
    if (key.downArrow) {
      return down();
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
