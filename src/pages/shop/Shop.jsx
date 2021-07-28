import React, { useState } from 'react';
import Previewcollection from '../../components/preview-collection/Preview-collection';
import ItemShop from './Item-shop';

function Shop() {
  const [item] = useState(ItemShop);
  return (
    <div>
      {item.map(({ id, ...other }) => (
        <Previewcollection key={id} {...other} />
      ))}
    </div>
  );
}

export default Shop;
