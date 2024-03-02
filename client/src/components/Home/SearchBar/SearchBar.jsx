import { useState, useRef } from 'react';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { useSearchProjects } from '../../../context/ProjectsContext';

const SearchBar = () => {
  const [searchString, setSearchString] = useState('');
  const inputRef = useRef();
  const useSearch = useSearchProjects();

  const handleSubmit = (e) => {
    e.preventDefault();
    useSearch(searchString);
  };

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
    <form onSubmit={handleSubmit}>
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
