import { useState, useRef } from 'react';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ onSubmit }) => {
  const [searchString, setSearchString] = useState('');
  const inputRef = useRef();

  const handleClearButtonClick = (e) => {
    e.preventDefault();
    setSearchString('');
  };

  const handleSearchIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Flex
        border="1px"
        borderColor="#333333"
        flexDir="row"
        p="5px"
        borderRadius={48}
      >
        <IconButton
          icon={<SearchIcon />}
          bgColor="white"
          _hover={{ backgroundColor: 'white' }}
          borderRadius={48}
          onClick={handleSearchIconClick}
        />
        <Input
          ref={inputRef}
          border={0}
          focusBorderColor="transparent"
          px={0}
          placeholder={'Buscar proyectos'}
          onChange={(e) => setSearchString(e.target.value)}
          value={searchString}
        />
        <IconButton
          icon={<CloseIcon />}
          bgColor="white"
          _hover={{ backgroundColor: 'white' }}
          borderRadius={48}
          onMouseDown={handleClearButtonClick}
        />
      </Flex>
    </form>
  );
};

export default SearchBar;
