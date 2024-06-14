import React from 'react';

const SearchField = ({ searchIcon }: any) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Quotes, Customers or Amount"
        className="pl-8 pr-4 py-2 border rounded-xl w-[358px] h-[52px] focus:outline-none focus:border-green-500"
        
      />
      {searchIcon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {searchIcon}
        </div>
      )}
    </div>
  );
};

export default SearchField;
