import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TapBar = ({ def }) => {
  const [selectedTab, setSelectedTab] = useState(def);

  const handleTabClick = (tab) => {
    if (selectedTab !== tab) {
      setSelectedTab(tab);
    }
  };

  return (
    <div className="bg-white p-4">
      <div className="flex flex-col-2">
        <TabButton
          tab="material"
          label="Material Sourcing"
          selected={selectedTab === 'material'}
          onClick={handleTabClick}
        />
        <TabButton
          tab="products"
          label="Upcycled Products"
          selected={selectedTab === 'products'}
          onClick={handleTabClick}
        />
      </div>
      <hr/>
    </div>
  );
};

const TabButton = ({ tab, label, selected, onClick }) => {
  const tabStyle = selected
    ? 'bg-gray-300 text-black px-4 py-2 rounded-tl-md rounded-tr-md'
    : 'text-black px-4 py-2';

  return (
    <Link
      to={`/${tab}`}
      className={`${tabStyle} font-light text-base`}
      onClick={() => onClick(tab)}
    >
      {label}
    </Link>
  );
};

export default TapBar;
