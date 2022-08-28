{/*<MovieListDropdown>
                    {data.filter((item) => {
                        const searchKeyword = searchValue.toLocaleLowerCase();
                        const fullName = item.movieName.toLowerCase()

                        return (
                            searchKeyword &&
                            fullName.startsWith(searchKeyword) &&
                            fullName !== searchKeyword
                        )
                    }).slice(0, 5)
                        .map((item) => (
                            <MovieListDropdownRow
                                key={item.movieName}
                                onClick={() => onSearch(item.movieName)}
                            >
                                {item.movieName}
                            </MovieListDropdownRow>
                        ))}
                </MovieListDropdown>*/}