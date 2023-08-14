import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  jobRole: "",
  avatarUrl: "",
};

const CreatePersonDialog = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobRole: "",
  });

  const validateField = (fieldName, value) => {
    let error = "";

    if (fieldName === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email format";
    }

    setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = () => {
    const errors = {};
    for (const fieldName in formData) {
      validateField(fieldName, formData[fieldName]);
      if (formErrors[fieldName]) {
        errors[fieldName] = formErrors[fieldName];
      }
    }

    if (Object.keys(errors).length === 0) {
      const formInfo = { ...formData };
      formInfo.avatarUrl = formInfo.avatarUrl || null;
      onSubmit(formInfo);
      setFormData(initialFormData);
    }
  };

  useEffect(() => {
    if (!open) {
      setFormData(initialFormData);
      setFormErrors(initialFormData);
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Person</DialogTitle>
      <DialogContent>
        <TextField
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          required
          error={formErrors.email !== ""}
          helperText={formErrors.email}
        />
        <TextField
          name="jobRole"
          label="Job Role"
          value={formData.jobRole}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          name="avatarUrl"
          label="Avatar URL"
          value={formData.avatarUrl}
          onChange={handleInputChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          disabled={
            Object.keys(formData)
              .filter((key) => key !== "avatarUrl")
              .some((key) => formData[key] === "") ||
            Object.values(formErrors).some((error) => error !== "")
          }
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePersonDialog;
