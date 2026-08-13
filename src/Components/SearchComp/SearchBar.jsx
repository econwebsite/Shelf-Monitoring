import React, { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";

import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import { siteSearchIndex } from "../../utils/siteSearchIndex";
import { searchByKeywords } from "../../utils/searchUtils";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  // Create Fuse search engine
  const searchEngine = useMemo(() => {
    return new Fuse(siteSearchIndex, {
      keys: ["title", "description", "keywords"],
      threshold: 0.34,
      ignoreLocation: true,
      minMatchCharLength: 2,
    });
  }, []);

  // Search based on user's input
  const searchResults = useMemo(() => {
    return searchByKeywords(
      searchEngine,
      searchQuery,
      "path",
      8
    );
  }, [searchEngine, searchQuery]);

  // Close search
  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  // Navigate to selected result
  const handleResultClick = (path) => {
    closeSearch();
    navigate(path);
  };

  return (
    <Box
      sx={{
        position: "relative",
        marginRight: "15px",
      }}
    >
      {/* Search Icon */}
      {!searchOpen && (
        <IconButton
          onClick={() => setSearchOpen(true)}
          aria-label="Open search"
          sx={{
            color: "#0d5ca8",
            padding: "6px",
          }}
        >
          <SearchIcon sx={{ fontSize: 24 }} />
        </IconButton>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <>
          {/* Backdrop */}
          <Box
            onClick={closeSearch}
            sx={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1299,
            }}
          />

          {/* Search Bar */}
          <Box
            sx={{
              position: "fixed",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1300,
              width: {
                xs: "85%",
                sm: "500px",
              },
              display: "flex",
              alignItems: "center",
              border: "1px solid #9ec6ea",
              borderRadius: "999px",
              backgroundColor: "#ffffff",
              px: 1.25,
              py: 0.15,
              boxShadow: "0 8px 35px rgba(0, 56, 115, 0.25)",
            }}
          >
            <SearchIcon
              sx={{
color: "#ffffff",
                fontSize: 20,
                mr: 0.5,
                flexShrink: 0,
              }}
            />

            <Box
              component="input"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              aria-label="Search site pages"
              sx={{
                width: "100%",
                border: "none",
                outline: "none",
                py: 0.75,
                backgroundColor: "transparent",
                color: "#083b78",
                fontSize: "0.9rem",
              }}
            />

            <IconButton
              onClick={closeSearch}
              aria-label="Close search"
              sx={{
                color: "#0d5ca8",
                padding: "4px",
                flexShrink: 0,
              }}
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>

          {/* Search Results */}
          {searchQuery.trim().length >= 2 && (
            <Box
              sx={{
                position: "fixed",
                top: "calc(20% + 35px)",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1300,
                width: {
                  xs: "85%",
                  sm: "500px",
                },
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 8px 25px rgba(0, 56, 115, 0.2)",
                 maxHeight: "400px",
    overflowY: "auto"
              }}
            >
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <Box
                    key={item.path}
                    onClick={() => handleResultClick(item.path)}
                    sx={{
                      padding: "12px 16px",
                      borderBottom: "1px solid #eeeeee",
                      cursor: "pointer",
                      transition: "background-color 0.2s",

                      "&:hover": {
                        backgroundColor: "#f3f8fc",
                      },

                      "&:last-child": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        fontWeight: 600,
                        color: "#083b78",
                      }}
                    >
                      {item.title}
                    </Box>

                    <Box
                      sx={{
                        fontSize: "0.8rem",
                        color: "#666666",
                        mt: 0.5,
                      }}
                    >
                      {item.description}
                    </Box>
                  </Box>
                ))
              ) : (
                <Box
                  sx={{
                    padding: "15px",
                    textAlign: "center",
                    color: "#666666",
                  }}
                >
                  No results found
                </Box>
              )}
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

export default SearchBar;