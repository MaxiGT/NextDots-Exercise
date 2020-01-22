import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Button, ShadowPropTypesIOS } from "react-native";

const MIN_FILTER_LENGTH = 3;

type IncomingProps = {
    onSearch: (filter: string) => void;
    onFilterChange: (filter: string) => void;
    onClearFilter: () => void;
}

const SearchBar = (
    {
        onSearch,
        onFilterChange,
        onClearFilter
    }: IncomingProps
) => {

  const [filter, setFilter] = useState<string>('');

  const handleInputChange = (filter: string) => {
    setFilter(filter);
  };

  const clearFilter = () => {
    setFilter('');
    onClearFilter();
  }
  
  useEffect(() => {
    onFilterChange(filter);
    if (filter.length >= MIN_FILTER_LENGTH) {
      onSearch(filter);
    } else if (filter.length < MIN_FILTER_LENGTH) {
      onClearFilter();
    }
  }, [filter])


  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        onChangeText={handleInputChange}
        style={styles.txtInput}
        placeholder="Search Drinks"
        value={filter}
      />
      <Button
        onPress={clearFilter}
        title={'cancel'} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  txtInput: {
    height: 40,
    fontSize: 15,
    width: '80%',
    backgroundColor: "#FFFFFF",
    borderRadius: 5
  }
});

export default SearchBar;
