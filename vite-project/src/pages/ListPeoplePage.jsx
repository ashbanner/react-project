import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPeople, removePerson, addPerson } from "../redux/peopleSlice";
import {
  Grid,
  Typography,
  Skeleton,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import AppCard from "../components/AppCard";
import { fetchPeople, deletePerson, createPerson } from "../api-requests";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../components/DeleteConfirmation";
import CreatePersonDialog from "../components/CreateModal";

function ListPeoplePage() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);

  const [isLoading, setIsLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [personToDelete, setPersonToDelete] = useState("");
  const [snackbarBackgroundColor, setSnackbarBackgroundColor] = useState("");

  const navigate = useNavigate();

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

  const handleDeleteButtonClick = (id) => {
    setPersonToDelete(id);
    setDialogOpen(true);
  };

  const handleViewDetailsButtonClick = (id) => {
    navigate(`/people/${id}`);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleConfirmDelete = async () => {
    setDialogOpen(false);
    try {
      await deletePerson(personToDelete);
      dispatch(removePerson(personToDelete));
      setSnackbarMessage("Person deleted successfully");
      setSnackbarBackgroundColor("green");
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage("Failed to delete person");
      setSnackbarBackgroundColor("red");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleDialogOpen = () => {
    setCreateDialogOpen(true);
  };

  const handleDialogClose = () => {
    setCreateDialogOpen(false);
  };

  const handleCreatePerson = async (formData) => {
    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      job_title: formData.jobRole,
      avatar: formData.avatarUrl,
    };
    handleDialogClose();
    try {
      const person = await createPerson(data);
      dispatch(addPerson(person));
      setSnackbarMessage("Person created successfully");
      setSnackbarBackgroundColor("green");
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage("Failed to create person");
      setSnackbarBackgroundColor("red");
      setSnackbarOpen(true);
    }
  };

  return (
    <div>
      <NavBar onCreatePressed={handleDialogOpen} />
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
                  id={person.id}
                  firstName={person.first_name}
                  lastName={person.last_name}
                  imageUrl={person.avatar}
                  onDeleteButtonClick={handleDeleteButtonClick}
                  onViewDetailsButtonClick={handleViewDetailsButtonClick}
                />
              </Grid>
            ))}
      </Grid>
      {isLoading ? null : (
        <DeleteConfirmation
          open={dialogOpen}
          onClose={handleCloseDialog}
          onConfirm={handleConfirmDelete}
        />
      )}
      {isLoading ? null : (
        <CreatePersonDialog
          open={createDialogOpen}
          onClose={handleDialogClose}
          onSubmit={handleCreatePerson}
        />
      )}
      {isLoading ? null : (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="error"
            sx={{ backgroundColor: snackbarBackgroundColor }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}

export default ListPeoplePage;
