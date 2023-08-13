import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Stack, Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { fetchPerson } from "../api-requests";
import { setPerson } from "../redux/personSlice";
import DetailedViewCard from "../components/DetailedViewCard";
import { useNavigate } from "react-router-dom";

function DetailedViewPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const person = useSelector((state) => state.person);

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const personData = await fetchPerson(id);
        dispatch(setPerson(personData));
        setIsLoading(false);
      } catch (error) {
        console.error(`Error fetching person data with id ${id}:`, error);
        setIsLoading(false);
        navigate("/");
      }
    };

    fetchData();
  }, [dispatch]);

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
        Detailed View
      </Typography>
      <Grid container spacing={2}>
        {isLoading ? (
          Array.from({ length: 1 }).map((_, index) => (
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
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width="40%"
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
        ) : (
          <Grid item xs={12} sm={6} md={4} key={person.id}>
            <DetailedViewCard person={person} comments={person.comments} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default DetailedViewPage;
