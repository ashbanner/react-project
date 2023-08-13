import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPeople } from "../redux/peopleSlice";
import { Grid, Typography, Skeleton, Stack } from "@mui/material";
import AppCard from "../components/AppCard";
import { fetchPeople } from "../api-requests";
import NavBar from "../components/NavBar";

function ListPeoplePage() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const peopleData = await fetchPeople();
        dispatch(setPeople(peopleData));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching people data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleDeleteButtonClick = () => {
    console.log("Delete button pressed.");
    //TODO: add functionality
  };

  const handleViewDetailsButtonClick = () => {
    console.log("View details button pressed.");
    //TODO: add functionality
  };

  return (
    <div>
      <NavBar />
      <Typography
        variant="h3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        List Of People
      </Typography>
      <Grid container spacing={2}>
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Stack spacing={1}>
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />

                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width="40%"
                  />

                  <Skeleton
                    animation="wave"
                    variant="rounded"
                    width={210}
                    height={60}
                  />
                </Stack>
              </Grid>
            ))
          : people.map((person) => (
              <Grid item xs={12} sm={6} md={4} key={person.id}>
                <AppCard
                  firstName={person.first_name}
                  lastName={person.last_name}
                  imageUrl={person.avatar}
                  onDeleteButtonClick={handleDeleteButtonClick}
                  onViewDetailsButtonClick={handleViewDetailsButtonClick}
                />
              </Grid>
            ))}
      </Grid>
    </div>
  );
}

export default ListPeoplePage;
